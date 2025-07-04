
import { Heart, Star, MapPin, QrCode } from 'lucide-react';
import { Place } from '@/types/Place';

interface PlaceCardProps {
  place: Place;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onCheckIn: () => void;
  user: any;
}

const PlaceCard = ({ place, isFavorite, onToggleFavorite, onCheckIn, user }: PlaceCardProps) => {
  const getPriceSymbol = (priceRange: string) => {
    switch (priceRange) {
      case 'economic': return '$';
      case 'medium': return '$$';
      case 'expensive': return '$$$';
      default: return '$';
    }
  };

  const getAtmosphereText = (atmosphere: string) => {
    switch (atmosphere) {
      case 'quiet': return 'Tranquilo';
      case 'moderate': return 'Moderado';
      case 'lively': return 'Animado';
      default: return atmosphere;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={onToggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{place.name}</h3>
          <div className="flex items-center space-x-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{place.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{place.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{place.address}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {place.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          <span className="text-gray-500 text-xs self-center">
            {getPriceSymbol(place.priceRange)} • {getAtmosphereText(place.atmosphere)}
          </span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={onCheckIn}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <QrCode size={16} />
            <span>Check-in</span>
          </button>
          
          {place.website && (
            <a
              href={place.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-orange-500 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-50 transition-all duration-200"
            >
              Web
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
