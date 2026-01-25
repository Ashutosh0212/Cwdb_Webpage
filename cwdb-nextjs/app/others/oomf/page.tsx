'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function OOMFPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'O.O.M.F.' : 'ओ.ओ.एम.एफ.'}
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'No.' : 'क्रमांक'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Description' : 'विवरण'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Link' : 'लिंक'}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                  {language === 'en' ? 'No documents available' : 'कोई दस्तावेज़ उपलब्ध नहीं'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
