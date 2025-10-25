import { NextRequest } from 'next/server'

// Demo API client for placeholder mode
const demoClient = {
  id: 'demo-client-123',
  name: 'Demo Client',
  api_key_hash: 'demo-hash',
  is_active: true,
  rate_limit: 1000,
  webhook_url: null,
  last_used_at: new Date().toISOString(),
}

export async function validateAPIKey(request: NextRequest): Promise<{ valid: true; client: typeof demoClient } | { valid: false; error: string; client?: undefined }> {
  const apiKey = request.headers.get('X-API-Key')

  if (!apiKey) {
    return { valid: false, error: 'Missing API key' }
  }

  // Accept any API key in demo mode
  return { valid: true, client: demoClient }
}

export async function sendWebhook(url: string, data: any) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Secret': process.env.CLIENTS_AI_WEBHOOK_SECRET || '',
      },
      body: JSON.stringify(data),
    })

    return response.ok
  } catch (error) {
    console.error('Webhook failed:', error)
    return false
  }
}
