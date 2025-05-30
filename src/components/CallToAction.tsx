
import React from 'react';
import { Heart, Mail, Share2, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contato" className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-6 sm:mb-8 animate-pulse" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Faça Parte da <span className="text-yellow-300">Mudança</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            Cada história compartilhada, cada doação, cada voz levantada faz a diferença. 
            Juntos, podemos construir um Brasil mais preparado para o futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <button className="group bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2 group-hover:text-red-500 transition-colors" />
              Quero Ajudar
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 w-full sm:w-auto flex items-center justify-center">
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar
            </button>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Entre em Contato</h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center text-white/90">
                <Mail className="w-5 h-5 mr-3 text-yellow-300" />
                <span className="text-sm sm:text-base font-medium">suporte@gmail.com</span>
              </div>
              
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              
              <a 
                href="mailto:suporte@gmail.com" 
                className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 transform hover:scale-105"
              >
                Enviar Email
              </a>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-2">4.2M+</div>
              <div className="text-white/90 text-sm sm:text-base font-medium">Pessoas Impactadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-2">100+</div>
              <div className="text-white/90 text-sm sm:text-base font-medium">Histórias Documentadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-2">R$15B</div>
              <div className="text-white/90 text-sm sm:text-base font-medium">Em Prejuízos Evitáveis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
