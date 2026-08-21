'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function OtherImportantReportsPage() {
  const { language } = useLanguage();

  const reports = [
    {
      no: 1,
      description:
        language === 'en'
          ? 'Chintan Shivir 2026'
          : 'चिंतन शिविर 2026',
      link: '/files/19thMay26ChintanShivir2026-fullbookwithcover-19-5-26_Confirmationmail.pdf',
    },
    {
      no: 2,
      description:
        language === 'en'
          ? 'CWDB Coffee Table Book-2024'
          : 'CWDB कॉफी टेबल बुक-2024',
      link: '/files/CWDB Coffee Table Book-2024.pdf',
    },
    {
      no: 3,
      description:
        language === 'en'
          ? 'CWDB EKTA Event Ladakh-2025 Report'
          : 'CWDB एकता इवेंट लद्दाख-2025 रिपोर्ट',
      link: '/files/CWDB EKTA Event Ladakh-2025 Report.pdf',
    },
    {
      no: 4,
      description:
        language === 'en'
          ? 'CWDB Actionable Insights from the 93rd IWTO Congress and Collaborative Strategies with Australia-2024'
          : 'CWDB 93वें IWTO कांग्रेस से व्यावहारिक अंतर्दृष्टि और ऑस्ट्रेलिया के साथ सहयोगात्मक रणनीतियाँ-2024',
      link: '/files/CWDB_Actionable Insights from the 93rd IWTO Congress and Collaborative Strategies with Australia-2024.pdf',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Other Important Reports' : 'अन्य महत्वपूर्ण रिपोर्ट'}
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
                      {language === 'en' ? 'View Document' : 'दस्तावेज़ देखें'}
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
