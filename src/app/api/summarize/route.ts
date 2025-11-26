import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Texto inválido' }, { status: 400 })
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
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
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}