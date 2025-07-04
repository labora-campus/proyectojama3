
import { useState } from 'react';
import Hero from '@/components/Hero';
import ChatWithJamito from '@/components/ChatWithJamito';
import FiltersSection from '@/components/FiltersSection';
import ResultsSection from '@/components/ResultsSection';
import LoginModal from '@/components/LoginModal';
import Navbar from '@/components/Navbar';
import { Place } from '@/types/Place';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'chat' | 'filters' | 'favorites'>('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [searchResults, setSearchResults] = useState<Place[]>([]);
  const [favorites, setFavorites] = useState<Place[]>([]);

  const handleAddToFavorites = (place: Place) => {
    if (!user) {
      setIsLoginOpen(true);
      return;
    }
    if (!favorites.find(f => f.id === place.id)) {
      setFavorites([...favorites, place]);
    }
  };

  const handleRemoveFromFavorites = (placeId: string) => {
    setFavorites(favorites.filter(f => f.id !== placeId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar 
        user={user} 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLoginClick={() => setIsLoginOpen(true)}
        onLogout={() => setUser(null)}
      />
      
      <main className="pt-16">
        {activeSection === 'home' && (
          <Hero onStartChat={() => setActiveSection('chat')} onOpenFilters={() => setActiveSection('filters')} />
        )}
        
        {activeSection === 'chat' && (
          <ChatWithJamito onSearchResults={setSearchResults} />
        )}
        
        {activeSection === 'filters' && (
          <div className="container mx-auto px-4 py-8">
            <FiltersSection onSearchResults={setSearchResults} />
            <ResultsSection 
              results={searchResults}
              favorites={favorites}
              onAddToFavorites={handleAddToFavorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
              user={user}
            />
          </div>
        )}
        
        {activeSection === 'favorites' && (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Mis Favoritos</h1>
            {!user ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">Inicia sesión para ver tus lugares favoritos</p>
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                >
                  Iniciar Sesión
                </button>
              </div>
            ) : (
              <ResultsSection 
                results={favorites}
                favorites={favorites}
                onAddToFavorites={handleAddToFavorites}
                onRemoveFromFavorites={handleRemoveFromFavorites}
                user={user}
              />
            )}
          </div>
        )}
      </main>

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={setUser}
      />
    </div>
  );
};

export default Index;
