
import { useState } from 'react';
import { Search } from 'lucide-react';
import { FilterOptions, Place } from '@/types/Place';
import { generateMockPlaces } from '@/utils/mockData';

interface FiltersSectionProps {
  onSearchResults: (places: Place[]) => void;
}

const FiltersSection = ({ onSearchResults }: FiltersSectionProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    type: '',
    cuisine: '',
    priceRange: '',
    atmosphere: '',
    hasWifi: null,
    accessibility: null,
    location: '',
  });

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
    
    // Generate mock results based on filters
    const type = filters.type || 'friends';
    const atmosphere = filters.atmosphere || 'moderate';
    const results = generateMockPlaces(type as any, atmosphere as any);
    
    onSearchResults(results);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Encuentra tu lugar ideal</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de salida
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Cualquiera</option>
            <option value="work">Trabajo</option>
            <option value="couple">Pareja</option>
            <option value="friends">Amigos</option>
            <option value="family">Familia</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de comida
          </label>
          <select
            value={filters.cuisine}
            onChange={(e) => handleFilterChange('cuisine', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Cualquiera</option>
            <option value="argentina">Argentina</option>
            <option value="italiana">Italiana</option>
            <option value="japonesa">Japonesa</option>
            <option value="mexicana">Mexicana</option>
            <option value="vegetariana">Vegetariana</option>
            <option value="parrilla">Parrilla</option>
            <option value="cafe">Café</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rango de precios
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Cualquiera</option>
            <option value="economic">Económico ($)</option>
            <option value="medium">Medio ($$)</option>
            <option value="expensive">Premium ($$$)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ambiente
          </label>
          <select
            value={filters.atmosphere}
            onChange={(e) => handleFilterChange('atmosphere', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Cualquiera</option>
            <option value="quiet">Tranquilo</option>
            <option value="moderate">Moderado</option>
            <option value="lively">Animado</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ubicación
          </label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            placeholder="ej: Palermo, Centro"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.hasWifi === true}
              onChange={(e) => handleFilterChange('hasWifi', e.target.checked ? true : null)}
              className="mr-2 text-orange-500 focus:ring-orange-500"
            />
            <span className="text-sm text-gray-700">WiFi disponible</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.accessibility === true}
              onChange={(e) => handleFilterChange('accessibility', e.target.checked ? true : null)}
              className="mr-2 text-orange-500 focus:ring-orange-500"
            />
            <span className="text-sm text-gray-700">Accesible</span>
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center space-x-2"
        >
          <Search size={20} />
          <span>Buscar Lugares</span>
        </button>
      </div>
    </div>
  );
};

export default FiltersSection;
