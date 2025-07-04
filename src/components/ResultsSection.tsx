
import { Place } from '@/types/Place';
import PlaceCard from '@/components/PlaceCard';

interface ResultsSectionProps {
  results: Place[];
  favorites: Place[];
  onAddToFavorites: (place: Place) => void;
  onRemoveFromFavorites: (placeId: string) => void;
  user: any;
}

const ResultsSection = ({ 
  results, 
  favorites, 
  onAddToFavorites, 
  onRemoveFromFavorites, 
  user 
}: ResultsSectionProps) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          Aún no hay resultados. ¡Usa los filtros o habla con Jamito para encontrar lugares increíbles!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {results.length} lugares encontrados
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            isFavorite={favorites.some(f => f.id === place.id)}
            onToggleFavorite={() => {
              if (favorites.some(f => f.id === place.id)) {
                onRemoveFromFavorites(place.id);
              } else {
                onAddToFavorites(place);
              }
            }}
            onCheckIn={() => {
              console.log('Check-in at:', place.name);
              // TODO: Implement check-in logic
            }}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;
