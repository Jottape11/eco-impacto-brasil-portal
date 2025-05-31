
import React, { useEffect, useState } from 'react';
import { Heart, Mail, Share2, ArrowRight, Users, TrendingUp } from 'lucide-react';

const CallToAction = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDonate = () => {
    // Implementar lógica de doação
    console.log('Redirecionando para página de doação...');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Eco Impacto Brasil - O Chamado',
        text: 'Conheça histórias reais dos desastres climáticos no Brasil e faça parte da mudança.',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section id="contato" className="relative py-16 sm:py-20 overflow-hidden fade-in-on-scroll">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-200"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop&q=80')`,
          transform: `translateY(${scrollY * 0.3}px)`,
          filter: 'blur(1px)'
        }}
        role="img"
        aria-label="Imagem inspiradora de esperança e mudança climática representando a força da natureza"
      />
      
      {/* Vibrant overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 via-red-600/85 to-orange-700/85" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-6 sm:mb-8 animate-pulse" aria-hidden="true" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Faça Parte da <span className="text-yellow-300">Mudança</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            Cada história compartilhada, cada doação, cada voz levantada faz a diferença. 
            Juntos, podemos construir um Brasil mais preparado para o futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <button 
              onClick={handleDonate}
              className="btn-primary bg-white text-orange-600 hover:bg-gray-100 focus:bg-gray-100 w-full sm:w-auto flex items-center justify-center group"
              aria-label="Fazer uma doação para apoiar o projeto"
            >
              <Heart className="w-5 h-5 mr-2 group-hover:text-red-500 transition-colors" aria-hidden="true" />
              Quero Ajudar
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
            
            <button 
              onClick={handleShare}
              className="btn-secondary w-full sm:w-auto flex items-center justify-center"
              aria-label="Compartilhar o projeto Eco Impacto Brasil"
            >
              <Share2 className="w-5 h-5 mr-2" aria-hidden="true" />
              Compartilhar
            </button>
          </div>

          {/* Contact Information */}
          <div className="card-hover bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 max-w-2xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Entre em Contato</h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center text-white/90">
                <Mail className="w-5 h-5 mr-3 text-yellow-300" aria-hidden="true" />
                <span className="text-sm sm:text-base font-medium">contato@ecoimpactobrasil.org</span>
              </div>
              
              <div className="hidden sm:block w-px h-6 bg-white/30" aria-hidden="true"></div>
              
              <a 
                href="mailto:contato@ecoimpactobrasil.org" 
                className="interactive-element bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-all duration-300"
                aria-label="Enviar email para contato@ecoimpactobrasil.org"
              >
                Enviar Email
              </a>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { value: '4.2M+', label: 'Pessoas Impactadas', detail: 'Desde 2020', icon: Users, color: 'text-blue-300' },
              { value: '100+', label: 'Histórias Documentadas', detail: 'Vozes reais', icon: Heart, color: 'text-red-300' },
              { value: 'R$15B', label: 'Em Prejuízos Evitáveis', detail: 'Potencial de prevenção', icon: TrendingUp, color: 'text-green-300' }
            ].map((stat, index) => (
              <div key={index} className="text-center card-hover group">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} aria-hidden="true" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 text-sm sm:text-base font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-white/70 text-xs">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
