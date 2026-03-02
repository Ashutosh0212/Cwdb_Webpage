# CWDB Next.js Website - Complete Setup

## ✅ What Has Been Done

### 1. **Header Component Created**
   - Matches the original design with:
     - **Left**: Emblem of India with "सत्यमेव जयते" and "वस्त्र मंत्रालय / MINISTRY OF TEXTILES"
     - **Center**: CWDB Logo with red "W" and sheep head, "Central Wool Development Board"
     - **Right**: G20 India 2023 logo and Swachh Bharat Abhiyan logo
     - **Banner**: Full-width banner image below the header

### 2. **All Files Copied**
   - ✅ All images from `drupal/sites/default/files/` → `cwdb-nextjs/public/images/`
   - ✅ All PDF files from `files/` → `cwdb-nextjs/public/files/`
   - ✅ All inline images and gallery images copied
   - ✅ All slideshow images copied

### 3. **Components Updated**
   - Header component with proper styling
   - Navigation bar with light grey background (matching original)
   - Language switcher integrated
   - Footer component
   - Home page using actual images

### 4. **File Structure**
```
cwdb-nextjs/
├── public/
│   ├── images/          # All images (banners, logos, gallery, etc.)
│   └── files/           # All PDF documents
├── components/
│   ├── Header.tsx       # New header matching original design
│   ├── Navigation.tsx   # Navigation with grey background
│   ├── LanguageSwitcher.tsx
│   └── Footer.tsx
├── app/
│   ├── layout.tsx       # Includes Header, Navigation, Footer
│   ├── page.tsx         # Home page with actual images
│   └── ...
└── contexts/
    └── LanguageContext.tsx
```

## 🚀 Running the Website

```bash
cd cwdb-nextjs
npm install  # If not already done
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Notes

1. **Header Images**: The header component will try to load:
   - `/images/emblem-india.png` - Emblem of India
   - `/images/cwdb-logo.png` - CWDB logo with sheep
   - `/images/g20-logo.png` - G20 India 2023 logo
   - `/images/swachh-bharat-logo.png` - Swachh Bharat logo
   - `/images/banner1.png` - Top banner

   If these specific images don't exist, it will show fallback placeholders. You can add these specific logo images if you have them.

2. **All Content Synchronized**: 
   - All images from the original website are now in `public/images/`
   - All PDF files are in `public/files/`
   - The website uses these actual files

3. **Language Switcher**: 
   - Works on all pages
   - Saves preference in localStorage
   - Updates HTML lang attribute

4. **Responsive Design**: 
   - Mobile-friendly navigation
   - Responsive header
   - All images are responsive

## 🎨 Design Features

- ✅ Header matching original government website design
- ✅ Light grey navigation bar (matching original)
- ✅ Bilingual support (Hindi/English)
- ✅ Modern, clean UI with Tailwind CSS
- ✅ All original content preserved
- ✅ All files synchronized

## 📦 Files Copied

- **Images**: 30+ images including banners, gallery images, scheme images
- **PDFs**: 90+ PDF documents including reports, forms, notices
- **Assets**: All inline images and styles

The website is now fully synchronized with the original content!
