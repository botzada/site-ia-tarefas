import Link from 'next/link'
import { FileText, CheckCircle, FolderOpen, Star, Zap, Users, Award, Check } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 overflow-y-auto">
      {/* Header com Logo */}
      <header className="flex flex-col items-center justify-center p-8 animate-fade-in">
        <div className="mb-6 animate-bounce">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="50" fill="url(#gradient)" />
            <path d="M40 50 L60 30 L80 50 L60 70 Z" fill="white" />
            <circle cx="60" cy="50" r="5" fill="#FFD700" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#FFD700'}} />
                <stop offset="100%" style={{stopColor:'#FF69B4'}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4 drop-shadow-lg animate-pulse">
          AI Assistant Hub
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Revolucione sua produtividade com IA de ponta! Gere resumos brilhantes, organize tarefas como um mestre e crie trabalhos que impressionam.
        </p>
        <p className="text-2xl font-bold text-yellow-300 mt-4 animate-bounce">
          🚀 Potencialize seu futuro hoje!
        </p>
      </header>

      {/* Seção História */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Nossa História</h2>
        <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
          Fundada em 2023, a AI Assistant Hub nasceu da visão de democratizar o acesso à inteligência artificial. Nossa equipe de especialistas em IA desenvolveu ferramentas intuitivas que transformam ideias complexas em resultados extraordinários. De estudantes sobrecarregados a profissionais ambiciosos, ajudamos milhões a alcançar seus objetivos com eficiência incomparável.
        </p>
        <div className="mt-8 flex justify-center space-x-8">
          <div className="text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-2" />
            <p className="text-white">Milhões de usuários</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 text-green-400 mx-auto mb-2" />
            <p className="text-white">Prêmios de inovação</p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
            <p className="text-white">Tecnologia de ponta</p>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          <Link href="/resumos" className="group">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 animate-fade-in">
              <div className="flex items-center mb-4">
                <FileText className="w-12 h-12 text-blue-400 mr-4 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-3xl font-bold text-white">Resumos</h3>
              </div>
              <p className="text-white/80 text-lg">Transforme textos longos em resumos concisos e inteligentes com IA avançada.</p>
            </div>
          </Link>

          <Link href="/tarefas" className="group">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 animate-fade-in">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-400 mr-4 group-hover:text-green-300 transition-colors" />
                <h3 className="text-3xl font-bold text-white">Tarefas</h3>
              </div>
              <p className="text-white/80 text-lg">Organize projetos complexos em listas de tarefas estruturadas automaticamente.</p>
            </div>
          </Link>

          <Link href="/trabalhos" className="group">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 animate-fade-in">
              <div className="flex items-center mb-4">
                <FolderOpen className="w-12 h-12 text-orange-400 mr-4 group-hover:text-orange-300 transition-colors" />
                <h3 className="text-3xl font-bold text-white">Trabalhos</h3>
              </div>
              <p className="text-white/80 text-lg">Crie conteúdos acadêmicos e profissionais completos com ajuda da IA.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Seção Feedbacks Falsos */}
      <section className="py-16 px-8 bg-white/5">
        <h2 className="text-4xl font-bold text-white text-center mb-12">O que nossos usuários dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 animate-fade-in">
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-white/80 mb-4">"A AI Assistant Hub revolucionou minha produtividade. Resumos em segundos!"</p>
            <p className="text-white font-bold">- Maria Silva, Estudante</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 animate-fade-in">
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-white/80 mb-4">"Organizei meu projeto inteiro em tarefas claras. Incrível!"</p>
            <p className="text-white font-bold">- João Santos, Empreendedor</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 animate-fade-in">
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-white/80 mb-4">"Criei um trabalho acadêmico perfeito com a ajuda da IA. Nota máxima!"</p>
            <p className="text-white font-bold">- Ana Costa, Professora</p>
          </div>
        </div>
      </section>

      {/* Seção Planos */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Escolha seu Plano</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">Básico</h3>
            <p className="text-4xl font-extrabold text-yellow-400 mb-4">R$ 9,99/mês</p>
            <p className="text-white/80 mb-6">100 créditos por mês</p>
            <ul className="text-left text-white/80 mb-6">
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />Resumos ilimitados</li>
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />10 tarefas/mês</li>
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />1 trabalho/mês</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform">
              Comprar Agora
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border-2 border-yellow-400 rounded-2xl p-8 text-center animate-fade-in relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full font-bold">Mais Popular</div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
            <p className="text-4xl font-extrabold text-yellow-400 mb-4">R$ 19,99/mês</p>
            <p className="text-white/80 mb-6">500 créditos por mês</p>
            <ul className="text-left text-white/80 mb-6">
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />Resumos ilimitados</li>
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />50 tarefas/mês</li>
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />5 trabalhos/mês</li>
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />Suporte prioritário</li>
            </ul>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform">
              Comprar Agora
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
            <p className="text-4xl font-extrabold text-yellow-400 mb-4">R$ 39,99/mês</p>
            <p className="text-white/80 mb-6">1000 créditos por mês</p>
            <ul className="text-left text-white/80 mb-6">
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />Tudo ilimitado</li>
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />API access</li>
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />Suporte 24/7</li>
              <li className="flex items-center mb-2"><Check className="w-5 h-5 text-green-400 mr-2" />Relatórios avançados</li>
            </ul>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform">
              Comprar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-white/70 text-sm">Powered by Advanced AI Technology</p>
      </footer>
    </div>
  )
}