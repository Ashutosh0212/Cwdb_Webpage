'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';

export default function Navigation() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { href: '/', label: t('nav.home') },
    {
      label: t('nav.about'),
      dropdown: [
        { href: '/about/cwdb', label: t('nav.about.cwdb') },
        { href: '/about/vision-mission', label: t('nav.about.vision') },
        { href: '/about/wool-at-a-glance', label: t('nav.about.wool') },
        { href: '/about/whos-who', label: t('nav.about.whoswho') },
        { href: '/about/organization-chart', label: t('nav.about.orgchart') },
        { href: '/about/board', label: t('nav.about.board') },
      ],
    },
    { href: '/schemes', label: t('nav.schemes') },
    {
      label: t('nav.gallery'),
      dropdown: [
        { href: '/gallery/wool', label: t('nav.gallery.wool') },
        { href: '/gallery/other-events', label: t('nav.gallery.events') },
      ],
    },
    { href: '/rules-regulations', label: t('nav.rules') },
    { href: '/rti', label: t('nav.rti') },
    {
      label: t('nav.others'),
      dropdown: [
        { href: '/others/oomf', label: t('nav.others.oomf') },
        { href: '/others/tender-notice', label: t('nav.others.tender') },
        { href: '/others/tenders-of-ia', label: t('nav.others.tenderia') },
      ],
    },
    { href: '/contact', label: t('nav.contact') },
    { href: '/recruitment', label: t('nav.recruitment') },
    { href: 'https://cwdbportal.in/', label: t('nav.dashboard'), external: true },
  ];

  return (
    <nav className="bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 flex-1 justify-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <span className="ml-1 text-xs">▼</span>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4 w-full justify-between">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 font-medium text-sm"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label} {openDropdown === item.label ? '▲' : '▼'}
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-medium text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
