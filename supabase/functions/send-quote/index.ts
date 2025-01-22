import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
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
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, event, message } = await req.json() as QuoteRequest;
    console.log('Received quote request:', { name, email, event, message });

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['sabrina.sakho@gmail.com'],
        subject: `Nouvelle demande de devis de ${name}`,
        html: `
          <h2>Nouvelle demande de devis</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Type d'événement :</strong> ${event}</p>
          <p><strong>Message :</strong> ${message}</p>
        `,
      }),
    });

    const responseData = await response.json();
    console.log('Resend API response:', responseData);

    if (!response.ok) {
      throw new Error(`Erreur Resend: ${JSON.stringify(responseData)}`);
    }

    return new Response(JSON.stringify(responseData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error: any) {
    console.error('Erreur dans la fonction send-quote:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Une erreur est survenue lors de l\'envoi du devis' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});