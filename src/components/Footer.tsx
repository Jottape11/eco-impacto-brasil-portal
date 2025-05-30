
import React from 'react';
import { Github, Youtube, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="sobre" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">O Chamado</h3>
            <p className="text-gray-300 mb-6">
              Um projeto dedicado a dar voz às vítimas dos desastres climáticos no Brasil, 
              combinando dados científicos com histórias humanas para gerar consciência e ação.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Brasil</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>contato@ochamado.com.br</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-orange-400 transition-colors">Início</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-orange-400 transition-colors">Timeline</a></li>
              <li><a href="#historias" className="text-gray-300 hover:text-orange-400 transition-colors">Histórias</a></li>
              <li><a href="#solucoes" className="text-gray-300 hover:text-orange-400 transition-colors">Soluções</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Siga o Projeto</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <h5 className="text-white font-semibold mb-2">Vídeo Pitch</h5>
              <p className="text-gray-300 text-sm mb-3">
                Conheça mais sobre o projeto em nosso vídeo apresentação
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Assistir Agora
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 O Chamado: Resposta à Crise Climática. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com ❤️ para conscientizar sobre as mudanças climáticas no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
