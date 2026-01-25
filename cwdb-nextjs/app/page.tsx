'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('wms');

  const schemes = {
    wms: {
      title: language === 'en' ? 'Wool Marketing Scheme' : 'ऊन विपणन योजना',
      description: language === 'en' 
        ? 'Sheep breeders belong to an unorganized sector who sell their wool in small volumes. In the present setup, they are compelled to sell their produce at prices dictated by traders. The prevailing system is less beneficial for breeders as the main share of profit goes to middlemen. Therefore, there is a need to procure wool directly from the breeders at a fixed price by State Govt. organizations, which will ensure better financial returns.'
        : 'भेड़ पालक एक असंगठित क्षेत्र से संबंधित हैं जो अपनी ऊन छोटी मात्रा में बेचते हैं। वर्तमान व्यवस्था में, उन्हें व्यापारियों द्वारा निर्धारित कीमतों पर अपना उत्पाद बेचने के लिए मजबूर किया जाता है। प्रचलित प्रणाली पालकों के लिए कम लाभकारी है क्योंकि लाभ का मुख्य हिस्सा बिचौलियों को जाता है। इसलिए, राज्य सरकार द्वारा संगठनों द्वारा पालकों से सीधे एक निश्चित मूल्य पर ऊन खरीदने की आवश्यकता है, जो बेहतर वित्तीय रिटर्न सुनिश्चित करेगा।',
      image: '/images/Untitled2_4.png'
    },
    hrd: {
      title: language === 'en' ? 'Human Resource Development & Promotional Activities' : 'मानव संसाधन विकास और प्रचार गतिविधियां',
      description: language === 'en'
        ? 'Indian handloom-made woolen products are in high demand in both domestic and international markets. Under this scheme, training will be imparted for skill upgradation in handloom/carpet weaving, knitting, and woolen product manufacturing, ensuring that India remains competitive in these markets.'
        : 'भारतीय हथकरघा निर्मित ऊनी उत्पाद घरेलू और अंतर्राष्ट्रीय दोनों बाजारों में अधिक मांग में हैं। इस योजना के तहत, हथकरघा/कालीन बुनाई, बुनाई, और ऊनी उत्पाद निर्माण में कौशल उन्नयन के लिए प्रशिक्षण दिया जाएगा, यह सुनिश्चित करते हुए कि भारत इन बाजारों में प्रतिस्पर्धी बना रहे।',
      image: '/images/Untitled3.png'
    },
    pwds: {
      title: language === 'en' ? 'Pashmina Wool Development Scheme' : 'पश्मीना ऊन विकास योजना',
      description: language === 'en'
        ? 'The aim of this scheme is to purchase raw pashmina wool directly from growers at a fixed price, preventing exploitation by middlemen. It ensures the availability of raw pashmina wool to manufacturers throughout the year at affordable rates.'
        : 'इस योजना का उद्देश्य बिचौलियों द्वारा शोषण को रोकते हुए उत्पादकों से सीधे एक निश्चित मूल्य पर कच्ची पश्मीना ऊन खरीदना है। यह वर्ष भर सस्ती दरों पर निर्माताओं को कच्ची पश्मीना ऊन की उपलब्धता सुनिश्चित करता है।',
      image: '/images/Untitled4.png'
    },
    wps: {
      title: language === 'en' ? 'Wool Processing Scheme' : 'ऊन प्रसंस्करण योजना',
      description: language === 'en'
        ? 'The woolen industry suffers from outdated processing facilities. This scheme aims to modernize pre-loom and post-loom processing to enhance the quality of finished woolen products, benefiting both the local wool industry and export markets. Establishing Common Facility Centers for wool processing will also create more employment and income generation opportunities.'
        : 'ऊनी उद्योग पुरानी प्रसंस्करण सुविधाओं से पीड़ित है। इस योजना का उद्देश्य तैयार ऊनी उत्पादों की गुणवत्ता बढ़ाने के लिए पूर्व-लूम और पोस्ट-लूम प्रसंस्करण को आधुनिक बनाना है, जिससे स्थानीय ऊन उद्योग और निर्यात बाजार दोनों को लाभ होगा। ऊन प्रसंस्करण के लिए सामान्य सुविधा केंद्र स्थापित करने से अधिक रोजगार और आय सृजन के अवसर भी पैदा होंगे।',
      image: '/images/Untitled1.png'
    }
  };

  const newsItems = [
    { 
      text: language === 'en' 
        ? 'Please visit the website regularly since all subsequent Corrigendum/ addendum/ updates will be uploaded on website only.' 
        : 'कृपया वेबसाइट को नियमित रूप से देखें क्योंकि सभी बाद के सुधार/परिशिष्ट/अपडेट केवल वेबसाइट पर अपलोड किए जाएंगे।', 
      link: '#' 
    },
    { 
      text: 'Final list of Woolen Expo Paschimi Rajasthan Udyog Hastshilp Utsav DIC Jodhpur from 25.12.25 to 04.01.26', 
      link: '/files/Final list of Woolen Expo Paschimi Rajasthan Udyog Hastshilp Utsav DIC Jodhpur from 25.12.25 to 04.01.26.pdf' 
    },
    { 
      text: 'Examination Guideline Notice for Multi Task Staff MTS', 
      link: '/files/Examination Guideline Notice for Multi Task Staff MTS.pdf' 
    },
    { 
      text: 'Information regarding written test for the post of Multi Tasking staff Industrial Service centre CWDB', 
      link: '/files/Information regarding written test for the post of Multi Tasking staff Industrial Service centre CWDB.pdf' 
    },
    { 
      text: 'Short Listed Candidates for writen test for the vacany post of Multi Tasking Staff (MTS)', 
      link: '/files/BP-30M31_20251121_210432.pdf' 
    },
    { 
      text: 'Advertisement for Procurement of OFDA 4000 as Proprietary Product', 
      link: '/files/Advertisement for Procurement of OFDA 4000 as Proprietary Product.pdf' 
    },
    { 
      text: 'Result of Engagement of one Legal Assistant in CWDB', 
      link: '/files/Result of Engagement of one Legal Assistant in CWDB.pdf' 
    },
    { 
      text: 'List of Qualified and Provisionally Qualified Candidate for Multi Testing Staff MTS at ISC, CWDB, Bikaner', 
      link: '/files/List of Qualified and Provisionally Qualified Candidate for Multi Testing Staff MTS at ISC CWDB Bikaner.pdf' 
    },
    { 
      text: 'Office order for List of Empanelled Advocates of CWDB', 
      link: '/files/Empaneled Advocate of CWDB.pdf' 
    },
    { 
      text: 'Date Extension for Invitation of Young Professional', 
      link: '/files/Date Extension for Invitation of Young Professional.pdf' 
    },
    { 
      text: 'Recruitment Notice for Multi Tasking Staff (MTS)', 
      link: '/files/Recruitment Notice for Multi Tasking Staff (MTS).pdf' 
    },
    { 
      text: 'Recruitment Notice for Junior Technical Assistant (JTA)', 
      link: '/files/Recruitment Notice for Junior Technical Assistant (JTA).pdf' 
    },
    { 
      text: 'Extension of last date to apply for Empanelment of CWDB Advocates in Districts Courts', 
      link: '/files/Extension of last date to apply for Empanelment of CWDB Advocates in Districts Courts.pdf' 
    },
    { 
      text: 'Service of Legal Asstt', 
      link: '/files/iitjodhpurlegal.pdf' 
    },
    { 
      text: 'Advertisement for Engagement of Young Professional in Central Wool Development Board', 
      link: '/files/821.pdf' 
    },
    { 
      text: 'Free Handicraft Training Admission Notice', 
      link: '/files/BP-30M31_20250723_202034.pdf' 
    },
    { 
      text: 'Empanelment of CWDB Advocates in Districts Courts', 
      link: '/files/panneladvocate1.pdf' 
    },
    { 
      text: 'Result of Written Exam Held on 16th May, for the Post of Administrative Officer, CWDB.', 
      link: '/files/AO result.pdf' 
    },
    { 
      text: 'Result of Written Exam Held on 16th May, 2025 for the Post of Accountant , CWDB.', 
      link: '/files/A result.pdf' 
    },
    { 
      text: 'Final Answer Key of Question Paper for the Post of Administrative Officer and Accountant', 
      link: '/files/20250606190219478.pdf' 
    },
    { 
      text: 'Advertisement for Office Assistant at WDTC, Kullu on contractual basis', 
      link: '/files/Advertisement_contractual_kullu.pdf' 
    },
    { 
      text: 'Examination Notice for the post of Administrative Officer', 
      link: '/files/BP-30M31_20250501_133502.pdf' 
    },
    { 
      text: 'Examination Notice for the post of Accountant', 
      link: '/files/BP-30M31_20250501_133424.pdf' 
    },
    { 
      text: 'New address of CWDB office', 
      link: '/files/2713.pdf' 
    },
    { 
      text: 'List of short listed candidates eligible for written test for the post of Accountant', 
      link: '/files/1.pdf' 
    },
    { 
      text: 'List of short listed candidates eligible for written test for the post of Administrative Officer', 
      link: '/files/2.pdf' 
    },
    { 
      text: 'Woolen Expo Form', 
      link: '/files/Expo form.pdf' 
    },
    { 
      text: 'Wool Innovation challenge', 
      link: 'https://www.startupindia.gov.in/content/sih/en/ams-application/challenge.html?applicationId=6756a60de4b0953e58b1b0cf' 
    },
    { 
      text: 'Corrigendum reg. Recruitment for the Post of Accountant & Administrative Officer.', 
      link: '/files/corrigendum_merged.pdf' 
    },
    { 
      text: 'RECRUITMENT FOR THE POST OF ACCOUNTANT AND ADMINISTRATIVE OFFICER', 
      link: '/files/CWDB recuirtment for Admin and accountant.pdf' 
    },
    { 
      text: 'Admission notice of new batch for training in weaving and designing at WDTC, Kullu, H.P', 
      link: '/files/SCAN_20250320_124121515.pdf' 
    },
    { 
      text: 'Samarth Scheme Form', 
      link: '/files/Samarathform.pdf' 
    },
    { 
      text: 'Vigilance Awareness Week', 
      link: 'https://pledge.mygov.in/cvc/' 
    },
    { 
      text: 'CWDB_Actionable Insights from the 93rd IWTO Congress and Collaborative Strategies with Australia', 
      link: '/files/CWDB_Actionable Insights from the 93rd IWTO Congress and Collaborative Strategies with Australia_06062024.pdf' 
    },
    { 
      text: 'Advertisement for the Post of Wool Marketing Development Officer (WMDO) on Deputation of CWDB', 
      link: '/files/BP-30M31_20250124_203246.pdf' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* News Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                {language === 'en' ? 'News' : 'समाचार'}
              </h2>
              <div className="max-h-[600px] overflow-y-auto pr-2">
                <ul className="space-y-3">
                  {newsItems.map((item, index) => (
                    <li 
                      key={index} 
                      className={`pb-3 last:border-b-0 ${
                        index < 3 
                          ? 'border-b-2 border-blue-500 bg-blue-50 p-3 rounded-md mb-3' 
                          : 'border-b pb-3'
                      }`}
                    >
                      <Link 
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`text-sm font-medium block ${
                          index < 3 
                            ? '' 
                            : 'text-blue-600 hover:text-blue-800'
                        }`}
                      >
                        {index < 3 ? (
                          <span className="rainbow-text font-semibold">
                            {item.text}
                          </span>
                        ) : (
                          item.text
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3">
            {/* Schemes Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                {language === 'en' ? 'Schemes' : 'योजनाएं'}
              </h2>
              
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b">
                {['wms', 'hrd', 'pwds', 'wps'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 font-medium transition-colors ${
                      activeTab === tab
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {activeTab && schemes[activeTab as keyof typeof schemes] && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-gray-800">
                        {schemes[activeTab as keyof typeof schemes].title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {schemes[activeTab as keyof typeof schemes].description}
          </p>
        </div>
              <div className="flex items-center justify-center">
                      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                          src={schemes[activeTab as keyof typeof schemes].image || '/images/placeholder.png'}
                          alt={schemes[activeTab as keyof typeof schemes].title}
                          width={400}
                          height={300}
                          className="object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = '<span class="text-gray-500">Image Placeholder</span>';
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Image Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { title: language === 'en' ? 'Pashmina Goats in Changthang area of Leh district' : 'लेह जिले के चांगथांग क्षेत्र में पश्मीना बकरियां', image: '/images/picture17cb7.jpg' },
                { title: language === 'en' ? 'Pashmina Nomad weaving Pashmina item' : 'पश्मीना खानाबदोश पश्मीना वस्तु बुन रहा है', image: '/images/picture25f69.jpg' },
                { title: language === 'en' ? 'Training at Weaving & Designing Training Centre, Kullu (HP)' : 'कुल्लू (HP) में बुनाई और डिजाइनिंग प्रशिक्षण केंद्र में प्रशिक्षण', image: '/images/picture356c8.jpg' },
                { title: language === 'en' ? 'Testing Equipment at Wool Testing Centre, Bikaner' : 'बीकानेर में ऊन परीक्षण केंद्र में परीक्षण उपकरण', image: '/images/picture437c4.jpg' },
              ].map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
            <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = '<span class="text-gray-500 text-sm">Image ' + (index + 1) + '</span>';
                        }
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-gray-800">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
