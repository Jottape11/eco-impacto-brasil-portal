
import React from 'react';
import { Lightbulb, Shield, Users, Smartphone, Zap, Heart, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Shield,
      title: 'Abrigos Flutuantes',
      description: 'Estruturas modulares que se adaptam às enchentes, mantendo as comunidades seguras.',
      status: 'Em desenvolvimento',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Smartphone,
      title: 'App de Alertas',
      description: 'Sistema de notificações em tempo real sobre riscos climáticos via IA.',
      status: 'Piloto ativo',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Zap,
      title: 'IA Preventiva',
      description: 'Algoritmos que preveem desastres com 72h de antecedência.',
      status: 'Em testes',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Users,
      title: 'Rede Comunitária',
      description: 'Plataforma que conecta voluntários, vítimas e recursos em tempo real.',
      status: 'Disponível',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30'
    }
  ];

  return (
    <section id="solucoes" className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 to-green-900 border-t-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Soluções <span className="text-orange-400">Inovadoras</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            Tecnologia e solidariedade trabalhando juntas para criar um futuro mais resiliente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`${solution.bgColor} backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 ${solution.borderColor} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl`}
            >
              <solution.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${solution.color} mb-4 sm:mb-6`} />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{solution.description}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${solution.color} bg-slate-800/60 border border-slate-600`}>
                  {solution.status}
                </span>
                <button className="group text-orange-400 hover:text-orange-300 font-semibold transition-colors flex items-center text-sm sm:text-base">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Showcase */}
        <div className="bg-gradient-to-r from-slate-800/50 to-green-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 text-center border border-slate-600">
          <Lightbulb className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-4 sm:mb-6" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Inovação que <span className="text-yellow-400">Salva Vidas</span>
          </h3>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Nossas soluções combinam tecnologia de ponta com conhecimento local para criar sistemas de prevenção e resposta mais eficazes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2">72h</div>
              <div className="text-gray-300 text-sm sm:text-base">Antecedência de Alertas</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm sm:text-base">Precisão dos Modelos</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-300 text-sm sm:text-base">Vidas Salvas</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm sm:text-base">Monitoramento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
