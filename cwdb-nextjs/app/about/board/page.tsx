'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function BoardMembersPage() {
  const { t, language } = useLanguage();

  const committees = [
    {
      name: language === 'en' ? 'Governing Body' : 'शासी निकाय',
      document: '/files/GoverningBodyMember.pdf'
    },
    {
      name: language === 'en' ? 'Executive Committee' : 'कार्यकारी समिति',
      document: '/files/ExecutiveCommitteeMember.pdf'
    },
    {
      name: language === 'en' ? 'Technical Committee' : 'तकनीकी समिति',
      document: '/files/List_PC_Members.pdf'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          {language === 'en' ? 'List of Members' : 'सदस्यों की सूची'}
        </h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                  {language === 'en' ? 'Committee' : 'समिति'}
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                  {language === 'en' ? 'Document' : 'दस्तावेज'}
                </th>
              </tr>
            </thead>
            <tbody>
              {committees.map((committee, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {committee.name}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={committee.document}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === 'en' 
                        ? `List of members of the ${committee.name}`
                        : `${committee.name} के सदस्यों की सूची`}
                    </a>
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
