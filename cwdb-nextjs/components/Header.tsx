'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { language } = useLanguage();

  return (
    <header className="bg-white border-b-2 border-gray-200">
      {/* Banner Image */}
      <div className="w-full bg-gray-100 overflow-hidden">
        <div className="w-full max-h-48 md:max-h-56 lg:max-h-64 relative">
          <img
            src="/images/banner1.png"
            alt="Banner"
            className="w-full h-auto object-contain max-h-48 md:max-h-56 lg:max-h-64"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </header>
  );
}
