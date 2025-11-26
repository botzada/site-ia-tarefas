import Link from 'next/link'
import { FileText, CheckCircle, FolderOpen } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4 drop-shadow-lg">
          AI Assistant Hub
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Potencialize sua produtividade com inteligência artificial! Gere resumos inteligentes, organize tarefas automaticamente e crie trabalhos acadêmicos ou profissionais de alta qualidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <Link href="/resumos" className="group">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
            <div className="flex items-center mb-4">
              <FileText className="w-12 h-12 text-blue-400 mr-4 group-hover:text-blue-300 transition-colors" />
              <h2 className="text-3xl font-bold text-white">Resumos</h2>
            </div>
            <p className="text-white/80 text-lg">Transforme textos longos em resumos concisos e inteligentes com IA avançada.</p>
          </div>
        </Link>

        <Link href="/tarefas" className="group">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-400 mr-4 group-hover:text-green-300 transition-colors" />
              <h2 className="text-3xl font-bold text-white">Tarefas</h2>
            </div>
            <p className="text-white/80 text-lg">Organize projetos complexos em listas de tarefas estruturadas automaticamente.</p>
          </div>
        </Link>

        <Link href="/trabalhos" className="group">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25">
            <div className="flex items-center mb-4">
              <FolderOpen className="w-12 h-12 text-orange-400 mr-4 group-hover:text-orange-300 transition-colors" />
              <h2 className="text-3xl font-bold text-white">Trabalhos</h2>
            </div>
            <p className="text-white/80 text-lg">Crie conteúdos acadêmicos e profissionais completos com ajuda da IA.</p>
          </div>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <p className="text-white/70 text-sm">Powered by Advanced AI Technology</p>
      </div>
    </div>
  )
}