
import { Place } from '@/types/Place';

const sampleImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop'
];

const workPlaces: Partial<Place>[] = [
  {
    name: 'Café Central',
    description: 'Espacio tranquilo con mesas amplias, wifi excelente y ambiente perfecto para trabajar. Sirven café de especialidad y pasteles caseros.',
    cuisine: 'cafe',
    tags: ['wifi-gratis', 'mesas-amplias', 'enchufes', 'silencioso'],
    atmosphere: 'quiet',
    hasWifi: true,
  },
  {
    name: 'Lab Coworking & Coffee',
    description: 'Coworking con excelente café, salas de reuniones y ambiente profesional. Ideal para freelancers y emprendedores.',
    cuisine: 'cafe',
    tags: ['coworking', 'salas-reunion', 'profesional', 'networking'],
    atmosphere: 'quiet',
    hasWifi: true,
  },
  {
    name: 'Biblioteca Café',
    description: 'Combina la tranquilidad de una biblioteca con el mejor café de la zona. Perfecto para estudiar o trabajar en proyectos.',
    cuisine: 'cafe',
    tags: ['biblioteca', 'silencioso', 'estudiantes', 'lectura'],
    atmosphere: 'quiet',
    hasWifi: true,
  }
];

const couplePlaces: Partial<Place>[] = [
  {
    name: 'Terraza Romántica',
    description: 'Restaurante con vista panorámica de la ciudad, perfecto para cenas románticas. Música suave y ambiente íntimo.',
    cuisine: 'italiana',
    tags: ['terraza', 'vista', 'romántico', 'íntimo'],
    atmosphere: 'quiet',
    priceRange: 'expensive',
  },
  {
    name: 'Bistró Francés',
    description: 'Auténtico bistró francés con decoración vintage y menú de temporada. Ideal para una cita especial.',
    cuisine: 'francesa',
    tags: ['bistró', 'vintage', 'velas', 'cita'],
    atmosphere: 'quiet',
    priceRange: 'medium',
  },
  {
    name: 'Wine Bar Boutique',
    description: 'Selección exclusiva de vinos y tapas gourmet en ambiente acogedor con música jazz en vivo.',
    cuisine: 'tapas',
    tags: ['vinos', 'jazz', 'gourmet', 'acogedor'],
    atmosphere: 'moderate',
    priceRange: 'expensive',
  }
];

const friendsPlaces: Partial<Place>[] = [
  {
    name: 'Parrilla del Barrio',
    description: 'Auténtica parrilla argentina con cortes premium y ambiente animado. Perfecto para grupos grandes.',
    cuisine: 'parrilla',
    tags: ['parrilla', 'grupos', 'asado', 'cerveza'],
    atmosphere: 'lively',
    priceRange: 'medium',
  },
  {
    name: 'Roof Bar 360',
    description: 'Bar en la azotea con tragos creativos y vista 360° de la ciudad. Música en vivo los fines de semana.',
    cuisine: 'bar',
    tags: ['roof-bar', 'tragos', 'música-vivo', 'vista'],
    atmosphere: 'lively',
    priceRange: 'expensive',
  },
  {
    name: 'Pizzería Artesanal',
    description: 'Pizzas a la piedra con ingredientes frescos y ambiente casual. Ideal para compartir con amigos.',
    cuisine: 'italiana',
    tags: ['pizza', 'casual', 'compartir', 'cerveza-artesanal'],
    atmosphere: 'moderate',
    priceRange: 'economic',
  }
];

const familyPlaces: Partial<Place>[] = [
  {
    name: 'Restaurante Familiar',
    description: 'Ambiente familiar con menú para niños y adultos. Espacioso y con área de juegos para los más pequeños.',
    cuisine: 'argentina',
    tags: ['familia', 'niños', 'espacioso', 'área-juegos'],
    atmosphere: 'moderate',
    priceRange: 'medium',
    accessibility: true,
  },
  {
    name: 'Parrilla Don Carlos',
    description: 'Tradición familiar de tres generaciones. Parrilla casera con patio amplio y ambiente relajado.',
    cuisine: 'parrilla',
    tags: ['tradición', 'patio', 'casero', 'relajado'],
    atmosphere: 'moderate',
    priceRange: 'medium',
    accessibility: true,
  },
  {
    name: 'Heladería & Café',
    description: 'Heladería artesanal con café y tortas caseras. Perfecto para el postre en familia.',
    cuisine: 'postres',
    tags: ['helados', 'postres', 'tortas', 'artesanal'],
    atmosphere: 'moderate',
    priceRange: 'economic',
    accessibility: true,
  }
];

const neighborhoods = ['Palermo', 'Recoleta', 'San Telmo', 'Belgrano', 'Villa Crick', 'Puerto Madero'];

export const generateMockPlaces = (
  type: 'work' | 'couple' | 'friends' | 'family',
  atmosphere: 'quiet' | 'moderate' | 'lively'
): Place[] => {
  let basePlaces: Partial<Place>[];
  
  switch (type) {
    case 'work':
      basePlaces = workPlaces;
      break;
    case 'couple':
      basePlaces = couplePlaces;
      break;
    case 'friends':
      basePlaces = friendsPlaces;
      break;
    case 'family':
      basePlaces = familyPlaces;
      break;
    default:
      basePlaces = [...workPlaces, ...couplePlaces, ...friendsPlaces, ...familyPlaces];
  }

  return basePlaces.map((place, index) => ({
    id: `${type}-${index}`,
    name: place.name || 'Lugar',
    description: place.description || 'Descripción del lugar',
    image: sampleImages[index % sampleImages.length],
    rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0
    tags: place.tags || ['tag1', 'tag2'],
    address: `${neighborhoods[index % neighborhoods.length]}, Buenos Aires`,
    priceRange: place.priceRange || 'medium',
    cuisine: place.cuisine || 'variada',
    atmosphere: place.atmosphere || atmosphere,
    hasWifi: place.hasWifi ?? (type === 'work'),
    accessibility: place.accessibility ?? false,
    coordinates: {
      lat: -34.6037 + (Math.random() - 0.5) * 0.1,
      lng: -58.3816 + (Math.random() - 0.5) * 0.1,
    },
    hours: '9:00 - 23:00',
    website: `https://www.${place.name?.toLowerCase().replace(/\s+/g, '')}.com`,
    phone: '+54 11 4XXX-XXXX',
  })) as Place[];
};
