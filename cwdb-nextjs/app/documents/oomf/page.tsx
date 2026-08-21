'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function OOMFPage() {
  const { language } = useLanguage();

  const documents = [
    {
      no: 1,
      description: 'OOMF-IWDP-CWDB 2025-26',
      link: '/files/OOMF-IWDP-CWDB 2025-26 (1).pdf',
    },
  ];

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
              {documents.map((row) => (
                <tr key={row.no}>
                  <td className="border border-gray-300 px-4 py-2">{row.no}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.description}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      {language === 'en'
                        ? 'View Document'
                        : 'दस्तावेज़ देखें'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
