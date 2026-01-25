'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function WoolAtAGlancePage() {
  const { language } = useLanguage();

  const woolProduction = [
    { year: '2015-16', production: '43.60' },
    { year: '2016-17', production: '43.50' },
    { year: '2017-18', production: '41.47' },
    { year: '2018-19', production: '40.42' },
    { year: '2019-20', production: '36.74' },
    { year: '2020-21', production: '36.93' },
    { year: '2021-22', production: '33.00' },
    { year: '2022-23', production: '33.61' },
    { year: '2023-24', production: '33.98 (T)' },
  ];

  const topStates = [
    { rank: 1, state: 'Rajasthan', production: '16,123.31' },
    { rank: 2, state: 'Jammu & Kashmir', production: '7,807.52' },
    { rank: 3, state: 'Gujarat', production: '2,019.00' },
    { rank: 4, state: 'Maharashtra', production: '1,608.00' },
    { rank: 5, state: 'Himachal Pradesh', production: '1,500.00' },
    { rank: 6, state: 'Karnataka', production: '659.00' },
    { rank: 7, state: 'Uttar Pradesh', production: '942.50' },
    { rank: 8, state: 'West Bengal', production: '771.00' },
    { rank: 9, state: 'Haryana', production: '674.61' },
  ];

  const rawWoolImports = [
    { year: '2015-16', quantity: '97.83', value: '2016.12' },
    { year: '2016-17', quantity: '87.15', value: '1894.26' },
    { year: '2017-18', quantity: '79.95', value: '1884.59' },
    { year: '2018-19', quantity: '77.43', value: '2159.56' },
    { year: '2019-20', quantity: '69.21', value: '1593.46' },
    { year: '2020-21', quantity: '81.62', value: '995.15' },
    { year: '2021-22', quantity: '107.83', value: '1660.37' },
    { year: '2022-23', quantity: '80.86', value: '1864.58' },
    { year: '2023-24', quantity: '92.20', value: '1798.84' },
  ];

  const woolExports = [
    { year: '2015-16', yarn: '1,284.91', garments: '1,724.86', carpet: '9,421.75', total: '12,431.52' },
    { year: '2016-17', yarn: '1,180.24', garments: '1,443.26', carpet: '9,956.63', total: '12,580.13' },
    { year: '2017-18', yarn: '1,197.86', garments: '1,089.97', carpet: '9,196.99', total: '11,484.82' },
    { year: '2018-19', yarn: '1,543.25', garments: '1,378.32', carpet: '10,262.79', total: '13,184.36' },
    { year: '2019-20', yarn: '1,282.36', garments: '1,096.18', carpet: '9,581.38', total: '11,959.92' },
    { year: '2020-21', yarn: '803.38', garments: '796.52', carpet: '10,846.06', total: '12,444.45' },
    { year: '2021-22', yarn: '1,239.33', garments: '1,105.53', carpet: '13,069.42', total: '15,414.28' },
    { year: '2022-23', yarn: '1,643.59', garments: '1,452.37', carpet: '10,556.92', total: '13,652.88' },
    { year: '2023-24', yarn: '1,587.09', garments: '1,672.57', carpet: '11,174.49', total: '14,434.15' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'WOOL SECTOR' : 'ऊन क्षेत्र'}
        </h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {language === 'en' ? '1. Introduction' : '1. परिचय'}
          </h2>
          <p className="text-lg mb-4">
            {language === 'en'
              ? 'Wool, though modest in presence compared to other natural fibers, remains essential for winter apparel, suiting, floor coverings, and industrial uses. Originating from rural areas, it plays a crucial role in employment and the rural economy. The wool industry spans small-scale artisans to large-scale enterprises, supporting both local and national economies.'
              : 'ऊन, हालांकि अन्य प्राकृतिक रेशों की तुलना में मामूली उपस्थिति में, सर्दियों के परिधान, सूटिंग, फर्श आवरण और औद्योगिक उपयोगों के लिए आवश्यक बनी हुई है। ग्रामीण क्षेत्रों से उत्पन्न होने वाली, यह रोजगार और ग्रामीण अर्थव्यवस्था में महत्वपूर्ण भूमिका निभाती है। ऊन उद्योग छोटे पैमाने के कारीगरों से लेकर बड़े पैमाने के उद्यमों तक फैला हुआ है, जो स्थानीय और राष्ट्रीय दोनों अर्थव्यवस्थाओं का समर्थन करता है।'}
          </p>
          <p className="text-lg mb-4">
            {language === 'en'
              ? 'In India, the woolen sector, valued at Rs. 14,434.15 crores in 2023-24, includes both organized and decentralized sectors. The organized sector comprises composite mills, spinning units, and machine-made carpets, while the decentralized sector focuses on handmade carpets, woolen handlooms, and knitting.'
              : 'भारत में, 2023-24 में 14,434.15 करोड़ रुपये के मूल्य वाला ऊनी क्षेत्र, संगठित और विकेंद्रीकृत दोनों क्षेत्रों को शामिल करता है। संगठित क्षेत्र में समग्र मिलें, कताई इकाइयाँ और मशीन से बने कालीन शामिल हैं, जबकि विकेंद्रीकृत क्षेत्र हस्तनिर्मित कालीन, ऊनी हथकरघा और बुनाई पर केंद्रित है।'}
          </p>
          <p className="text-lg mb-4">
            {language === 'en'
              ? 'India is home to the third-largest sheep population, producing 33.98 million kg of wool, primarily carpet-grade. While wool production remains steady, India imports a significant portion to meet the demand for finer wool used in apparel.'
              : 'भारत तीसरी सबसे बड़ी भेड़ आबादी का घर है, जो मुख्य रूप से कालीन-ग्रेड की 33.98 मिलियन किलोग्राम ऊन का उत्पादन करता है। जबकि ऊन उत्पादन स्थिर बना हुआ है, भारत परिधान में उपयोग की जाने वाली बेहतर ऊन की मांग को पूरा करने के लिए एक महत्वपूर्ण हिस्सा आयात करता है।'}
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Wool Production (2015-2024)' : 'ऊन उत्पादन (2015-2024)'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Year' : 'वर्ष'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Production (Mn Kg)' : 'उत्पादन (मिलियन किग्रा)'}</th>
                </tr>
              </thead>
              <tbody>
                {woolProduction.map((item) => (
                  <tr key={item.year}>
                    <td className="border border-gray-300 px-4 py-2">{item.year}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.production}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Top Wool Producing States (2023-24)' : 'शीर्ष ऊन उत्पादक राज्य (2023-24)'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">#</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'State' : 'राज्य'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Production (1000 Kg)' : 'उत्पादन (1000 किग्रा)'}</th>
                </tr>
              </thead>
              <tbody>
                {topStates.map((item) => (
                  <tr key={item.rank}>
                    <td className="border border-gray-300 px-4 py-2">{item.rank}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.state}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.production}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {language === 'en' ? '2. Wool Processing' : '2. ऊन प्रसंस्करण'}
          </h2>
          <p className="text-lg mb-4">
            {language === 'en'
              ? 'The wool industry faces challenges due to outdated processing facilities. There is an urgent need to modernize both pre-loom and post-loom operations to enhance product quality and competitiveness in the international market.'
              : 'ऊन उद्योग को पुरानी प्रसंस्करण सुविधाओं के कारण चुनौतियों का सामना करना पड़ रहा है। अंतर्राष्ट्रीय बाजार में उत्पाद की गुणवत्ता और प्रतिस्पर्धात्मकता बढ़ाने के लिए पूर्व-लूम और पोस्ट-लूम दोनों संचालन को आधुनिक बनाने की तत्काल आवश्यकता है।'}
          </p>
          <p className="text-lg mb-4">
            {language === 'en'
              ? 'Given the specialized nature of wool processing equipment, much of the machinery is imported from Europe, the USA, and Japan, with few components sourced locally.'
              : 'ऊन प्रसंस्करण उपकरण की विशिष्ट प्रकृति को देखते हुए, अधिकांश मशीनरी यूरोप, यूएसए और जापान से आयात की जाती है, जिसमें कुछ घटक स्थानीय रूप से प्राप्त किए जाते हैं।'}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {language === 'en' ? '3. Import & Export Trends' : '3. आयात और निर्यात प्रवृत्तियां'}
          </h2>
          
          <h3 className="text-xl font-semibold mb-4 mt-6">
            {language === 'en' ? 'Import of Raw Wool (2015-2024)' : 'कच्चे ऊन का आयात (2015-2024)'}
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Year' : 'वर्ष'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Quantity (Mn Kg)' : 'मात्रा (मिलियन किग्रा)'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Value (Rs Cr)' : 'मूल्य (रुपये करोड़)'}</th>
                </tr>
              </thead>
              <tbody>
                {rawWoolImports.map((item) => (
                  <tr key={item.year}>
                    <td className="border border-gray-300 px-4 py-2">{item.year}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Export of Wool Items (₹ Cr)' : 'ऊनी वस्तुओं का निर्यात (₹ करोड़)'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Year' : 'वर्ष'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Woolen Yarn, Fabrics (₹ Cr)' : 'ऊनी यार्न, कपड़े (₹ करोड़)'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Ready Made Garments (₹ Cr)' : 'रेडीमेड गारमेंट्स (₹ करोड़)'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Carpet (Excluding Silk) (₹ Cr)' : 'कालीन (रेशम को छोड़कर) (₹ करोड़)'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Total (₹ Cr)' : 'कुल (₹ करोड़)'}</th>
                </tr>
              </thead>
              <tbody>
                {woolExports.map((item) => (
                  <tr key={item.year}>
                    <td className="border border-gray-300 px-4 py-2">{item.year}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.yarn}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.garments}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.carpet}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
