'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function WhosWhoPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? "Who's Who" : 'कौन क्या है'}
        </h1>
        <p className="text-lg">
          {language === 'en'
            ? 'This page will contain information about key personnel and their roles in the Central Wool Development Board.'
            : 'इस पृष्ठ में केंद्रीय ऊन विकास बोर्ड में प्रमुख कर्मियों और उनकी भूमिकाओं के बारे में जानकारी होगी।'}
        </p>
      </div>
    </div>
  );
}
