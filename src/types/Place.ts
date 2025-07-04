
export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  tags: string[];
  address: string;
  priceRange: 'economic' | 'medium' | 'expensive';
  cuisine: string;
  atmosphere: 'quiet' | 'moderate' | 'lively';
  hasWifi: boolean;
  accessibility: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: string;
  website?: string;
  instagram?: string;
  phone?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  places?: Place[];
}

export interface FilterOptions {
  type: 'work' | 'couple' | 'friends' | 'family' | '';
  cuisine: string;
  priceRange: 'economic' | 'medium' | 'expensive' | '';
  atmosphere: 'quiet' | 'moderate' | 'lively' | '';
  hasWifi: boolean | null;
  accessibility: boolean | null;
  location: string;
}
