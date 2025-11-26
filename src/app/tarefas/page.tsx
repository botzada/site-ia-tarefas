'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

export default function TarefasPage() {
  const [inputText, setInputText] = useState('')
  const [tasks, setTasks] = useState('')
  const [loading, setLoading] = useState(false)

  const generateTasks = async () => {
    if (!inputText.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: inputText }),
      })

      if (!response.ok) {
        throw new Error('Erro ao gerar tarefas')
      }

      const data = await response.json()
      setTasks(data.tasks)
    } catch (error) {
      console.error('Erro:', error)
      setTasks('Erro ao gerar tarefas. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">✅ Organizador de Tarefas</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Descrição do Projeto/Tarefa</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Descreva o projeto ou tarefa que deseja organizar..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={15}
              className="mb-4"
            />
            <Button onClick={generateTasks} disabled={loading || !inputText.trim()}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Gerar Lista de Tarefas
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Tarefas Gerada</CardTitle>
          </CardHeader>
          <CardContent>
            {tasks ? (
              <div className="whitespace-pre-wrap text-sm">{tasks}</div>
            ) : (
              <p className="text-muted-foreground">A lista de tarefas aparecerá aqui...</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}