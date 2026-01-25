'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.about.cwdb': 'CWDB',
    'nav.about.vision': 'Vision and Mission',
    'nav.about.wool': 'Wool at a glance',
    'nav.about.whoswho': "Who's Who",
    'nav.about.orgchart': 'Organization Chart',
    'nav.about.board': 'Board Members',
    'nav.schemes': 'Schemes',
    'nav.gallery': 'Gallery',
    'nav.gallery.wool': 'Wool',
    'nav.gallery.events': 'Other events',
    'nav.rules': 'Rules and regulations',
    'nav.rti': 'RTI',
    'nav.others': 'Others',
    'nav.others.oomf': 'O.O.M.F.',
    'nav.others.tender': 'Tender Notice',
    'nav.others.tenderia': 'Tenders of IA',
    'nav.contact': 'Contact Us',
    'nav.recruitment': 'Recruitment',
    'nav.dashboard': 'Dashboard',
    
    // Common
    'common.readMore': 'Read More',
    'common.download': 'Download',
    'common.view': 'View',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.about.cwdb': 'CWDB',
    'nav.about.vision': 'दृष्टि और मिशन',
    'nav.about.wool': 'ऊन एक नजर में',
    'nav.about.whoswho': 'कौन कौन है',
    'nav.about.orgchart': 'संगठन चार्ट',
    'nav.about.board': 'बोर्ड सदस्य',
    'nav.schemes': 'योजनाएं',
    'nav.gallery': 'गैलरी',
    'nav.gallery.wool': 'ऊन',
    'nav.gallery.events': 'अन्य कार्यक्रम',
    'nav.rules': 'नियम और विनियम',
    'nav.rti': 'RTI',
    'nav.others': 'अन्य',
    'nav.others.oomf': 'O.O.M.F.',
    'nav.others.tender': 'टेंडर नोटिस',
    'nav.others.tenderia': 'IA के टेंडर',
    'nav.contact': 'संपर्क करें',
    'nav.recruitment': 'भर्ती',
    'nav.dashboard': 'डैशबोर्ड',
    
    // Common
    'common.readMore': 'और पढ़ें',
    'common.download': 'डाउनलोड',
    'common.view': 'देखें',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('selectedLanguage') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'hi')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
