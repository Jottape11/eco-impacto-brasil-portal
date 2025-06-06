import React, { useEffect, useState } from 'react';
import { AlertTriangle, Users, DollarSign, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [visibleStats, setVisibleStats] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 1000);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { 
      icon: AlertTriangle, 
      value: '83%', 
      label: 'Aumento em eventos extremos', 
      color: 'text-orange-400',
      source: 'INMET, 2024'
    },
    { 
      icon: Users, 
      value: '4.2M', 
      label: 'Pessoas afetadas anualmente', 
      color: 'text-red-400',
      source: 'Defesa Civil, 2024'
    },
    { 
      icon: DollarSign, 
      value: 'R$15B', 
      label: 'Em prejuízos anuais', 
      color: 'text-yellow-400',
      source: 'Banco Mundial, 2024'
    }
  ];

  const scrollToTimeline = () => {
    document.querySelector('#timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-200"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop&q=80')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: 'blur(1px)'
        }}
        role="img"
        aria-label="Paisagem montanhosa nebulosa representando a incerteza climática"
      />
      
      {/* Dark overlay for text readability - Enhanced contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-green-900/90" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234A5568%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20">
        {/* Emotional Hook */}
        <div className="mb-8 animate-fade-in">
          <blockquote className="text-lg sm:text-xl text-orange-300 italic mb-4 font-medium">
            "Quando a natureza grita, precisamos ouvir."
          </blockquote>
          <p className="text-gray-300 text-sm">— Maria das Águas, sobrevivente das enchentes no RS</p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight drop-shadow-lg">
          O <span className="text-orange-400">Chamado</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-8 animate-fade-in font-medium drop-shadow-md" style={{ animationDelay: '0.3s' }}>
          Resposta à Crise Climática
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed px-2 drop-shadow-sm" style={{ animationDelay: '0.6s' }}>
          Descubra as histórias reais por trás dos desastres climáticos no Brasil. 
          Dados que importam. Vidas que merecem ser ouvidas.
        </p>

        {/* Statistics */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 transition-all duration-1000 ${
          visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus-within:ring-4 focus-within:ring-orange-400/30">
              <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${stat.color} mx-auto mb-4`} aria-hidden="true" />
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-2 drop-shadow-sm`}>
                {stat.value}
              </div>
              <div className="text-gray-200 text-sm sm:text-base font-medium mb-2">{stat.label}</div>
              <div className="text-gray-400 text-xs">{stat.source}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button 
            onClick={scrollToTimeline}
            className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-400/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in shadow-lg hover:shadow-xl w-full sm:w-auto" 
            style={{ animationDelay: '0.9s' }}
          >
            Explore as Histórias
          </button>
          
          <Link 
            to="/video"
            className="flex items-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 focus:bg-white focus:text-slate-900 focus:outline-none focus:ring-4 focus:ring-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
          >
            <Play className="w-5 h-5" aria-hidden="true" />
            Assista ao Vídeo
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-white/70 text-sm mt-2">Role para descobrir</p>
        </div>
      </div>

      {/* Animated rain effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 2}s`,
              animation: 'rain 3s linear infinite'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
