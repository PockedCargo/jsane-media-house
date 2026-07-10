# Jsane Media House - Modern Cybersecurity Website

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Modern web browser

### Installation

1. Install dependencies:
```bash
yarn install
# or
npm install
```

2. Start development server:
```bash
yarn start
# or
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── public/
│   └── index.html          # Main HTML file with Spline viewer script
├── src/
│   ├── App.js              # Main React component (all sections)
│   ├── App.css             # Cyber-tech styling
│   └── index.css           # Tailwind base styles
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Features

- **Multiple 3D Spline Elements** throughout the site
- **Cyber-tech aesthetic** with dark theme + red accents
- **Fully responsive** design
- **Smooth animations** with Framer Motion
- **Portfolio gallery** with lightbox and filters
- **Video reels** section
- **Contact form** with Formspree integration
- **WhatsApp integration**

## 🎮 Spline 3D Integration

The website uses multiple instances of your Spline 3D element:
- Fixed background layer
- Hero section centerpiece
- Floating interactive widget
- Section backgrounds

The Spline file URL is currently set to the uploaded asset. You can replace it with your own Spline URL in `App.js`:

```javascript
const SPLINE_URL = "YOUR_SPLINE_URL_HERE";
```

## 🎨 Customization

### Colors
Edit CSS variables in `App.css`:
```css
:root {
  --dark: #0a0a0a;
  --red: #ef4444;
  --red-light: #fca5a5;
  --red-dark: #dc2626;
  /* ... */
}
```

### Content
All content is in `App.js`:
- Services data
- Photos array
- Videos array
- Contact information

### Fonts
The site uses:
- **Orbitron** - For tech headings
- **Inter** - For body text

Both are loaded via Google Fonts in `public/index.html`

## 📧 Contact Form

The contact form uses Formspree. To use your own:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the endpoint in `App.js`:
```javascript
await fetch("YOUR_FORMSPREE_ENDPOINT", {
  // ...
})
```

## 📱 Sections

1. **Hero** - With 3D background and animated text
2. **Marquee Strip** - Scrolling services
3. **Services** - 4 service cards
4. **About Strip** - Mission statement
5. **Portfolio** - Photo gallery with filters
6. **Stats** - Animated counters
7. **Videos** - YouTube embeds
8. **Contact** - Form and info
9. **Footer** - Links and copyright

## 🔧 Build for Production

```bash
yarn build
# or
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📦 Dependencies

Key packages:
- `react` & `react-dom` - v19.0.0
- `framer-motion` - Animations
- `lucide-react` - Icons
- `tailwindcss` - Styling
- `@splinetool/viewer` - 3D integration (via CDN)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- Spline viewer is loaded via CDN in `public/index.html`
- All images use absolute URLs to the uploaded assets
- WhatsApp button links to +254 708 751 365
- Training certificate verification link included

## 🎯 Performance Tips

- Images are lazy-loaded
- Spline elements have optimized opacity for performance
- Animations use GPU-accelerated transforms

---

Built with ❤️ for Jsane Media House
