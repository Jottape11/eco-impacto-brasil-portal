
import React, { useEffect, useState } from 'react';
import { Lightbulb, Shield, Users, Smartphone, Zap, Heart, ArrowRight, ExternalLink, CheckCircle, Clock, Wrench } from 'lucide-react';

const Solutions = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      icon: Shield,
      title: 'Abrigos Flutuantes',
      description: 'Estruturas modulares que se adaptam às enchentes, mantendo as comunidades seguras durante eventos extremos.',
      status: 'Em desenvolvimento',
      statusIcon: Wrench,
      progress: 65,
      partner: 'UFRGS + Defesa Civil',
      timeline: 'Conclusão: 2025',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      link: '#abrigos-flutuantes'
    },
    {
      icon: Smartphone,
      title: 'App ClimAlert',
      description: 'Sistema de notificações em tempo real sobre riscos climáticos usando inteligência artificial e dados meteorológicos.',
      status: 'Piloto ativo',
      statusIcon: CheckCircle,
      progress: 85,
      partner: 'INPE + Startups',
      timeline: '12 mil usuários ativos',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      link: '#climalert-app'
    },
    {
      icon: Zap,
      title: 'IA Preventiva',
      description: 'Algoritmos de machine learning que analisam padrões climáticos para prever desastres com até 72h de antecedência.',
      status: 'Em testes',
      statusIcon: Clock,
      progress: 75,
      partner: 'USP + Google Cloud',
      timeline: 'Beta: março 2025',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30',
      link: '#ia-preventiva'
    },
    {
      icon: Users,
      title: 'Rede Solidária',
      description: 'Plataforma colaborativa que conecta voluntários, vítimas e recursos em tempo real durante emergências climáticas.',
      status: 'Disponível',
      statusIcon: CheckCircle,
      progress: 100,
      partner: 'Cruz Vermelha + ONGs',
      timeline: '50 mil voluntários',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      link: '#rede-solidaria'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Disponível': return 'text-green-400 bg-green-900/40 border-green-500/50';
      case 'Piloto ativo': return 'text-blue-400 bg-blue-900/40 border-blue-500/50';
      case 'Em testes': return 'text-yellow-400 bg-yellow-900/40 border-yellow-500/50';
      default: return 'text-orange-400 bg-orange-900/40 border-orange-500/50';
    }
  };

  return (
    <section id="solucoes" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background with parallax effect - wildfire imagery */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-200"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&h=1080&fit=crop&q=80')`,
          transform: `translateY(${scrollY * 0.4}px)`,
          filter: 'blur(1px)'
        }}
        role="img"
        aria-label="Imagem de fundo mostrando floresta com raios de sol, representando esperança e soluções"
      />
      
      {/* Dark overlay with blue tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-green-900/90" />
      
      {/* Blue accent border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Soluções <span className="text-orange-400">Inovadoras</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-2">
            Tecnologia e solidariedade trabalhando juntas para criar um futuro mais resiliente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {solutions.map((solution, index) => (
            <article
              key={index}
              className={`${solution.bgColor} backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 ${solution.borderColor} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl focus-within:ring-4 focus-within:ring-white/20`}
            >
              <header className="flex items-center justify-between mb-6">
                <solution.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${solution.color}`} aria-hidden="true" />
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${getStatusColor(solution.status)}`}>
                  <solution.statusIcon className="w-4 h-4" aria-hidden="true" />
                  {solution.status}
                </div>
              </header>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{solution.title}</h3>
              <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{solution.description}</p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>Progresso</span>
                  <span>{solution.progress}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${solution.color.replace('text-', 'bg-')}`}
                    style={{ width: `${solution.progress}%` }}
                    role="progressbar"
                    aria-valuenow={solution.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Progresso da solução ${solution.title}: ${solution.progress}%`}
                  ></div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span className="font-medium">Parceiros:</span>
                  <span>{solution.partner}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="font-medium">Timeline:</span>
                  <span>{solution.timeline}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <a 
                  href={solution.link}
                  className="group text-orange-400 hover:text-orange-300 focus:text-orange-300 focus:outline-none focus:underline font-semibold transition-colors flex items-center text-sm sm:text-base"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                <button className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:underline text-sm transition-colors">
                  Receber atualizações
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Innovation Showcase */}
        <div className="bg-gradient-to-r from-slate-800/60 to-green-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 text-center border border-slate-600">
          <Lightbulb className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-4 sm:mb-6" aria-hidden="true" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Inovação que <span className="text-yellow-400">Salva Vidas</span>
          </h3>
          <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Nossas soluções combinam tecnologia de ponta com conhecimento local para criar sistemas de prevenção e resposta mais eficazes.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center mb-8">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2">72h</div>
              <div className="text-gray-200 text-sm sm:text-base">Antecedência de Alertas</div>
              <div className="text-gray-400 text-xs mt-1">Validado em 95% dos casos</div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-xl sm:text-2xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-200 text-sm sm:text-base">Precisão dos Modelos</div>
              <div className="text-gray-400 text-xs mt-1">Machine Learning + IoT</div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-200 text-sm sm:text-base">Vidas Salvas</div>
              <div className="text-gray-400 text-xs mt-1">Desde 2023</div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-200 text-sm sm:text-base">Monitoramento</div>
              <div className="text-gray-400 text-xs mt-1">Rede de sensores IoT</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
              Ver Roadmap Completo
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 focus:bg-yellow-400 focus:text-slate-900 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Tornar-se Parceiro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
