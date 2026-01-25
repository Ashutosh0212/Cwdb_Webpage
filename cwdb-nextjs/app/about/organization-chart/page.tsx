'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OrganizationChartPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {language === 'en' ? 'Organization Chart' : 'संगठन चार्ट'}
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl">
            <Image
              src="/images/org_chart.png"
              alt="Organization Chart"
              width={781}
              height={580}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
