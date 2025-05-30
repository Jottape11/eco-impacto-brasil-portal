
import React, { useEffect, useState } from 'react';
import { AlertTriangle, Users, DollarSign } from 'lucide-react';

const HeroSection = () => {
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: AlertTriangle, value: '83%', label: 'Aumento em eventos extremos', color: 'text-orange-400' },
    { icon: Users, value: '4.2M', label: 'Pessoas afetadas', color: 'text-red-400' },
    { icon: DollarSign, value: 'R$15B', label: 'Em prejuízos', color: 'text-yellow-400' }
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234A5568%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          O <span className="text-orange-400">Chamado</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Resposta à Crise Climática
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Descubra as histórias reais por trás dos desastres climáticos no Brasil. 
          Dados que importam. Vidas que merecem ser ouvidas.
        </p>

        {/* Statistics */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${
          visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          Explore as Histórias
        </button>
      </div>

      {/* Animated rain effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 2}s`,
              animation: 'rain 2s linear infinite'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
