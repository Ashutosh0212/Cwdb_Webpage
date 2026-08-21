'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function AnnualReportsPage() {
  const { language } = useLanguage();

  const reports = [
    {
      no: 1,
      description: 'Annual Report FY 2024-2025',
      link: '/files/Annual Report FY 2024-2025.pdf',
    },
    {
      no: 2,
      description: 'Annual Report FY 2023-2024',
      link: '/files/Annual Report FY 2023-2024.pdf',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Annual reports' : 'वार्षिक प्रतिवेदन'}
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
              {reports.map((row) => (
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
                        : '\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0926\u0947\u0916\u0947\u0902'}
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
