
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Zap, Cloud, Droplets, Sun, Wind } from 'lucide-react';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleEvents(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const eventElements = document.querySelectorAll('[data-index]');
    eventElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const events = [
    {
      year: '2024',
      title: 'Enchentes no Rio Grande do Sul',
      location: 'Rio Grande do Sul',
      affected: '2.3 milhões',
      description: 'As maiores enchentes da história do estado deixaram milhares de desabrigados e causaram prejuízos bilionários.',
      impact: 'Mais de 600 mil pessoas deslocadas',
      source: 'Defesa Civil RS, maio 2024',
      color: 'border-blue-500',
      bgColor: 'bg-blue-500/20',
      icon: Droplets,
      severity: 'critical',
      imageAlt: 'Representação visual das enchentes devastadoras no Rio Grande do Sul'
    },
    {
      year: '2023',
      title: 'Seca Histórica na Amazônia',
      location: 'Região Norte',
      affected: '420 mil',
      description: 'Rios atingiram níveis históricos baixos, isolando comunidades ribeirinhas e afetando a biodiversidade.',
      impact: 'Navegação fluvial comprometida por meses',
      source: 'INPE/ANA, outubro 2023',
      color: 'border-yellow-500',
      bgColor: 'bg-yellow-500/20',
      icon: Sun,
      severity: 'high',
      imageAlt: 'Paisagem amazônica durante período de seca extrema'
    },
    {
      year: '2022',
      title: 'Deslizamentos em Petrópolis',
      location: 'Rio de Janeiro',
      affected: '300 mil',
      description: 'Chuvas torrenciais causaram deslizamentos devastadores na região serrana.',
      impact: '233 mortes confirmadas',
      source: 'Defesa Civil RJ, fevereiro 2022',
      color: 'border-red-500',
      bgColor: 'bg-red-500/20',
      icon: Cloud,
      severity: 'critical',
      imageAlt: 'Região serrana de Petrópolis após deslizamentos causados pelas chuvas'
    },
    {
      year: '2021',
      title: 'Onda de Calor Extremo',
      location: 'Centro-Oeste',
      affected: '1.2 milhões',
      description: 'Temperaturas recordes afetaram a agricultura e a saúde pública.',
      impact: 'Perdas de R$ 8 bilhões na agricultura',
      source: 'INMET/IBGE, setembro 2021',
      color: 'border-orange-500',
      bgColor: 'bg-orange-500/20',
      icon: Sun,
      severity: 'high',
      imageAlt: 'Plantação afetada por onda de calor extremo no Centro-Oeste'
    },
    {
      year: '2020',
      title: 'Incêndios no Pantanal',
      location: 'Pantanal',
      affected: '500 mil',
      description: 'Queimadas destruíram 30% do bioma, afetando fauna, flora e comunidades locais.',
      impact: '4.1 milhões de hectares queimados',
      source: 'INPE, setembro 2020',
      color: 'border-red-600',
      bgColor: 'bg-red-600/20',
      icon: Wind,
      severity: 'critical',
      imageAlt: 'Pantanal durante os grandes incêndios de 2020'
    }
  ];

  const handleEventClick = (index) => {
    setSelectedEvent(selectedEvent === index ? null : index);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleEventClick(index);
    }
  };

  return (
    <section id="timeline" className="relative py-16 sm:py-20 overflow-hidden fade-in-on-scroll">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-200"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=1080&fit=crop&q=80')`,
          transform: `translateY(${scrollY * 0.3}px)`,
          filter: 'blur(1px)'
        }}
        role="img"
        aria-label="Ponte e cachoeiras durante período de enchente representando eventos climáticos extremos"
      />
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 to-slate-900/95" />
      
      {/* Orange accent border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Timeline de <span className="text-orange-400">Eventos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-2">
            Uma linha do tempo interativa dos principais desastres climáticos no Brasil entre 2020 e 2024
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-orange-400 via-blue-400 to-red-400"></div>

          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative mb-8 sm:mb-12"
              data-index={index}
            >
              <div className={`w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex items-center`}>
                {/* Content card */}
                <div className="w-full md:w-5/12 mb-4 md:mb-0">
                  <article 
                    className={`card-hover ${event.bgColor} backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 ${event.color} cursor-pointer group ${
                      visibleEvents.includes(index) ? 'animate-fade-in opacity-100' : 'opacity-0'
                    } ${selectedEvent === index ? 'ring-4 ring-orange-400/30 scale-105 shadow-2xl' : ''} ${
                      event.severity === 'critical' ? 'animate-pulse' : ''
                    }`}
                    onClick={() => handleEventClick(index)}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={selectedEvent === index}
                    aria-describedby={`event-${index}-description`}
                    aria-label={`Evento de ${event.year}: ${event.title}. Pressione Enter para expandir detalhes.`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <header className="flex items-center mb-4 sm:mb-6">
                      <event.icon 
                        className={`w-6 h-6 ${event.color.replace('border-', 'text-')} mr-3 transition-all duration-300 group-hover:scale-110 ${selectedEvent === index ? 'scale-125' : ''}`} 
                        aria-hidden="true" 
                      />
                      <Calendar className="w-5 h-5 text-orange-400 mr-2" aria-hidden="true" />
                      <span className="text-xl sm:text-2xl font-bold text-white">{event.year}</span>
                      {event.severity === 'critical' && (
                        <span className="ml-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                          CRÍTICO
                        </span>
                      )}
                    </header>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-orange-300 transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-200 mb-2 text-sm sm:text-base">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-orange-400" aria-hidden="true" />
                      <span>{event.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-200 mb-4 text-sm sm:text-base">
                      <Users className="w-4 h-4 mr-2 flex-shrink-0 text-orange-400" aria-hidden="true" />
                      <span>{event.affected} afetados</span>
                    </div>
                    
                    <p id={`event-${index}-description`} className="text-gray-200 text-sm sm:text-base mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {selectedEvent === index && (
                      <div className="mt-4 sm:mt-6 space-y-4 animate-fade-in">
                        <div className="p-4 sm:p-6 bg-slate-900/80 rounded-lg border border-slate-600 transition-all duration-300 hover:border-orange-400/50">
                          <div className="flex items-center text-yellow-400 mb-3">
                            <Zap className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span className="font-semibold text-sm sm:text-base">Impacto Principal</span>
                          </div>
                          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{event.impact}</p>
                        </div>
                        
                        <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                          <p className="text-gray-300 text-xs sm:text-sm">
                            <span className="font-medium text-orange-400">Fonte:</span> {event.source}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4 text-center">
                      <span className="text-orange-400 text-sm font-medium transition-all duration-300 group-hover:text-orange-300">
                        {selectedEvent === index ? '▲ Pressione para recolher' : '▼ Pressione para expandir'}
                      </span>
                    </div>
                  </article>
                </div>

                {/* Timeline dot - Only visible on desktop */}
                <div className={`timeline-dot hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-orange-400 z-10 shadow-lg ${
                  selectedEvent === index ? 'bg-orange-400 scale-150 active' : 'bg-white hover:bg-orange-100'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
