import { serve } from "https://deno.fresh.run/std@0.168.0/http/server.ts";
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

interface QuoteRequest {
  name: string;
  email: string;
  event: string;
  message: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, event, message } = await req.json() as QuoteRequest;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Cakes By Sab <no-reply@resend.dev>',
        to: 'sabrina.sakho@gmail.com',
        subject: `Nouvelle demande de devis de ${name}`,
        text: `
Nouvelle demande de devis reçue :

Nom : ${name}
Email : ${email}
Type d'événement : ${event}
Message : ${message}
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});