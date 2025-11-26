'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, CheckCircle, Target } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900 dark:to-teal-900">
      <div className="container mx-auto p-8 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500 mr-4" />
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
              Organizador de Tarefas
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforme descrições complexas em listas de tarefas organizadas e estruturadas automaticamente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 hover:shadow-green-500/20 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <Target className="w-8 h-8 mr-3" />
                Descrição do Projeto/Tarefa
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Textarea
                placeholder="Descreva detalhadamente o projeto ou tarefa que deseja organizar..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={15}
                className="mb-6 border-2 border-gray-200 focus:border-green-500 transition-colors resize-none"
              />
              <Button
                onClick={generateTasks}
                disabled={loading || !inputText.trim()}
                className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Organizando Tarefas...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Gerar Lista de Tarefas
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 hover:shadow-teal-500/20 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <CheckCircle className="w-8 h-8 mr-3" />
                Lista de Tarefas Gerada
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {tasks ? (
                <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-teal-500 animate-fade-in">
                  {tasks}
                </div>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    A lista organizada aparecerá aqui...
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}