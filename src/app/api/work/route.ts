import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { description } = await request.json()

    if (!description || typeof description !== 'string') {
      return NextResponse.json({ error: 'Descrição inválida' }, { status: 400 })
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente especializado em criar conteúdos acadêmicos e profissionais completos. Gere um trabalho estruturado baseado na descrição fornecida.'
        },
        {
          role: 'user',
          content: `Com base na seguinte descrição, crie um trabalho completo em português, incluindo introdução, desenvolvimento e conclusão:\\n\\n${description}`
        }
      ],
      max_tokens: 2000,
      temperature: 0.7,
    })

    const work = completion.choices[0]?.message?.content?.trim() || 'Erro ao gerar trabalho'

    return NextResponse.json({ work })
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}