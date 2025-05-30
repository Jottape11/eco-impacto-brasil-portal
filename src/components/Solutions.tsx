
import React from 'react';
import { Lightbulb, Shield, Users, Smartphone, Zap, Heart } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Shield,
      title: 'Abrigos Flutuantes',
      description: 'Estruturas modulares que se adaptam às enchentes, mantendo as comunidades seguras.',
      status: 'Em desenvolvimento',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: Smartphone,
      title: 'App de Alertas',
      description: 'Sistema de notificações em tempo real sobre riscos climáticos via IA.',
      status: 'Piloto ativo',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: Zap,
      title: 'IA Preventiva',
      description: 'Algoritmos que preveem desastres com 72h de antecedência.',
      status: 'Em testes',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      icon: Users,
      title: 'Rede Comunitária',
      description: 'Plataforma que conecta voluntários, vítimas e recursos em tempo real.',
      status: 'Disponível',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluções <span className="text-orange-400">Inovadoras</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologia e solidariedade trabalhando juntas para criar um futuro mais resiliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`${solution.bgColor} backdrop-blur-sm rounded-lg p-8 border border-slate-700 transition-all duration-300 hover:scale-105`}
            >
              <solution.icon className={`w-12 h-12 ${solution.color} mb-6`} />
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${solution.color} bg-slate-800`}>
                  {solution.status}
                </span>
                <button className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça Parte da Mudança
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Cada história compartilhada, cada doação, cada voz levantada faz a diferença. 
            Juntos, podemos construir um Brasil mais preparado para o futuro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Quero Ajudar
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
