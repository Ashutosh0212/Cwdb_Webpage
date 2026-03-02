'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function TenderNoticePage() {
  const { language } = useLanguage();

  const tenders = [
    {
      no: 1,
      description: 'TENDER DOCUMENT for supply of Spinning Wheel and Hand Operated Carding Machine',
      link: '/files/TENDER DOCUMENT for supply of Spinning Wheel and Hand Operated Carding Machine.pdf',
    },
    {
      no: 2,
      description: 'Tender Document for the supply of Shearing Machine and Accessories',
      link: '/files/Tender Document for the supply of Shearing Machine and Acessories.pdf',
    },
    {
      no: 3,
      description: 'TENDER FOR SUPPLY, INSTALLATION, TESTING AND COMMISSIONING (SITC) OF 250 KWP,35 KWP,50 KWP GRID CONNECTED ROOFTOP SOLAR PV POWER PLANT AT VARIOUS LOCATIONS',
      link: '/files/TENDER FOR SUPPLY, INSTALLATION, TESTING AND COMMISSIONING (SITC) OF 250 KWP,35 KWP,50 KWP GRID CONNECTED ROOFTOP SOLAR PV POWER PLANT AT VARIOUS LOCATIONS.pdf',
    },
    {
      no: 4,
      description: 'Advertisement for Procurement of OFDA 4000 as Proprietary Product',
      link: '/files/Advertisement for Procurement of OFDA 4000 as Proprietary Product.pdf',
    },
    {
      no: 5,
      description: 'Corrigendum for Date Extension of submission of Bid for PMU tender',
      link: '/files/ExtensiondatecorriPMU.pdf',
    },
    {
      no: 6,
      description: 'Corrigendum for Addition/ Modification after Pre Bid Meeting for PMU tender.',
      link: '/files/mod_add_afterprebidqueriesPMU.pdf',
    },
    {
      no: 7,
      description: 'Notice for empanelment of PMU',
      link: '/files/PMUempnltender.pdf',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Tender Notice' : 'निविदा सूचना'}
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
