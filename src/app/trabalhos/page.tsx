'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, FolderOpen, PenTool } from 'lucide-react'

export default function TrabalhosPage() {
  const [inputText, setInputText] = useState('')
  const [work, setWork] = useState('')
  const [loading, setLoading] = useState(false)

  const generateWork = async () => {
    if (!inputText.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/work', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: inputText }),
      })

      if (!response.ok) {
        throw new Error('Erro ao gerar trabalho')
      }

      const data = await response.json()
      setWork(data.work)
    } catch (error) {
      console.error('Erro:', error)
      setWork('Erro ao gerar trabalho. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900 dark:to-pink-900">
      <div className="container mx-auto p-8 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <FolderOpen className="w-16 h-16 text-orange-500 mr-4" />
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400">
              Criador de Trabalhos
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Gere conteúdos acadêmicos e profissionais completos com a ajuda da IA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 hover:shadow-orange-500/20 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <PenTool className="w-8 h-8 mr-3" />
                Descrição do Trabalho
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Textarea
                placeholder="Descreva o tema, tipo de trabalho e requisitos que deseja..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={15}
                className="mb-6 border-2 border-gray-200 focus:border-orange-500 transition-colors resize-none"
              />
              <Button
                onClick={generateWork}
                disabled={loading || !inputText.trim()}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Criando Trabalho...
                  </>
                ) : (
                  <>
                    <FolderOpen className="mr-2 h-5 w-5" />
                    Gerar Trabalho
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 hover:shadow-pink-500/20 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <FolderOpen className="w-8 h-8 mr-3" />
                Trabalho Gerado
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {work ? (
                <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-pink-500 animate-fade-in">
                  {work}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FolderOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    O trabalho completo aparecerá aqui...
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