'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OtherEventsGalleryPage() {
  const { language } = useLanguage();

  // Images from https://woolboard.in/drupal/node/44.html
  const eventImages = [
    { src: '/images/1.jpeg', alt: 'Carpet', title: 'Har Ghar Tiranga' },
    { src: '/images/3.jpeg', alt: 'Coloured Wool', title: 'National Sports Day' },
    { src: '/images/2.jpeg', alt: 'Circular Knitting', title: 'Har Ghar Tiranga' },
    { src: '/images/4.jpeg', alt: 'Durry', title: 'Swachhata Hi Sewa 2024' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {language === 'en' ? 'Other Events Gallery' : 'अन्य कार्यक्रम गैलरी'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventImages.map((image, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              {image.title && (
                <div className="p-4">
                  <h3 className="font-semibold text-center">{image.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
