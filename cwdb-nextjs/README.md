# CWDB Next.js Website

A modern, bilingual (Hindi/English) website for Central Wool Development Board built with Next.js 16, React 19, and Tailwind CSS.

## Features

- ✅ **Bilingual Support**: Hindi and English language switching with persistent storage
- ✅ **Modern UI**: Clean, responsive design with Tailwind CSS
- ✅ **Next.js 16**: Latest Next.js with App Router
- ✅ **TypeScript**: Full type safety
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **All Original Content**: Preserved from the original HTML website

## Getting Started

1. **Install dependencies:**
   ```bash
   cd cwdb-nextjs
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
cwdb-nextjs/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with LanguageProvider
│   ├── page.tsx           # Home page
│   ├── schemes/           # Schemes page
│   └── about/             # About pages
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation
│   ├── LanguageSwitcher.tsx  # Language toggle
│   └── Footer.tsx         # Footer component
├── contexts/              # React contexts
│   └── LanguageContext.tsx  # Language state management
└── public/                # Static assets
```

## Pages

- `/` - Home page with schemes and news
- `/schemes` - All schemes overview
- `/about/cwdb` - About CWDB
- `/about/vision` - Vision and Mission
- `/about/wool` - Wool at a glance
- `/about/whoswho` - Who's Who
- `/about/orgchart` - Organization Chart
- `/about/board` - Board Members
- `/gallery/wool` - Wool Gallery
- `/gallery/events` - Other Events
- `/rules` - Rules and Regulations
- `/rti` - RTI Information
- `/contact` - Contact Us
- `/recruitment` - Recruitment

## Language Switching

The language switcher is available in the top navigation. The selected language is saved in localStorage and persists across page visits.

## Building for Production

```bash
npm run build
npm start
```

## Notes

- Images and PDF files from the original website should be copied to the `public/` directory
- The original content structure has been preserved
- All navigation items match the original website
- The design is modernized while maintaining functionality

## Technologies Used

- Next.js 16.1.4
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- ESLint
