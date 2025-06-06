
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Video = () => {
  // Extract video ID from YouTube URL
  const videoId = 'bjOWJwjNVJY';
  
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao site
          </Link>
          <h1 className="text-xl font-bold text-white">O Chamado - Vídeo Apresentação</h1>
        </div>
      </header>

      {/* Video Content */}
      <main className="p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Conheça o <span className="text-orange-400">Projeto</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Assista ao vídeo de apresentação do projeto "O Chamado" e entenda como dados e histórias reais podem fazer a diferença na luta contra as mudanças climáticas.
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="O Chamado: Resposta à Crise Climática - Vídeo Apresentação"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 bg-slate-800 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Sobre o Vídeo</h3>
            <p className="text-gray-300 leading-relaxed">
              Este vídeo apresenta a missão do projeto "O Chamado", mostrando como combinamos dados científicos 
              com histórias humanas reais para conscientizar sobre os impactos das mudanças climáticas no Brasil. 
              Conheça os números por trás dos desastres naturais e as vozes daqueles que foram diretamente afetados.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <Link 
              to="/#timeline"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Explore a Timeline de Eventos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Video;
