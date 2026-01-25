'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselImages = [
  { src: '/images/banner_bg44 (2).jpg', alt: 'Pariksha Charcha' },
  { src: '/images/Bharat_tex.jpeg', alt: 'Bharat Tex', link: 'https://www.bharat-tex.com/' },
  { src: '/images/pariksha_charcha.jpg', alt: 'Pariksha Charcha' },
  { src: '/images/pexels-andrea-piacquadio-3769010_0f6b2.jpg', alt: 'Slide 2' },
  { src: '/images/pexels-maria-orlova-4946859_019f3.jpg', alt: 'Slide 3' },
  { src: '/images/pexels-quang-nguyen-vinh-3232019_166f0.jpg', alt: 'Slide 4' },
  { src: '/images/pexels-vlada-karpovich-5603269_1a127.jpg', alt: 'Slide 5' },
  { src: '/images/pexels-quang-nguyen-vinh-2148933_00500.jpg', alt: 'Slide 6' },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const currentImage = carouselImages[currentIndex];

  return (
    <div 
      className="w-full relative overflow-hidden bg-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container with fixed height */}
      <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {image.link ? (
              <a href={image.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain w-full h-full"
                  sizes="100vw"
                  priority={index === 0}
                />
              </a>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain w-full h-full"
                sizes="100vw"
                priority={index === 0}
              />
            )}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
