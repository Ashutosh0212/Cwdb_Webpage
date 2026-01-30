'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function RecruitmentPage() {
  const { language } = useLanguage();

  const recruitmentItems = [
    {
      no: 1,
      description: 'Answer Key of question for MTS post exam held on 24-01-2026',
      link: '/files/Answer Key of question for MTS post exam held on 24-01-2026.pdf',
    },
    {
      no: 2,
      description: 'Instruction to raise an objection on question and answer for the post of MTS, ISC, CWDB',
      link: '/files/Instruction to raise an objection on question and answer for the post of MTS, ISC, CWDB.pdf',
    },
    {
      no: 3,
      description: 'Question Paper for MTS post exam held on 24-01-2026',
      link: '/files/Question Paper for MTS post exam held on 24-01-2026.pdf',
    },
    {
      no: 4,
      description: 'Examination Guideline Notice for Multi Task Staff MTS',
      link: '/files/Examination Guideline Notice for Multi Task Staff MTS.pdf',
    },
    {
      no: 5,
      description: 'Information regarding written test for the post of Multi Tasking staff Industrial Service centre CWDB',
      link: '/files/Information regarding written test for the post of Multi Tasking staff Industrial Service centre CWDB.pdf',
    },
    {
      no: 6,
      description: 'Short Listed Candidates for writen test for the vacany post of Multi Tasking Staff (MTS)',
      link: '/files/BP-30M31_20251121_210432.pdf',
    },
    {
      no: 7,
      description: 'Result of Engagement of one Legal Assistant in CWDB',
      link: '/files/Result of Engagement of one Legal Assistant in CWDB.pdf',
    },
    {
      no: 8,
      description: 'List of Qualified and Provisionally Qualified Candidate for Multi Testing Staff MTS at ISC, CWDB, Bikaner.',
      link: '/files/List of Qualified and Provisionally Qualified Candidate for Multi Testing Staff MTS at ISC CWDB Bikaner.pdf',
    },
    {
      no: 9,
      description: 'Office order for List of Empanelled Advocates of CWDB',
      link: '/files/Empaneled Advocate of CWDB.pdf',
    },
    {
      no: 10,
      description: 'Result of Written Exam Held on 16th May, 2025 for the Post of Administrative Officer, CWDB.',
      link: '/files/AO result.pdf',
    },
    {
      no: 11,
      description: 'Result of Written Exam Held on 16th May, 2025 for the Post of Accountant, CWDB.',
      link: '/files/A result.pdf',
    },
    {
      no: 12,
      description: 'Final Answer Key of Question Paper for the Post of Administrative Officer and Accountant',
      link: '/files/20250606190219478.pdf',
    },
    {
      no: 13,
      description: 'Question Paper and Model Answer Key for the Post of Administrative Officer',
      link: '/files/Question Paper and Answer Key for the Post of Admi_250529_123709.pdf',
    },
    {
      no: 14,
      description: 'Question Paper and Model Answer Key for the Post of Accountant',
      link: '/files/QuestionPaper and Answer Key for the Post of Accou_250529_111735.pdf',
    },
    {
      no: 15,
      description: 'Examination Notice for the post of Administrative Officer',
      link: '/files/BP-30M31_20250501_133502.pdf',
    },
    {
      no: 16,
      description: 'Examination Notice for the post of Accountant',
      link: '/files/BP-30M31_20250501_133424.pdf',
    },
    {
      no: 17,
      description: 'List of short listed candidates eligible for written test for the post of Accountant',
      link: '/files/accountant.pdf',
    },
    {
      no: 18,
      description: 'List of short listed candidates eligible for written test for the post of Administrative Officer',
      link: '/files/2.pdf',
    },
    {
      no: 19,
      description: 'Corrigendum reg. Recruitment for the Post of Accountant & Administrative Officer.',
      link: '/files/corrigendum_merged.pdf',
    },
    {
      no: 20,
      description: 'RECRUITMENT FOR THE POST OF ACCOUNTANT AND ADMINISTRATIVE OFFICER',
      link: '/files/CWDB recuirtment for Admin and accountant.pdf',
    },
    {
      no: 21,
      description: 'Advertisement for the Post of Wool Marketing Development Officer (WMDO) on Deputation of CWDB',
      link: '/files/BP-30M31_20250124_203246.pdf',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Recruitment' : 'भर्ती'}
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
              {recruitmentItems.map((item) => (
                <tr key={item.no}>
                  <td className="border border-gray-300 px-4 py-2">{item.no}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      {language === 'en' ? 'View Details' : 'विवरण देखें'}
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
