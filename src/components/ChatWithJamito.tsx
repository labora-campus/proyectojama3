
import { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { ChatMessage, Place } from '@/types/Place';
import PlaceCard from '@/components/PlaceCard';
import { generateMockPlaces } from '@/utils/mockData';

interface ChatWithJamitoProps {
  onSearchResults: (places: Place[]) => void;
}

const ChatWithJamito = ({ onSearchResults }: ChatWithJamitoProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: '¡Hola! Soy Jamito 🍽️ Tu asistente personal para encontrar lugares increíbles. ¿Qué estás buscando hoy?',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processUserMessage = (text: string): Place[] => {
    console.log('Processing user message:', text);
    
    // Simple keyword-based logic for demo
    const lowerText = text.toLowerCase();
    let type: 'work' | 'couple' | 'friends' | 'family' = 'friends';
    let atmosphere: 'quiet' | 'moderate' | 'lively' = 'moderate';
    
    if (lowerText.includes('trabajo') || lowerText.includes('trabajar') || lowerText.includes('wifi')) {
      type = 'work';
      atmosphere = 'quiet';
    } else if (lowerText.includes('pareja') || lowerText.includes('cita') || lowerText.includes('romántico')) {
      type = 'couple';
      atmosphere = 'quiet';
    } else if (lowerText.includes('familia') || lowerText.includes('niños')) {
      type = 'family';
      atmosphere = 'moderate';
    } else if (lowerText.includes('amigos') || lowerText.includes('grupo')) {
      type = 'friends';
      atmosphere = 'lively';
    }

    return generateMockPlaces(type, atmosphere);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const places = processUserMessage(inputText);
      onSearchResults(places);
      
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: `¡Perfecto! Encontré ${places.length} lugares que podrían interesarte basándome en lo que me contaste. Aquí tienes mis recomendaciones:`,
        isUser: false,
        timestamp: new Date(),
        places: places,
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
      <div className="bg-white rounded-t-2xl shadow-lg p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center">
            <Bot size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Jamito</h2>
            <p className="text-gray-600 text-sm">Tu asistente gastronómico inteligente</p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white shadow-lg overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-2xl ${
              message.isUser 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p className="text-sm">{message.text}</p>
              
              {message.places && (
                <div className="mt-4 space-y-3">
                  {message.places.map((place) => (
                    <div key={place.id} className="bg-white rounded-lg p-3 shadow-sm">
                      <PlaceCard 
                        place={place} 
                        isFavorite={false}
                        onToggleFavorite={() => {}}
                        onCheckIn={() => {}}
                        user={null}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white rounded-b-2xl shadow-lg p-6">
        <div className="flex space-x-3">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe lo que buscas... ej: 'Quiero un lugar tranquilo para trabajar con wifi en Palermo'"
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWithJamito;
