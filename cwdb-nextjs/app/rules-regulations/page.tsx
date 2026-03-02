'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function RulesRegulationsPage() {
  const { language } = useLanguage();

  const documents = [
    {
      name: 'Complaint Handling Policy in CWDB',
      file: '/files/Complaint Handling Policy in CWDB.pdf',
      description: 'Complaint Handling Policy in CWDB',
    },
    {
      name: 'Complaint Handling Policy 2025',
      file: '/files/Complaint Handling Policy.pdf',
      description: 'Complaint Handling Policy',
    },
    {
      name: 'Recruitment and Promotion',
      file: '/files/CWDB Recruitment and Promotion Rules-II 2025.pdf',
      description: 'CWDB Recruitment and Promotion Rules-II 2025',
    },
    {
      name: 'CWDB Rules, 1994',
      file: '/files/CWDB Rules, 1994.pdf',
      description: 'The Wool Development Board (Recruitment and Promotion) Rules, 1994',
    },
    {
      name: "CWDB Employees' Rules, 1993",
      file: '/files/CWDB Employees Rules 1993.pdf',
      description: "The Wool Development Board Employees' Conduct, Discipline and Appeal Rules, 1993",
    },
    {
      name: 'Modification/Addition as a Special Case',
      file: '/files/Modification Addition as a Special case.pdf',
      description: "The Wool Development Board Employees' Conduct, Discipline and Appeal Rules, 1993",
    },
    {
      name: 'Memorandum of Association & Rules & Regulations',
      file: '/files/MOA.pdf',
      description: 'Memorandum of Association and Rules & Regulations of the Central Wool Development Board',
    },
    {
      name: 'Service Regulations, 1993',
      file: '/files/Service Regulation 1993.pdf',
      description: 'The Wool Development Board Service Regulations, 1993',
    },
    {
      name: 'Amendment Addition to Service Regulations 1993',
      file: '/files/Amendment Addition to Service Regulations 1993.pdf',
      description: 'The Wool Development Board Service Regulations, 1993',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Rules and Regulations' : 'नियम और कानून'}
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Document' : 'दस्तावेज़'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Description' : 'विवरण'}
                </th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      {doc.name}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{doc.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
