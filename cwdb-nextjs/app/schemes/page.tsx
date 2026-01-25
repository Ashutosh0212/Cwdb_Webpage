'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function SchemesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          {language === 'en' ? 'Schemes' : 'योजनाएं'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Scheme Cards */}
          {[
            {
              title: language === 'en' ? 'Wool Marketing Scheme' : 'ऊन विपणन योजना',
              description: language === 'en' 
                ? 'Direct procurement of wool from breeders at fixed prices to ensure better financial returns.'
                : 'बेहतर वित्तीय रिटर्न सुनिश्चित करने के लिए निश्चित मूल्य पर पालकों से ऊन की सीधी खरीद।'
            },
            {
              title: language === 'en' ? 'Human Resource Development' : 'मानव संसाधन विकास',
              description: language === 'en'
                ? 'Training programs for skill upgradation in handloom, carpet weaving, and woolen product manufacturing.'
                : 'हथकरघा, कालीन बुनाई और ऊनी उत्पाद निर्माण में कौशल उन्नयन के लिए प्रशिक्षण कार्यक्रम।'
            },
            {
              title: language === 'en' ? 'Pashmina Wool Development Scheme' : 'पश्मीना ऊन विकास योजना',
              description: language === 'en'
                ? 'Direct purchase of raw pashmina wool from growers at fixed prices, preventing exploitation by middlemen.'
                : 'बिचौलियों द्वारा शोषण को रोकते हुए उत्पादकों से निश्चित मूल्य पर कच्ची पश्मीना ऊन की सीधी खरीद।'
            },
            {
              title: language === 'en' ? 'Wool Processing Scheme' : 'ऊन प्रसंस्करण योजना',
              description: language === 'en'
                ? 'Modernization of pre-loom and post-loom processing facilities to enhance the quality of finished woolen products.'
                : 'तैयार ऊनी उत्पादों की गुणवत्ता बढ़ाने के लिए पूर्व-लूम और पोस्ट-लूम प्रसंस्करण सुविधाओं का आधुनिकीकरण।'
            },
          ].map((scheme, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">{scheme.title}</h2>
              <p className="text-gray-700">{scheme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
