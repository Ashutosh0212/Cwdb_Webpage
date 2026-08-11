'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type VideoLang = 'en' | 'hi' | 'both';
type Filter = 'all' | 'en' | 'hi';

interface SuccessStoryVideo {
  id: string;
  titleEn: string;
  titleHi: string;
  lang: VideoLang;
}

const videos: SuccessStoryVideo[] = [
  {
    id: '1Oe8ZoRDojQEZOdpiefod7aTLxS_z0TyG',
    titleEn: 'Bikaner Chokla Wool CWDB (English)',
    titleHi: 'बीकानेर चोकला ऊन CWDB (अंग्रेज़ी)',
    lang: 'en',
  },
  {
    id: '14WW90NjuAaQEipV9IwYpb02qQFhZemH1',
    titleEn: 'Bikaner Chokla Wool CWDB (Hindi)',
    titleHi: 'बीकानेर चोकला ऊन CWDB (हिंदी)',
    lang: 'hi',
  },
  {
    id: '1Yl81WH3bFB0ND_Q7GlK_mKQ990GhzlJI',
    titleEn: 'CWDB Industrial Product Display',
    titleHi: 'CWDB औद्योगिक उत्पाद प्रदर्शन',
    lang: 'both',
  },
  {
    id: '1SSg6adUoPVK8IqTOw-JkSiop66Yvu44y',
    titleEn: 'Kashmir Pashmina Shawl (English)',
    titleHi: 'कश्मीर पश्मीना शॉल (अंग्रेज़ी)',
    lang: 'en',
  },
  {
    id: '1b89Lh0fUASIcwXiQsahYBJs2H0goFW9m',
    titleEn: 'Kashmir Pashmina Shawl (Hindi)',
    titleHi: 'कश्मीर पश्मीना शॉल (हिंदी)',
    lang: 'hi',
  },
  {
    id: '1LHhifMIrcgYNcTvX1qTCOtGV4xcUO1d9',
    titleEn: 'Kullu Shawl (English)',
    titleHi: 'कुल्लू शॉल (अंग्रेज़ी)',
    lang: 'en',
  },
  {
    id: '1m4i23dtHk_i5E4kmRDvNVrFRS2u0vVFo',
    titleEn: 'Kullu Shawl (Hindi)',
    titleHi: 'कुल्लू शॉल (हिंदी)',
    lang: 'hi',
  },
  {
    id: '1Xs7o72xrlgkboLUbnFCL5xvPwmmnIjMV',
    titleEn: 'Kutch Video (English)',
    titleHi: 'कच्छ वीडियो (अंग्रेज़ी)',
    lang: 'en',
  },
  {
    id: '11VcFvAf2mlZ6wh5iLqLJiHNfFixX0D2g',
    titleEn: 'Kutch Video (Hindi)',
    titleHi: 'कच्छ वीडियो (हिंदी)',
    lang: 'hi',
  },
  {
    id: '1-9_joNfmkZVpc26O77s_yp-pDg9r8iQO',
    titleEn: 'Leh Thermal Insulation Magra',
    titleHi: 'लेह थर्मल इंसुलेशन मगरा',
    lang: 'both',
  },
  {
    id: '1SdVKX2tQLEMF6v1sG8LV26_46J_w1Sqm',
    titleEn: 'Pashmina Wool',
    titleHi: 'पश्मीना ऊन',
    lang: 'both',
  },
];

export default function WoolSuccessStoriesPage() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<Filter>('hi');

  const filteredVideos = useMemo(() => {
    if (filter === 'all') return videos;
    return videos.filter((video) => video.lang === filter || video.lang === 'both');
  }, [filter]);

  const filters: { key: Filter; labelEn: string; labelHi: string }[] = [
    { key: 'hi', labelEn: 'Hindi', labelHi: 'हिंदी' },
    { key: 'en', labelEn: 'English', labelHi: 'अंग्रेज़ी' },
    { key: 'all', labelEn: 'All', labelHi: 'सभी' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {language === 'en' ? 'Wool Success Stories' : 'ऊन सफलता की कहानियाँ'}
        </h1>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === item.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {language === 'en' ? item.labelEn : item.labelHi}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://drive.google.com/file/d/${video.id}/preview?autoplay=1`}
                  title={language === 'en' ? video.titleEn : video.titleHi}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-center text-gray-800">
                  {language === 'en' ? video.titleEn : video.titleHi}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
