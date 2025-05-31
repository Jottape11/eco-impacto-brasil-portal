
import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Eye, Share2, Cloud, Droplets, Sun, ExternalLink, Volume2, Play } from 'lucide-react';

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
      fullStory: 'Maria das Águas, de 67 anos, viu sua casa de madeira ser levada pelas águas em maio de 2024. Moradora do bairro Sarandi há 40 anos, ela perdeu móveis, documentos e memórias de uma vida inteira. Hoje, em um abrigo temporário, Maria ajuda outras famílias e sonha em reconstruir sua vida com a ajuda da comunidade. Sua resiliência inspira todos ao redor. "Não posso desistir agora", diz Maria, "minha família precisa de mim e eu tenho muito amor ainda para dar."',
      image: 'https://images.unsplash.com/photo-1559027260-dc66d52bef19?w=800&h=600&fit=crop&q=80',
      impact: '15 mil famílias afetadas no bairro Sarandi',
      hope: 'Projeto de casas sustentáveis em andamento pela Prefeitura',
      source: 'Defesa Civil RS, maio 2024',
      icon: Droplets,
      iconColor: 'text-blue-400',
      hasAudio: true,
      audioLength: '2:30'
    },
    {
      id: 2,
      title: 'João Ribeirinho',
      subtitle: 'Pescador isolado pela seca',
      location: 'Manaus, AM',
      age: '52 anos',
      quote: '"O peixe sumiu, o rio virou areia"',
      preview: 'O rio que sempre foi sua estrada virou areia. Sua comunidade, uma ilha...',
      fullStory: 'João Pereira navega há 30 anos pelos rios da Amazônia. Em 2023, pela primeira vez, viu o Rio Negro tão baixo que sua canoa não conseguia passar. Sua comunidade de 200 pessoas ficou isolada por três meses. Agora ele participa de um projeto de piscicultura sustentável e alerta sobre as mudanças climáticas, compartilhando seu conhecimento tradicional com pesquisadores. "Meu avô dizia que o rio era eterno, mas hoje vejo que precisamos cuidar dele", reflete João.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&q=80',
      impact: '80 comunidades ribeirinhas isoladas',
      hope: 'Sistema de alerta via satélite implementado pelo INPE',
      source: 'INPE/ANA, outubro 2023',
      icon: Sun,
      iconColor: 'text-yellow-400',
      hasAudio: false
    },
    {
      id: 3,
      title: 'Ana da Montanha',
      subtitle: 'Resgatista voluntária',
      location: 'Petrópolis, RJ',
      age: '45 anos',
      quote: '"Não podia parar, tinha gente precisando"',
      preview: 'Salvou 12 vidas nos deslizamentos, mas perdeu sua própria casa...',
      fullStory: 'Ana Silva, enfermeira de 45 anos, estava de plantão quando os deslizamentos começaram em fevereiro de 2022. Mesmo com sua casa ameaçada, ela coordenou o resgate de 12 pessoas, incluindo crianças e idosos. Sua casa foi destruída dois dias depois, mas Ana continua trabalhando como voluntária na reconstrução da cidade, treinando outros moradores em primeiros socorros. "Perdi minha casa, mas ganhei uma família maior", diz Ana, referindo-se à rede de apoio que se formou após a tragédia.',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop&q=80',
      impact: '233 vidas perdidas na tragédia',
      hope: 'Sistema de monitoramento geológico ampliado',
      source: 'Defesa Civil RJ, fevereiro 2022',
      icon: Cloud,
      iconColor: 'text-gray-400',
      hasAudio: true,
      audioLength: '3:15'
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
        role="img"
        aria-label="Imagem de fundo mostrando paisagem árida afetada pela seca"
      />
      
      {/* Dark overlay with green tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/97 via-green-900/95 to-slate-800/97" />
      
      {/* Green accent border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-green-600 to-green-700" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Histórias <span className="text-orange-300">Reais</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed px-2">
            Conheça as pessoas por trás dos números. Cada estatística tem um rosto, uma história, uma esperança.
          </p>
          
          {/* Featured Quote */}
          <div className="mt-8 max-w-3xl mx-auto">
            <blockquote className="text-xl sm:text-2xl font-medium text-orange-200 italic border-l-4 border-orange-400 pl-6 bg-slate-800/60 rounded-r-lg p-6">
              "Cada história que compartilhamos é uma vida que não pode ser esquecida, uma lição que deve ser aprendida."
            </blockquote>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story) => (
            <article
              key={story.id}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl focus-within:ring-4 focus-within:ring-orange-400/50"
            >
              <div
                className="h-48 sm:h-56 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${story.image})` }}
              >
                <img 
                  src={story.image} 
                  alt={`${story.title}, ${story.subtitle} de ${story.location}, mostrando expressão de resiliência e determinação após enfrentar desastres climáticos`}
                  className="w-full h-full object-cover opacity-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <story.icon className={`w-6 h-6 ${story.iconColor}`} aria-hidden="true" />
                  {story.hasAudio && (
                    <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                      <Volume2 className="w-4 h-4" aria-hidden="true" />
                      <span className="sr-only">Depoimento em áudio disponível</span>
                      Audio
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white text-sm sm:text-base mb-2">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
                    <span>{story.location}</span>
                  </div>
                  <p className="text-gray-200 text-xs">{story.age}</p>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <header className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-orange-300 text-sm sm:text-base mb-3 font-medium">{story.subtitle}</p>
                  <blockquote className="text-gray-200 text-sm italic border-l-2 border-orange-400 pl-3 mb-4">
                    {story.quote}
                  </blockquote>
                </header>
                
                <p className="text-gray-200 text-sm sm:text-base mb-6 leading-relaxed">
                  {expandedStory === story.id ? story.fullStory : story.preview}
                </p>

                {expandedStory === story.id && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-red-900/50 p-4 rounded-lg border border-red-500/40">
                      <h4 className="text-red-200 font-semibold mb-2 text-sm sm:text-base">Impacto</h4>
                      <p className="text-gray-200 text-sm leading-relaxed">{story.impact}</p>
                    </div>
                    
                    <div className="bg-green-900/50 p-4 rounded-lg border border-green-500/40">
                      <h4 className="text-green-200 font-semibold mb-2 text-sm sm:text-base">Esperança</h4>
                      <p className="text-gray-200 text-sm leading-relaxed">{story.hope}</p>
                    </div>

                    <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700">
                      <p className="text-gray-300 text-xs sm:text-sm">
                        <span className="font-medium">Fonte:</span> {story.source}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <button 
                        className="btn-secondary-small flex-1"
                        aria-label={`Compartilhar história de ${story.title}`}
                      >
                        <Share2 className="w-4 h-4" aria-hidden="true" />
                        Compartilhar
                      </button>
                      <button 
                        className="btn-accent-small flex-1"
                        aria-label={`Apoiar ${story.title}`}
                      >
                        <Heart className="w-4 h-4" aria-hidden="true" />
                        Apoiar
                      </button>
                    </div>
                    
                    {story.hasAudio && (
                      <button className="w-full btn-success-small">
                        <Play className="w-4 h-4" aria-hidden="true" />
                        Ouvir Depoimento ({story.audioLength})
                      </button>
                    )}
                  </div>
                )}

                <button
                  onClick={() => handleExpandStory(story.id)}
                  onKeyDown={(e) => handleKeyPress(e, story.id)}
                  className="btn-link mt-4 w-full justify-center sm:justify-start"
                  aria-expanded={expandedStory === story.id}
                  aria-controls={`story-${story.id}-content`}
                  aria-label={expandedStory === story.id ? `Recolher história de ${story.title}` : `Expandir história completa de ${story.title}`}
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  {expandedStory === story.id ? 'Ver menos' : 'Ler história completa'}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            <span className="flex items-center gap-2">
              Ver Mais Histórias
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
