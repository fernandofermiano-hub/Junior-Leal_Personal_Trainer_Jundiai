
import React, { useState } from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {IMAGES.results.map((url, index) => (
          <div 
            key={index} 
            className="aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer group relative bg-zinc-900"
            onClick={() => setSelectedImage(url)}
          >
            <img 
              src={url} 
              alt={`Resultado ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold px-4 py-2 border border-white/30 rounded-full backdrop-blur-md">
                Ver em tela cheia
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-zinc-500 text-xs mt-6 text-center italic">
        * Resultados podem variar de pessoa para pessoa.
      </p>

      {/* Simple Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-zinc-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Resultado ampliado" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
