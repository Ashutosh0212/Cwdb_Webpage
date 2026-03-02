'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function WhosWhoPage() {
  const { language } = useLanguage();

  const contacts = [
    {
      designation: language === 'en' ? 'Chairman' : 'अध्यक्ष',
      name: '-',
      address: '-',
      contact: '-',
      email: '-',
    },
    {
      designation: language === 'en' ? 'Vice Chairperson & Joint Secretary' : 'उपाध्यक्ष और संयुक्त सचिव',
      name: 'Ms. Padmini Singla',
      address: language === 'en' 
        ? 'Ministry of Textiles, Govt. of India, Udyog Bhawan, New Delhi'
        : 'कपड़ा मंत्रालय, भारत सरकार, उद्योग भवन, नई दिल्ली',
      contact: '011-23063192',
      email: 'singla.padmini@gov.in',
    },
    {
      designation: language === 'en' ? 'Executive Director' : 'कार्यकारी निदेशक',
      name: 'G.S. Bhati',
      address: language === 'en'
        ? 'First Floor, BSNL Building, Manji ka Hatha, Paota, Jodhpur 342006'
        : 'प्रथम तल, बीएसएनएल भवन, मंजी का हाथा, पाओटा, जोधपुर 342006',
      contact: '0291-2433967',
      email: 'woolboard-textiles@gov.in',
    },
    {
      designation: language === 'en' ? 'Wool Marketing Development Officer' : 'ऊन विपणन विकास अधिकारी',
      name: '-',
      address: '-',
      contact: '-',
      email: '-',
    },
    {
      designation: language === 'en' ? 'Adm. Officer' : 'प्रशासनिक अधिकारी',
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
          {language === 'en' ? "Who's Who" : 'कौन क्या है'}
        </h1>
        <h3 className="text-2xl font-semibold mb-6">
          {language === 'en' ? 'Important Address' : 'महत्वपूर्ण पता'}
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  {language === 'en' ? 'Designation' : 'पदनाम'}
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  {language === 'en' ? 'Name' : 'नाम'}
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  {language === 'en' ? 'Address' : 'पता'}
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  {language === 'en' ? 'Contact No.' : 'संपर्क नंबर'}
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  {language === 'en' ? 'E-mail ID' : 'ई-मेल आईडी'}
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">{contact.designation}</td>
                  <td className="border border-gray-300 px-4 py-3">{contact.name}</td>
                  <td className="border border-gray-300 px-4 py-3">{contact.address}</td>
                  <td className="border border-gray-300 px-4 py-3">{contact.contact}</td>
                  <td className="border border-gray-300 px-4 py-3">
                    {contact.email !== '-' ? (
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {contact.email}
                      </a>
                    ) : (
                      '-'
                    )}
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
