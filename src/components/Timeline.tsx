
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Zap } from 'lucide-react';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      year: '2024',
      title: 'Enchentes no Rio Grande do Sul',
      location: 'Rio Grande do Sul',
      affected: '2.3 milhões',
      description: 'As maiores enchentes da história do estado deixaram milhares de desabrigados e causaram prejuízos bilionários.',
      impact: 'Mais de 600 mil pessoas deslocadas',
      color: 'border-blue-500',
      bgColor: 'bg-blue-500/20'
    },
    {
      year: '2023',
      title: 'Seca Histórica na Amazônia',
      location: 'Região Norte',
      affected: '420 mil',
      description: 'Rios atingiram níveis históricos baixos, isolando comunidades ribeirinhas e afetando a biodiversidade.',
      impact: 'Navegação fluvial comprometida por meses',
      color: 'border-yellow-500',
      bgColor: 'bg-yellow-500/20'
    },
    {
      year: '2022',
      title: 'Deslizamentos em Petrópolis',
      location: 'Rio de Janeiro',
      affected: '300 mil',
      description: 'Chuvas torrenciais causaram deslizamentos devastadores na região serrana.',
      impact: '233 mortes confirmadas',
      color: 'border-red-500',
      bgColor: 'bg-red-500/20'
    },
    {
      year: '2021',
      title: 'Onda de Calor Extremo',
      location: 'Centro-Oeste',
      affected: '1.2 milhões',
      description: 'Temperaturas recordes afetaram a agricultura e a saúde pública.',
      impact: 'Perdas de R$ 8 bilhões na agricultura',
      color: 'border-orange-500',
      bgColor: 'bg-orange-500/20'
    },
    {
      year: '2020',
      title: 'Incêndios no Pantanal',
      location: 'Pantanal',
      affected: '500 mil',
      description: 'Queimadas destruíram 30% do bioma, afetando fauna, flora e comunidades locais.',
      impact: '4.1 milhões de hectares queimados',
      color: 'border-red-600',
      bgColor: 'bg-red-600/20'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Timeline de <span className="text-orange-400">Eventos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma linha do tempo interativa dos principais desastres climáticos no Brasil entre 2020 e 2024
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-orange-400 via-blue-400 to-red-400"></div>

          {events.map((event, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className={`w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} flex items-center`}>
                {/* Content card */}
                <div className="w-5/12">
                  <div 
                    className={`${event.bgColor} backdrop-blur-sm rounded-lg p-6 border-2 ${event.color} cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedEvent === index ? 'ring-4 ring-white/20' : ''
                    }`}
                    onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                  >
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-xl font-bold text-white">{event.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    
                    <div className="flex items-center text-gray-300 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-300 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.affected} afetados</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                    
                    {selectedEvent === index && (
                      <div className="mt-4 p-4 bg-slate-900/50 rounded-lg animate-fade-in">
                        <div className="flex items-center text-yellow-400 mb-2">
                          <Zap className="w-4 h-4 mr-2" />
                          <span className="font-semibold">Impacto Principal</span>
                        </div>
                        <p className="text-gray-300">{event.impact}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-orange-400 z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
