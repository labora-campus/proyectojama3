
import { MessageCircle, Filter, Star } from 'lucide-react';

interface HeroProps {
  onStartChat: () => void;
  onOpenFilters: () => void;
}

const Hero = ({ onStartChat, onOpenFilters }: HeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
            Jama
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Tu compañero inteligente para encontrar el lugar perfecto
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ya sea para trabajar tranquilo, una cita romántica, salir con amigos o una comida familiar, 
            <strong className="text-orange-600"> Jamito</strong> te ayuda a descubrir lugares increíbles cerca de ti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div 
            onClick={onStartChat}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-orange-100"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Habla con Jamito</h3>
            <p className="text-gray-600">
              Simplemente describe lo que buscas y recibe recomendaciones personalizadas al instante
            </p>
          </div>

          <div 
            onClick={onOpenFilters}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-orange-100"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Explora con Filtros</h3>
            <p className="text-gray-600">
              Usa filtros detallados para encontrar exactamente lo que necesitas
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star size={24} className="text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Recomendaciones IA</h4>
            <p className="text-gray-600 text-sm">Sugerencias personalizadas basadas en tus preferencias</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart size={24} className="text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Guarda Favoritos</h4>
            <p className="text-gray-600 text-sm">Crea tu lista de lugares favoritos para volver</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <QrCode size={24} className="text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Check-in y Beneficios</h4>
            <p className="text-gray-600 text-sm">Confirma tu visita y obtén descuentos exclusivos</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onStartChat}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Empezar con Jamito
          </button>
          <button
            onClick={onOpenFilters}
            className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-50 transition-all duration-200"
          >
            Explorar Lugares
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
