'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function WoolAtAGlancePage() {
  const { language } = useLanguage();

  const sheepPopulation = [
    { rank: 1, stateEn: 'Telangana', stateHi: 'तेलंगाना', population: '19,063,058' },
    { rank: 2, stateEn: 'Andhra Pradesh', stateHi: 'आंध्र प्रदेश', population: '17,626,971' },
    { rank: 3, stateEn: 'Karnataka', stateHi: 'कर्नाटक', population: '11,050,728' },
    { rank: 4, stateEn: 'Rajasthan', stateHi: 'राजस्थान', population: '7,903,857' },
    { rank: 5, stateEn: 'Tamil Nadu', stateHi: 'तमिलनाडु', population: '4,500,491' },
    { rank: 6, stateEn: 'Jammu & Kashmir', stateHi: 'जम्मू और कश्मीर', population: '3,247,503' },
    { rank: 7, stateEn: 'Maharashtra', stateHi: 'महाराष्ट्र', population: '2,680,329' },
    { rank: 8, stateEn: 'Gujarat', stateHi: 'गुजरात', population: '1,787,263' },
    { rank: 9, stateEn: 'Odisha', stateHi: 'ओडिशा', population: '1,279,149' },
    { rank: 10, stateEn: 'Uttar Pradesh', stateHi: 'उत्तर प्रदेश', population: '984,725' },
    { rank: 11, stateEn: 'West Bengal', stateHi: 'पश्चिम बंगाल', population: '952,886' },
    { rank: 12, stateEn: 'Himachal Pradesh', stateHi: 'हिमाचल प्रदेश', population: '791,345' },
    { rank: 13, stateEn: 'Jharkhand', stateHi: 'झारखंड', population: '641,183' },
    { rank: 14, stateEn: 'Assam', stateHi: 'असम', population: '332,100' },
    { rank: 15, stateEn: 'Madhya Pradesh', stateHi: 'मध्य प्रदेश', population: '324,585' },
    { rank: 16, stateEn: 'Haryana', stateHi: 'हरियाणा', population: '288,370' },
    { rank: 17, stateEn: 'Uttarakhand', stateHi: 'उत्तराखंड', population: '284,615' },
    { rank: 18, stateEn: 'Bihar', stateHi: 'बिहार', population: '213,377' },
    { rank: 19, stateEn: 'Chhattisgarh', stateHi: 'छत्तीसगढ़', population: '180,229' },
    { rank: 20, stateEn: 'Punjab', stateHi: 'पंजाब', population: '85,560' },
    { rank: 21, stateEn: 'Meghalaya', stateHi: 'मेघालय', population: '15,679' },
    { rank: 22, stateEn: 'Arunachal Pradesh', stateHi: 'अरुणाचल प्रदेश', population: '7,345' },
    { rank: 23, stateEn: 'Manipur', stateHi: 'मणिपुर', population: '5,921' },
    { rank: 24, stateEn: 'Tripura', stateHi: 'त्रिपुरा', population: '5,460' },
    { rank: 25, stateEn: 'Puducherry', stateHi: 'पुदुचेरी', population: '2,445' },
    { rank: 26, stateEn: 'Sikkim', stateHi: 'सिक्किम', population: '2,016' },
    { rank: 27, stateEn: 'Kerala', stateHi: 'केरल', population: '1,482' },
    { rank: 28, stateEn: 'Delhi', stateHi: 'दिल्ली', population: '932' },
    { rank: 29, stateEn: 'Mizoram', stateHi: 'मिजोरम', population: '485' },
    { rank: 30, stateEn: 'Nagaland', stateHi: 'नागालैंड', population: '361' },
    { rank: 31, stateEn: 'D&N Haveli', stateHi: 'दादरा और नगर हवेली', population: '84' },
    { rank: 32, stateEn: 'Daman & Diu', stateHi: 'दमन और दीव', population: '68' },
    { rank: 33, stateEn: 'Goa', stateHi: 'गोवा', population: '8' },
    { rank: 34, stateEn: 'A & N Islands', stateHi: 'अंडमान और निकोबार द्वीप समूह', population: '5' },
    { rank: 35, stateEn: 'Chandigarh', stateHi: 'चंडीगढ़', population: '0' },
    { rank: 36, stateEn: 'Lakshadweep', stateHi: 'लक्षद्वीप', population: '0' },
  ];

  const woolProduction = [
    { year: '2015-16', production: '43.60' },
    { year: '2016-17', production: '43.50' },
    { year: '2017-18', production: '41.47' },
    { year: '2018-19', production: '40.42' },
    { year: '2019-20', production: '36.74' },
    { year: '2020-21', production: '36.93' },
    { year: '2021-22', production: '33.00' },
    { year: '2022-23', production: '33.61' },
    { year: '2023-24', production: '33.70' },
    { year: '2024-25', production: '34.57' },
  ];

  const topStates = [
    { rank: '01', stateEn: 'Rajasthan', stateHi: 'राजस्थान', production: '16,542.59' },
    { rank: '02', stateEn: 'Jammu & Kashmir', stateHi: 'जम्मू और कश्मीर', production: '7,909.07' },
    { rank: '03', stateEn: 'Gujarat', stateHi: 'गुजरात', production: '2,150.41' },
    { rank: '04', stateEn: 'Maharashtra', stateHi: 'महाराष्ट्र', production: '1,642.05' },
    { rank: '05', stateEn: 'Himachal Pradesh', stateHi: 'हिमाचल प्रदेश', production: '1,485.01' },
    { rank: '06', stateEn: 'Uttar Pradesh', stateHi: 'उत्तर प्रदेश', production: '837.66' },
    { rank: '07', stateEn: 'West Bengal', stateHi: 'पश्चिम बंगाल', production: '773.85' },
    { rank: '08', stateEn: 'Haryana', stateHi: 'हरियाणा', production: '679.68' },
    { rank: '09', stateEn: 'Karnataka', stateHi: 'कर्नाटक', production: '647.29' },
    { rank: '10', stateEn: 'Punjab', stateHi: 'पंजाब', production: '560.50' },
  ];

  const rawWoolImports = [
    { year: '2015-16', quantity: '97.83', value: '2,016.12' },
    { year: '2016-17', quantity: '87.15', value: '1,894.26' },
    { year: '2017-18', quantity: '79.95', value: '1,884.59' },
    { year: '2018-19', quantity: '77.43', value: '2,159.56' },
    { year: '2019-20', quantity: '69.21', value: '1,593.46' },
    { year: '2020-21', quantity: '81.62', value: '995.15' },
    { year: '2021-22', quantity: '107.83', value: '1,660.37' },
    { year: '2022-23', quantity: '80.86', value: '1,864.58' },
    { year: '2023-24', quantity: '92.20', value: '1,798.84' },
    { year: '2024-25', quantity: '105.27', value: '1,740.81' },
    { year: '2025-26', quantity: '107.24', value: '2,036.55' },
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
    { year: '2024-25', yarn: '1,351.17', garments: '1,473.95', carpet: '12,659.12', total: '15,484.24' },
    { year: '2025-26', yarn: '1,559.76', garments: '1,614.43', carpet: '12,403.08', total: '15,604.27' },
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
              ? 'Wool, though modest in presence compared to other natural fibers and often categorized by its seasonal utility, remains indispensable for winter apparel, suiting, floor coverings, and various industrial uses. Unique in its source from a variety of animals, wool originates from rural areas, significantly bolstering employment in the countryside and bridging the rural economy with the manufacturing industry. This industry spans from small-scale artisans to large-scale enterprises.'
              : 'ऊन, हालांकि अन्य प्राकृतिक रेशों की तुलना में मामूली उपस्थिति में है और अक्सर अपनी मौसमी उपयोगिता के आधार पर वर्गीकृत की जाती है, सर्दियों के परिधान, सूटिंग, फर्श आवरण और विभिन्न औद्योगिक उपयोगों के लिए अपरिहार्य बनी हुई है। विभिन्न पशुओं से प्राप्त होने वाली यह ऊन ग्रामीण क्षेत्रों से आती है, ग्रामीण रोजगार को बढ़ावा देती है और ग्रामीण अर्थव्यवस्था को विनिर्माण उद्योग से जोड़ती है। यह उद्योग छोटे पैमाने के कारीगरों से लेकर बड़े पैमाने के उद्यमों तक फैला हुआ है।'}
          </p>
          <p className="text-lg mb-4">
            {language === 'en'
              ? 'Despite its smaller scale relative to the cotton and synthetic fiber industries, the woolen sector is critically intertwined with the manufacturing industry, incorporating both small and large units. The industry in India, valued at Rs. 15,604.27 Cr. in 2025-26, is split between organized and decentralized sectors. The organized sector includes composite mills, worsted and non-worsted spinning units, knitwear, woven garments, and machine-made carpet manufacturing. The decentralized sector comprises hosiery and knitting, power looms, hand-knotted carpets, and woolen handlooms, among others. Notably, the sector is export-oriented, with significant shipments of handmade carpets, woolen yarn, fabrics, and garments.'
              : 'कपास और सिंथेटिक फाइबर उद्योगों की तुलना में छोटे पैमाने के बावजूद, ऊनी क्षेत्र विनिर्माण उद्योग से गहराई से जुड़ा हुआ है, जिसमें छोटी और बड़ी दोनों इकाइयाँ शामिल हैं। भारत में यह उद्योग 2025-26 में 15,604.27 करोड़ रुपये का है और संगठित तथा विकेंद्रीकृत क्षेत्रों में विभाजित है। संगठित क्षेत्र में समग्र मिलें, वर्स्टेड और नॉन-वर्स्टेड कताई इकाइयाँ, निटवियर, बुने हुए परिधान और मशीन से बने कालीन निर्माण शामिल हैं। विकेंद्रीकृत क्षेत्र में होजरी और बुनाई, पावरलूम, हस्त-गांठदार कालीन और ऊनी हथकरघा आदि शामिल हैं। यह क्षेत्र निर्यातोन्मुख है, जिसमें हस्तनिर्मित कालीन, ऊनी यार्न, कपड़े और परिधानों का महत्वपूर्ण निर्यात होता है।'}
          </p>
          <p className="text-lg mb-4">
            {language === 'en'
              ? "India, home to the world's third-largest sheep population at 74.26 million, ranks sixteenth in global wool production, generating 34.57 million kg of wool in 2024-25. Of this, approximately 85% is carpet-grade, 5% apparel-grade, and the remaining 10% coarser grade. The average wool yield per sheep in India is 0.9 kg annually, below the global average of 2.4 kg. Specialty fibers are also sourced from Pashmina goats in the Union Territory of Ladakh, supporting around 4,000 families."
              : 'भारत, 7.426 करोड़ भेड़ों के साथ विश्व की तीसरी सबसे बड़ी भेड़ आबादी का घर है और वैश्विक ऊन उत्पादन में सोलहवें स्थान पर है। 2024-25 में यहाँ 34.57 मिलियन किलोग्राम ऊन का उत्पादन हुआ। इसमें से लगभग 85% कालीन-ग्रेड, 5% परिधान-ग्रेड और शेष 10% मोटा ग्रेड है। भारत में प्रति भेड़ औसत ऊन उपज 0.9 किग्रा प्रति वर्ष है, जो वैश्विक औसत 2.4 किग्रा से कम है। विशेष रेशे केंद्र शासित प्रदेश लद्दाख की पश्मीना बकरियों से भी प्राप्त होते हैं, जो लगभग 4,000 परिवारों को सहायता प्रदान करते हैं।'}
          </p>
          <p className="text-lg mb-4">
            {language === 'en'
              ? 'The leading states in sheep population—Telangana, Andhra Pradesh, Karnataka, Rajasthan, Jammu and Kashmir, Maharashtra, Gujarat, and Uttar Pradesh—mostly produce coarse wool, which has limited commercial use, with sheep primarily raised for meat.'
              : 'भेड़ आबादी में अग्रणी राज्य—तेलंगाना, आंध्र प्रदेश, कर्नाटक, राजस्थान, जम्मू और कश्मीर, महाराष्ट्र, गुजरात और उत्तर प्रदेश—मुख्यतः मोटी ऊन का उत्पादन करते हैं, जिसका व्यावसायिक उपयोग सीमित है, क्योंकि भेड़ें मुख्य रूप से मांस के लिए पाली जाती हैं।'}
          </p>
          <p className="text-lg mb-4">
            {language === 'en'
              ? "The woolen industry holds vast potential for job creation across India's diverse and remote regions. Currently, the organized wool sector employs about 1.2 million people, with another 2 million involved in sheep farming and rearing, and 300,000 weavers in the carpet sector. Woolen mills are primarily located in Uttar Pradesh, Punjab, Rajasthan, Himachal Pradesh, Jammu and Kashmir, and Uttarakhand, contributing significantly to local economies and the national manufacturing landscape."
              : 'ऊनी उद्योग भारत के विविध और दूरस्थ क्षेत्रों में रोजगार सृजन की व्यापक संभावना रखता है। वर्तमान में संगठित ऊन क्षेत्र में लगभग 12 लाख लोग कार्यरत हैं, अन्य 20 लाख भेड़ पालन और पालन-पोषण में लगे हैं, तथा कालीन क्षेत्र में 3 लाख बुनकर हैं। ऊनी मिलें मुख्य रूप से उत्तर प्रदेश, पंजाब, राजस्थान, हिमाचल प्रदेश, जम्मू और कश्मीर तथा उत्तराखंड में स्थित हैं, जो स्थानीय अर्थव्यवस्थाओं और राष्ट्रीय विनिर्माण परिदृश्य में महत्वपूर्ण योगदान देती हैं।'}
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Sheep Population State wise' : 'राज्यवार भेड़ आबादी'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'S. No.' : 'क्र.सं.'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'State/UT' : 'राज्य/केंद्र शासित प्रदेश'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Sheep Population' : 'भेड़ आबादी'}</th>
                </tr>
              </thead>
              <tbody>
                {sheepPopulation.map((item) => (
                  <tr key={item.rank}>
                    <td className="border border-gray-300 px-4 py-2">{item.rank}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {language === 'en' ? item.stateEn : item.stateHi}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{item.population}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-semibold">
                  <td className="border border-gray-300 px-4 py-2" colSpan={2}>
                    {language === 'en' ? 'Total' : 'कुल'}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">74,260,615</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {language === 'en'
              ? 'Source: 2019 Census Data from Animal Husbandry and Dehairing Annual Report'
              : 'स्रोत: पशुपालन और डीहेयरिंग वार्षिक रिपोर्ट से 2019 जनगणना डेटा'}
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Wool Production (2015-16 to 2024-25)' : 'ऊन उत्पादन (2015-16 से 2024-25)'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Year' : 'वर्ष'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Quantity (Mn Kg.)' : 'मात्रा (मिलियन किग्रा)'}</th>
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
          <p className="text-sm text-gray-600 mt-2">
            {language === 'en'
              ? 'Source: Annual Report, Ministry of Fisheries, Animal Husbandry and Dairying, New Delhi'
              : 'स्रोत: वार्षिक रिपोर्ट, मत्स्य पालन, पशुपालन और डेयरी मंत्रालय, नई दिल्ली'}
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Top Wool Producing States (2024-25)' : 'शीर्ष ऊन उत्पादक राज्य (2024-25)'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'S.No.' : 'क्र.सं.'}</th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'State' : 'राज्य'}</th>
                  <th className="border border-gray-300 px-4 py-2">
                    {language === 'en'
                      ? "Wool Production 2024-25 (Quantity on '000 Kg)"
                      : "ऊन उत्पादन 2024-25 (मात्रा '000 किग्रा)"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {topStates.map((item) => (
                  <tr key={item.rank}>
                    <td className="border border-gray-300 px-4 py-2">{item.rank}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {language === 'en' ? item.stateEn : item.stateHi}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{item.production}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {language === 'en'
              ? 'Source: Annual Report, Ministry of Fisheries, Animal Husbandry and Dairying, New Delhi'
              : 'स्रोत: वार्षिक रिपोर्ट, मत्स्य पालन, पशुपालन और डेयरी मंत्रालय, नई दिल्ली'}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {language === 'en' ? '2. Import & Export Trends' : '2. आयात और निर्यात प्रवृत्तियां'}
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-6">
            {language === 'en' ? 'Import of Raw Wool (2015-16 to 2025-26)' : 'कच्चे ऊन का आयात (2015-16 से 2025-26)'}
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
          <p className="text-sm text-gray-600 mt-2 mb-8">
            {language === 'en'
              ? 'Source: Director General of Commerce Intelligence and Statistics – DGCI&S, Kolkata'
              : 'स्रोत: वाणिज्य आसूचना एवं सांख्यिकी महानिदेशक – डीजीसीआई एंड एस, कोलकाता'}
          </p>

          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Export of Wool Items (2015-16 to 2025-26)' : 'ऊनी वस्तुओं का निर्यात (2015-16 से 2025-26)'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 w-[13%] whitespace-nowrap">{language === 'en' ? 'Year' : 'वर्ष'}</th>
                  <th className="border border-gray-300 px-4 py-2">
                    {language === 'en'
                      ? 'Woolen Yarn, fabric, Madeups (Rs Cr)'
                      : 'ऊनी यार्न, कपड़े, मेडअप्स (₹ करोड़)'}
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    {language === 'en' ? 'Ready Made Garments (Rs Cr)' : 'रेडीमेड गारमेंट्स (₹ करोड़)'}
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    {language === 'en' ? 'Carpet (Excluding Silk) (Rs Cr)' : 'कालीन (रेशम को छोड़कर) (₹ करोड़)'}
                  </th>
                  <th className="border border-gray-300 px-4 py-2">{language === 'en' ? 'Total (Rs Cr)' : 'कुल (₹ करोड़)'}</th>
                </tr>
              </thead>
              <tbody>
                {woolExports.map((item) => (
                  <tr key={item.year}>
                    <td className="border border-gray-300 px-4 py-2 w-[13%] whitespace-nowrap">{item.year}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.yarn}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.garments}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.carpet}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {language === 'en'
              ? 'Source: Director General of Commerce Intelligence and Statistics – DGCI&S, Kolkata'
              : 'स्रोत: वाणिज्य आसूचना एवं सांख्यिकी महानिदेशक – डीजीसीआई एंड एस, कोलकाता'}
          </p>
        </section>
      </div>
    </div>
  );
}
