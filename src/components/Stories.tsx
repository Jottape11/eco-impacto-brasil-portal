import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Eye, Share2, Cloud, Droplets, Sun, ExternalLink, Volume2, User, AlertTriangle } from 'lucide-react';

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
      age: '67 anos',
      quote: '"A água subiu tão rápido que só deu tempo de pegar meus remédios"',
      preview: 'Perdeu tudo nas enchentes, mas encontrou força na comunidade para recomeçar...',
      fullStory: 'Maria das Águas, de 67 anos, viu sua casa de madeira ser levada pelas águas em maio de 2024. Moradora do bairro Sarandi há 40 anos, ela perdeu móveis, documentos e memórias de uma vida inteira. Hoje, em um abrigo temporário, Maria ajuda outras famílias e sonha em reconstruir sua vida com a ajuda da comunidade. Sua resiliência inspira todos ao redor.',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop',
      impact: '15 mil famílias afetadas no bairro',
      hope: 'Projeto de casas sustentáveis em andamento',
      icon: Droplets,
      iconColor: 'text-blue-400',
      hasAudio: true,
      imageAlt: 'Retrato representativo de Maria das Águas, uma mulher idosa resiliente que sobreviveu às enchentes no Rio Grande do Sul'
    },
    {
      id: 2,
      title: 'João Ribeirinho',
      subtitle: 'Pescador isolado pela seca',
      location: 'Manaus, AM',
      age: '52 anos',
      quote: '"O peixe sumiu, o rio virou areia"',
      preview: 'O rio que sempre foi sua estrada virou areia. Sua comunidade, uma ilha...',
      fullStory: 'João Pereira navega há 30 anos pelos rios da Amazônia. Em 2023, pela primeira vez, viu o Rio Negro tão baixo que sua canoa não conseguia passar. Sua comunidade de 200 pessoas ficou isolada por três meses. Agora ele participa de um projeto de piscicultura sustentável e alerta sobre as mudanças climáticas, compartilhando seu conhecimento tradicional com pesquisadores.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
      impact: '80 comunidades ribeirinhas isoladas',
      hope: 'Sistema de alerta via satélite implementado',
      icon: Sun,
      iconColor: 'text-yellow-400',
      hasAudio: false,
      imageAlt: 'João Ribeirinho em sua canoa no Rio Negro durante o período de seca extrema, mostrando a navegação comprometida'
    },
    {
      id: 3,
      title: 'Ana da Montanha',
      subtitle: 'Resgatista voluntária',
      location: 'Petrópolis, RJ',
      age: '45 anos',
      quote: '"Não podia parar, tinha gente precisando"',
      preview: 'Salvou 12 vidas nos deslizamentos, mas perdeu sua própria casa...',
      fullStory: 'Ana Silva, enfermeira de 45 anos, estava de plantão quando os deslizamentos começaram. Mesmo com sua casa ameaçada, ela coordenou o resgate de 12 pessoas, incluindo crianças e idosos. Sua casa foi destruída dois dias depois, mas Ana continua trabalhando como voluntária na reconstrução da cidade, treinando outros moradores em primeiros socorros.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      impact: '233 vidas perdidas na tragédia',
      hope: 'Sistema de monitoramento geológico ampliado',
      icon: Cloud,
      iconColor: 'text-gray-400',
      hasAudio: true,
      imageAlt: 'Ana da Montanha, enfermeira e resgatista voluntária, em ação durante as operações de resgate em Petrópolis'
    }
  ];

  const handleExpandStory = (storyId) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  const handleKeyPress = (event, storyId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleExpandStory(storyId);
    }
  };

  const handleShare = (story) => {
    if (navigator.share) {
      navigator.share({
        title: `História de ${story.title}`,
        text: story.quote,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${story.title}: ${story.quote} - ${window.location.href}`);
    }
  };

  return (
    <section id="historias" className="relative py-16 sm:py-20 overflow-hidden fade-in-on-scroll">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-200"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=1920&h=1080&fit=crop&q=80')`,
          transform: `translateY(${scrollY * 0.2}px)`,
          filter: 'blur(1px)'
        }}
        role="img"
        aria-label="Paisagem árida representando os efeitos da seca e mudanças climáticas"
      />
      
      {/* Dark overlay with green tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-green-900/90 to-slate-800/95" />
      
      {/* Green accent border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-green-600 to-green-700" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Histórias <span className="text-orange-400">Reais</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-2">
            Conheça as pessoas por trás dos números. Cada estatística tem um rosto, uma história, uma esperança.
          </p>
          
          {/* Featured Quote */}
          <div className="mt-8 max-w-3xl mx-auto">
            <blockquote className="text-xl sm:text-2xl font-medium text-orange-300 italic border-l-4 border-orange-400 pl-6 bg-slate-800/40 rounded-r-lg p-6 card-hover">
              "Cada história que compartilhamos é uma vida que não pode ser esquecida, uma lição que deve ser aprendida."
            </blockquote>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, index) => (
            <article
              key={story.id}
              className="card-hover bg-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-600 shadow-lg group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Story Image Header */}
              <div
                className="h-48 sm:h-56 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${story.image})` }}
              >
                <img 
                  src={story.image} 
                  alt={story.imageAlt}
                  className="w-full h-full object-cover opacity-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                
                {/* Story indicators */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <story.icon className={`w-6 h-6 ${story.iconColor} group-hover:scale-110 transition-transform`} aria-hidden="true" />
                  {story.hasAudio && (
                    <Volume2 
                      className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" 
                      aria-label="Depoimento em áudio disponível" 
                    />
                  )}
                </div>
                
                {/* Location and age info */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white text-sm sm:text-base mb-2">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-orange-400" aria-hidden="true" />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-xs">
                    <User className="w-3 h-3 mr-1 text-orange-400" aria-hidden="true" />
                    <span>{story.age}</span>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-4 sm:p-6">
                <header className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-orange-400 text-sm sm:text-base mb-3 font-medium">
                    {story.subtitle}
                  </p>
                  <blockquote className="text-gray-300 text-sm italic border-l-2 border-orange-400 pl-3 mb-4 bg-slate-900/30 rounded-r p-2">
                    {story.quote}
                  </blockquote>
                </header>
                
                <div className="space-y-4">
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    {expandedStory === story.id ? story.fullStory : story.preview}
                  </p>

                  {expandedStory === story.id && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="bg-red-900/40 p-4 rounded-lg border border-red-500/30 card-hover">
                        <h4 className="text-red-300 font-semibold mb-2 text-sm sm:text-base flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" aria-hidden="true" />
                          Impacto
                        </h4>
                        <p className="text-gray-200 text-sm leading-relaxed">{story.impact}</p>
                      </div>
                      
                      <div className="bg-green-900/40 p-4 rounded-lg border border-green-500/30 card-hover">
                        <h4 className="text-green-300 font-semibold mb-2 text-sm sm:text-base flex items-center">
                          <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                          Esperança
                        </h4>
                        <p className="text-gray-200 text-sm leading-relaxed">{story.hope}</p>
                      </div>

                      {/* Action buttons for expanded state */}
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button 
                          onClick={() => handleShare(story)}
                          className="interactive-element bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center gap-2 flex-1"
                          aria-label={`Compartilhar história de ${story.title}`}
                        >
                          <Share2 className="w-4 h-4" aria-hidden="true" />
                          Compartilhar
                        </button>
                        <button 
                          className="interactive-element bg-red-600 hover:bg-red-700 focus:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center gap-2 flex-1"
                          aria-label={`Apoiar ${story.title}`}
                        >
                          <Heart className="w-4 h-4" aria-hidden="true" />
                          Apoiar
                        </button>
                      </div>
                      
                      {story.hasAudio && (
                        <button className="interactive-element w-full bg-green-600 hover:bg-green-700 focus:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center gap-2">
                          <Volume2 className="w-4 h-4" aria-hidden="true" />
                          Ouvir Depoimento (2:30)
                        </button>
                      )}
                    </div>
                  )}

                  {/* Expand/Collapse button */}
                  <button
                    onClick={() => handleExpandStory(story.id)}
                    onKeyDown={(e) => handleKeyPress(e, story.id)}
                    className="interactive-element flex items-center gap-2 text-orange-400 hover:text-orange-300 focus:text-orange-300 mt-4 transition-all duration-300 text-sm sm:text-base w-full justify-center sm:justify-start group"
                    aria-expanded={expandedStory === story.id}
                    aria-controls={`story-${story.id}-content`}
                    aria-label={expandedStory === story.id ? `Recolher história de ${story.title}` : `Ler história completa de ${story.title}`}
                  >
                    <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    {expandedStory === story.id ? 'Ver menos' : 'Ler história completa'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary interactive-element">
            <span className="flex items-center gap-2">
              Ver Mais Histórias
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
