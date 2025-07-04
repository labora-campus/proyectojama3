
import { User, Heart, MessageCircle, Filter, Home } from 'lucide-react';

interface NavbarProps {
  user: any;
  activeSection: 'home' | 'chat' | 'filters' | 'favorites';
  onSectionChange: (section: 'home' | 'chat' | 'filters' | 'favorites') => void;
  onLoginClick: () => void;
  onLogout: () => void;
}

const Navbar = ({ user, activeSection, onSectionChange, onLoginClick, onLogout }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-orange-100 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div 
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent cursor-pointer"
              onClick={() => onSectionChange('home')}
            >
              Jama
            </div>
            
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => onSectionChange('home')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === 'home' 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <Home size={18} />
                <span>Inicio</span>
              </button>
              
              <button
                onClick={() => onSectionChange('chat')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === 'chat' 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <MessageCircle size={18} />
                <span>Chat con Jamito</span>
              </button>
              
              <button
                onClick={() => onSectionChange('filters')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === 'filters' 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <Filter size={18} />
                <span>Explorar</span>
              </button>
              
              <button
                onClick={() => onSectionChange('favorites')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === 'favorites' 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <Heart size={18} />
                <span>Favoritos</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700">Hola, {user.name}!</span>
                <button
                  onClick={onLogout}
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  Salir
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
              >
                <User size={18} />
                <span>Iniciar Sesión</span>
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-around mt-3 pt-3 border-t border-orange-100">
          <button
            onClick={() => onSectionChange('home')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeSection === 'home' ? 'text-orange-600' : 'text-gray-600'
            }`}
          >
            <Home size={20} />
            <span className="text-xs">Inicio</span>
          </button>
          
          <button
            onClick={() => onSectionChange('chat')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeSection === 'chat' ? 'text-orange-600' : 'text-gray-600'
            }`}
          >
            <MessageCircle size={20} />
            <span className="text-xs">Chat</span>
          </button>
          
          <button
            onClick={() => onSectionChange('filters')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeSection === 'filters' ? 'text-orange-600' : 'text-gray-600'
            }`}
          >
            <Filter size={20} />
            <span className="text-xs">Explorar</span>
          </button>
          
          <button
            onClick={() => onSectionChange('favorites')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeSection === 'favorites' ? 'text-orange-600' : 'text-gray-600'
            }`}
          >
            <Heart size={20} />
            <span className="text-xs">Favoritos</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
