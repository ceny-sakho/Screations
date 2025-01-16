import { serve } from 'https://deno.fresh.run/std@0.168.0/http/server.ts'
const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY')

interface QuoteRequest {
  name: string
  email: string
  event: string
  message: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: corsHeaders
    })
  }

  try {
    const { name, email, event, message } = await req.json() as QuoteRequest
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'sabrina.sakho@gmail.com' }],
            subject: `Nouveau devis de ${name}`,
          },
        ],
        from: { email: 'no-reply@votredomaine.com', name: 'Votre Entreprise' },
        content: [
          {
            type: 'text/plain',
            value: `
Nouveau devis reçu :
Nom: ${name}
Email: ${email}
Événement: ${event}
Message: ${message}
            `,
          },
        ],
      }),
    })

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi de l\'email')
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: corsHeaders
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: corsHeaders
      }
    )
  }
})
