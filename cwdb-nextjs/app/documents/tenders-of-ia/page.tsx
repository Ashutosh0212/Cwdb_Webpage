'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function TendersOfIAPage() {
  const { language } = useLanguage();

  const tenders = [
    {
      no: 1,
      description: 'CFC for utilization of Deccani Wool and Low grade Jute for manufacturing cost effective agromulch at premises of IJIRA, Kolkata (WB)',
      link: '/files/CFC for utilization of Deccani Wool and Low grade Jute for manufacturing cost effective agromulch at premises of IJIRA, Kolkata (WB).pdf',
    },
    {
      no: 2,
      description: 'CFC Avikanagar Nonwoven Line Tender Document',
      link: '/files/CFC Avikanagar Nonwoven Line Tender Document.pdf',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Tenders of IA' : 'आईए की निविदाएं'}
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
              {tenders.map((tender) => (
                <tr key={tender.no}>
                  <td className="border border-gray-300 px-4 py-2">{tender.no}</td>
                  <td className="border border-gray-300 px-4 py-2">{tender.description}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      href={tender.link}
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
