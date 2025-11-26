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
          content: 'Você é um assistente especializado em organizar tarefas e projetos. Crie listas de tarefas estruturadas e priorizadas.'
        },
        {
          role: 'user',
          content: `Com base na seguinte descrição, crie uma lista organizada de tarefas em português, numeradas e priorizadas:\\n\\n${description}`
        }
      ],
      max_tokens: 1000,
      temperature: 0.5,
    })

    const tasks = completion.choices[0]?.message?.content?.trim() || 'Erro ao gerar tarefas'

    return NextResponse.json({ tasks })
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}