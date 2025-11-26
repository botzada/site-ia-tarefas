import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Texto inválido' }, { status: 400 })
    }

    // Validar se a API key existe
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY não configurada')
      return NextResponse.json({ 
        error: 'Chave da API OpenAI não configurada. Configure OPENAI_API_KEY no arquivo .env.local' 
      }, { status: 500 })
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente especializado em criar resumos concisos e informativos. Responda apenas com o resumo, sem introduções ou conclusões adicionais.'
        },
        {
          role: 'user',
          content: `Resuma o seguinte texto em português, mantendo os pontos principais e tornando-o conciso:\n\n${text}`
        }
      ],
      max_tokens: 500,
      temperature: 0.3,
    })

    const summary = completion.choices[0]?.message?.content?.trim() || 'Erro ao gerar resumo'

    return NextResponse.json({ summary })
  } catch (error: any) {
    console.error('Erro na API:', error)
    
    // Mensagens de erro mais específicas
    if (error?.status === 401) {
      return NextResponse.json({ 
        error: 'Chave da API OpenAI inválida. Verifique sua OPENAI_API_KEY no arquivo .env.local' 
      }, { status: 401 })
    }
    
    if (error?.status === 429) {
      return NextResponse.json({ 
        error: 'Limite de requisições excedido. Tente novamente em alguns instantes.' 
      }, { status: 429 })
    }

    return NextResponse.json({ 
      error: error?.message || 'Erro interno do servidor' 
    }, { status: 500 })
  }
}
