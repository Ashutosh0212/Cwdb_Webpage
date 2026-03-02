'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-md font-semibold transition-all ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('hi')}
        className={`px-4 py-2 rounded-md font-semibold transition-all ${
          language === 'hi'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
        }`}
      >
        हिंदी
      </button>
    </div>
  );
}
