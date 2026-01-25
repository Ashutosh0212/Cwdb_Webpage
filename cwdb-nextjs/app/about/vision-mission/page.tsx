'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function VisionMissionPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Aims and Objectives of the Central Wool Development Board' : 'केंद्रीय ऊन विकास बोर्ड के उद्देश्य और लक्ष्य'}
        </h1>
        <div className="prose max-w-none">
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' 
                  ? 'To promote the growth and development of wool & woolen products.'
                  : 'ऊन और ऊनी उत्पादों के विकास और वृद्धि को बढ़ावा देना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'Evolve an integrated approach to wool production and its utilization in the formulation of schemes, extension work, implementation, and evaluation aimed at augmenting wool production and upgrading its quality.'
                  : 'ऊन उत्पादन में वृद्धि और इसकी गुणवत्ता को उन्नत करने के उद्देश्य से योजनाओं के निर्माण, विस्तार कार्य, कार्यान्वयन और मूल्यांकन में ऊन उत्पादन और इसके उपयोग के लिए एक एकीकृत दृष्टिकोण विकसित करना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'To promote or undertake arrangements for better marketing and stabilizing the price of wool and wool products.'
                  : 'ऊन और ऊनी उत्पादों के बेहतर विपणन और मूल्य स्थिरीकरण के लिए व्यवस्थाओं को बढ़ावा देना या करना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'To promote standardization of wool & woolen products.'
                  : 'ऊन और ऊनी उत्पादों के मानकीकरण को बढ़ावा देना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'To propagate or undertake measures for quality control for wool & woolen products.'
                  : 'ऊन और ऊनी उत्पादों के लिए गुणवत्ता नियंत्रण के उपायों को प्रचारित करना या करना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'To sponsor, assist, coordinate, and encourage scientific, technological, and economic research into animal husbandry practices, wool production, utilization, and marketing to improve wool quality, yield, and utilization.'
                  : 'ऊन की गुणवत्ता, उपज और उपयोग में सुधार के लिए पशुपालन प्रथाओं, ऊन उत्पादन, उपयोग और विपणन में वैज्ञानिक, तकनीकी और आर्थिक अनुसंधान को प्रायोजित करना, सहायता करना, समन्वय करना और प्रोत्साहित करना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'To promote or undertake surveys and studies aimed at collecting and formulating statistics on wool, woolen products, employment, and income potential in the sector.'
                  : 'ऊन, ऊनी उत्पादों, रोजगार और क्षेत्र में आय की क्षमता पर आंकड़े एकत्र करने और तैयार करने के उद्देश्य से सर्वेक्षण और अध्ययन को बढ़ावा देना या करना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'To propagate information useful to wool growers, dealers, and manufacturers of woolen products.'
                  : 'ऊन उत्पादकों, व्यापारियों और ऊनी उत्पादों के निर्माताओं के लिए उपयोगी जानकारी का प्रचार करना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'To improve existing markets and develop new areas in wool usage.'
                  : 'मौजूदा बाजारों में सुधार करना और ऊन उपयोग में नए क्षेत्र विकसित करना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'To advise the Central Government on matters relating to the growth and development of wool, including the import and export of wool & wool products.'
                  : 'ऊन और ऊनी उत्पादों के आयात और निर्यात सहित ऊन के विकास और वृद्धि से संबंधित मामलों पर केंद्र सरकार को सलाह देना।'}
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en'
                  ? 'To assist, promote, coordinate, and harmonize the activities of various agencies, including private and non-governmental organizations, for the development of wool & woolen products.'
                  : 'ऊन और ऊनी उत्पादों के विकास के लिए निजी और गैर-सरकारी संगठनों सहित विभिन्न एजेंसियों की गतिविधियों में सहायता करना, बढ़ावा देना, समन्वय करना और सामंजस्य बिठाना।'}
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
