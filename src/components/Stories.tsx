
import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Eye, Share2, Cloud, Droplets, Sun } from 'lucide-react';

const Stories = () => {
  const [expandedStory, setExpandedStory] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stories = [
    {
      id: 1,
      title: 'Maria das Águas',
      subtitle: 'Sobrevivente das enchentes no RS',
      location: 'Porto Alegre, RS',
      preview: 'Perdeu tudo nas enchentes, mas encontrou força na comunidade para recomeçar...',
      fullStory: 'Maria das Águas, de 67 anos, viu sua casa de madeira ser levada pelas águas em maio de 2024. Moradora do bairro Sarandi há 40 anos, ela perdeu móveis, documentos e memórias de uma vida inteira. "A água subiu tão rápido que só deu tempo de pegar meus remédios", conta. Hoje, em um abrigo temporário, Maria ajuda outras famílias e sonha em reconstruir sua vida com a ajuda da comunidade.',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop',
      impact: '15 mil famílias afetadas no bairro',
      hope: 'Projeto de casas sustentáveis em andamento',
      icon: Droplets,
      iconColor: 'text-blue-400'
    },
    {
      id: 2,
      title: 'João Ribeirinho',
      subtitle: 'Pescador isolado pela seca',
      location: 'Manaus, AM',
      preview: 'O rio que sempre foi sua estrada virou areia. Sua comunidade, uma ilha...',
      fullStory: 'João Pereira navega há 30 anos pelos rios da Amazônia. Em 2023, pela primeira vez, viu o Rio Negro tão baixo que sua canoa não conseguia passar. Sua comunidade de 200 pessoas ficou isolada por três meses. "O peixe sumiu, o rio virou areia", relembra. Agora ele participa de um projeto de piscicultura sustentável e alerta sobre as mudanças climáticas.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
      impact: '80 comunidades ribeirinhas isoladas',
      hope: 'Sistema de alerta via satélite implementado',
      icon: Sun,
      iconColor: 'text-yellow-400'
    },
    {
      id: 3,
      title: 'Ana da Montanha',
      subtitle: 'Resgatista voluntária',
      location: 'Petrópolis, RJ',
      preview: 'Salvou 12 vidas nos deslizamentos, mas perdeu sua própria casa...',
      fullStory: 'Ana Silva, enfermeira de 45 anos, estava de plantão quando os deslizamentos começaram. Mesmo com sua casa ameaçada, ela coordenou o resgate de 12 pessoas, incluindo crianças e idosos. "Não podia parar, tinha gente precisando", diz. Sua casa foi destruída dois dias depois, mas Ana continua trabalhando como voluntária na reconstrução da cidade.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      impact: '233 vidas perdidas na tragédia',
      hope: 'Sistema de monitoramento geológico ampliado',
      icon: Cloud,
      iconColor: 'text-gray-400'
    }
  ];

  return (
    <section id="historias" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background with parallax effect - drought imagery */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-200"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=1920&h=1080&fit=crop&q=80')`,
          transform: `translateY(${scrollY * 0.2}px)`,
          filter: 'blur(1px)'
        }}
      />
      
      {/* Dark overlay with green tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-green-900/85 to-slate-800/90" />
      
      {/* Green accent border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-green-600 to-green-700" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Histórias <span className="text-orange-400">Reais</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            Conheça as pessoas por trás dos números. Cada estatística tem um rosto, uma história, uma esperança.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <div
                className="h-48 sm:h-56 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${story.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <story.icon className={`w-6 h-6 ${story.iconColor}`} />
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white text-sm sm:text-base">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{story.title}</h3>
                <p className="text-orange-400 text-sm sm:text-base mb-4 font-medium">{story.subtitle}</p>
                
                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {expandedStory === story.id ? story.fullStory : story.preview}
                </p>

                {expandedStory === story.id && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-red-900/40 p-4 rounded-lg border border-red-500/30">
                      <h4 className="text-red-400 font-semibold mb-2 text-sm sm:text-base">Impacto</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{story.impact}</p>
                    </div>
                    
                    <div className="bg-green-900/40 p-4 rounded-lg border border-green-500/30">
                      <h4 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">Esperança</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{story.hope}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors flex-1">
                        <Share2 className="w-4 h-4" />
                        Compartilhar
                      </button>
                      <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors flex-1">
                        <Heart className="w-4 h-4" />
                        Apoiar
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 mt-4 transition-colors text-sm sm:text-base w-full justify-center sm:justify-start"
                >
                  <Eye className="w-4 h-4" />
                  {expandedStory === story.id ? 'Ver menos' : 'Ler história completa'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Ver Mais Histórias
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
