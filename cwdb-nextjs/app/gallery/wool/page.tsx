'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WoolGalleryPage() {
  const { language } = useLanguage();

  // Note: These image paths need to be updated based on actual images in public/images
  const woolImages = [
    { src: '/images/picture17cb7.jpg', alt: 'Wool Product 1' },
    { src: '/images/picture25f69.jpg', alt: 'Wool Product 2' },
    { src: '/images/picture356c8.jpg', alt: 'Wool Product 3' },
    { src: '/images/picture437c4.jpg', alt: 'Wool Product 4' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {language === 'en' ? 'Wool Gallery' : 'ऊन गैलरी'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {woolImages.map((image, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
