'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function RTIPage() {
  const { language } = useLanguage();

  const contacts = [
    {
      designation: 'Chairman',
      name: '-',
      address: '-',
      contact: '-',
      email: '-',
    },
    {
      designation: 'Vice Chairperson & Joint Secretary',
      name: 'Ms. Padmini Singla',
      address: 'Ministry of Textiles, Govt. of India, Udyog Bhawan, New Delhi',
      contact: '011-23063192',
      email: 'singla.padmini@gov.in',
    },
    {
      designation: 'Executive Director',
      name: 'G.S. Bhati',
      address: 'First Floor, BSNL Building, Manji ka Hatha, Paota, Jodhpur 342006',
      contact: '0291-2433967',
      email: 'woolboard-textiles@gov.in',
    },
    {
      designation: 'Wool Marketing Development Officer',
      name: '-',
      address: '',
      contact: '-',
      email: '',
    },
    {
      designation: 'Adm. Officer',
      name: '-',
      address: '-',
      contact: '-',
      email: '-',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Important Address' : 'महत्वपूर्ण पता'}
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Designation' : 'पदनाम'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Name' : 'नाम'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Address' : 'पता'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Contact No.' : 'संपर्क नंबर'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'E-mail ID' : 'ई-मेल आईडी'}
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{contact.designation}</td>
                  <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{contact.address}</td>
                  <td className="border border-gray-300 px-4 py-2">{contact.contact}</td>
                  <td className="border border-gray-300 px-4 py-2">{contact.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
