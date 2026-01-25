'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Contact Us' : 'हमसे संपर्क करें'}
        </h1>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold mb-4">
            <strong>Central Wool Development Board (CWDB)</strong>
          </h3>
          <p className="text-lg mb-2">
            First Floor, BSNL Building, Manji Ka Hatha, Paota, Jodhpur
          </p>
          <p className="text-lg mb-2">
            <strong>TEL.:</strong> 0091-291-2433967, 2616328
          </p>
          <p className="text-lg">
            <strong>E MAIL:</strong> woolboard-textiles@gov.in
          </p>
        </div>
      </div>
    </div>
  );
}
