'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function CWDBPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Welcome to Central Wool Development Board' : 'केंद्रीय ऊन विकास बोर्ड में आपका स्वागत है'}
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            {language === 'en' 
              ? 'With a view to harmonize various diversified interests among different sectors of the wool industry for an Integrated Policy Development of the entire industry, the Central Wool Development Board was constituted in July, 1987, with its headquarters at Jodhpur, Rajasthan. The Board has been functioning since 1989.'
              : 'पूरे उद्योग के एकीकृत नीति विकास के लिए ऊन उद्योग के विभिन्न क्षेत्रों के बीच विविध हितों को सामंजस्य बिठाने के उद्देश्य से, केंद्रीय ऊन विकास बोर्ड जुलाई 1987 में जोधपुर, राजस्थान में अपने मुख्यालय के साथ गठित किया गया था। बोर्ड 1989 से कार्य कर रहा है।'}
          </p>
          <p className="text-lg mb-4">
            {language === 'en'
              ? 'The Board has been assigned various functions for the growth and development of wool and woollens, including:'
              : 'बोर्ड को ऊन और ऊनी वस्तुओं के विकास और वृद्धि के लिए विभिन्न कार्य सौंपे गए हैं, जिनमें शामिल हैं:'}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>{language === 'en' ? 'Marketing intelligence' : 'विपणन बुद्धिमत्ता'}</li>
            <li>{language === 'en' ? 'Marketing of wool and woollens' : 'ऊन और ऊनी वस्तुओं का विपणन'}</li>
            <li>{language === 'en' ? 'Price stabilization' : 'मूल्य स्थिरीकरण'}</li>
            <li>{language === 'en' ? 'Testing of wool and woollens' : 'ऊन और ऊनी वस्तुओं का परीक्षण'}</li>
            <li>{language === 'en' ? 'Product development' : 'उत्पाद विकास'}</li>
            <li>{language === 'en' ? 'Providing advice to the Government on policy matters' : 'नीति मामलों पर सरकार को सलाह देना'}</li>
            <li>{language === 'en' ? 'Coordination across the wool industry' : 'ऊन उद्योग में समन्वय'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
