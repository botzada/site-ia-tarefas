'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, FileText, Zap, AlertCircle } from 'lucide-react'

export default function ResumosPage() {
  const [inputText, setInputText] = useState('')
  const [summary, setSummary] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generateSummary = async () => {
    if (!inputText.trim()) return

    setLoading(true)
    setError('')
    setSummary('')
    
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao gerar resumo')
      }

      setSummary(data.summary)
    } catch (error: any) {
      console.error('Erro:', error)
      setError(error.message || 'Erro ao gerar resumo. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto p-8 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-16 h-16 text-blue-500 mr-4" />
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Gerador de Resumos
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforme textos extensos em resumos concisos e inteligentes com o poder da IA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 hover:shadow-blue-500/20 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <FileText className="w-8 h-8 mr-3" />
                Texto Original
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Textarea
                placeholder="Cole ou digite o texto que deseja resumir aqui..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={15}
                className="mb-6 border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
              />
              <Button
                onClick={generateSummary}
                disabled={loading || !inputText.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Gerando Resumo...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Gerar Resumo
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 hover:shadow-purple-500/20 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <Zap className="w-8 h-8 mr-3" />
                Resumo Gerado
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {error ? (
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg animate-fade-in">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 dark:text-red-300 mb-1">Erro ao gerar resumo</h3>
                      <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                    </div>
                  </div>
                </div>
              ) : summary ? (
                <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500 animate-fade-in">
                  {summary}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    O resumo inteligente aparecerá aqui...
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
