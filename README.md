# My Website ⚛️
___________________
All the code of my personal website - **fully modernized with React!**

##### [_marcosfvilaboa.com_](https://marcosfvilaboa.com "go to my website")

## 🚀 Modern Tech Stack

This website has been **completely rebuilt with cutting-edge technologies**:

### Core Technologies
- **React 19** - Latest version with modern hooks and features
- **Vite 7** - Lightning-fast build tool with Hot Module Replacement
- **React Router 7** - Seamless client-side navigation
- **Bootstrap 5** - Modern responsive CSS framework
- **Framer Motion** - Professional animations and transitions
- **React Helmet Async** - SEO and meta tag management

### Development Features
- ⚡ **Hot Module Replacement (HMR)** - Instant updates during development
- 📦 **Code Splitting** - Automatic lazy loading for optimal performance
- 🎨 **Smooth Animations** - Scroll-triggered and viewport-based animations
- 🔍 **SEO Optimized** - Dynamic meta tags and Open Graph support
- ♿ **Accessible** - WCAG compliant with ARIA attributes
- 🛡️ **Error Boundaries** - Graceful error handling
- 📱 **Fully Responsive** - Mobile-first design with modern CSS

### Previous Stack
The original version was built with vanilla HTML5, CSS3, jQuery, and Bootstrap 3, **all from scratch**, because...
> ..._this is how I learn **Web Development**_

Now modernized to industry-standard React architecture! 🎉

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher)
- npm (comes with Node.js)

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies (with legacy peer deps for React 19 compatibility)
npm install --legacy-peer-deps
```

### Development

```bash
# Start development server with HMR
npm run dev
```

The development server will start at **http://localhost:5173/** with instant hot-reload!

### Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint to check code quality
npm run lint
```

## 📂 Project Structure

```
marcosfvilaboa.com/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ErrorBoundary.jsx   # Error handling boundary
│   │   ├── Navbar.jsx          # Responsive navigation
│   │   ├── SEO.jsx             # SEO meta tag management
│   │   └── TypeWriter.jsx      # Typewriter animation effect
│   ├── pages/               # Page components (lazy loaded)
│   │   ├── StartPage.jsx       # Landing page with intro
│   │   └── MainPage.jsx        # Main content sections
│   ├── App.jsx              # Main app with routing & providers
│   ├── main.jsx             # Application entry point
│   ├── style.css            # Original custom styles
│   └── responsive.css       # Modern responsive utilities
├── public/                  # Static assets
├── dist/                    # Production build output
└── package.json            # Dependencies and scripts
```

## ✨ Features

### Performance
- ⚡ **Lightning-fast builds** with Vite
- 🔥 **Hot Module Replacement** for instant updates
- 📦 **Code splitting** - Pages loaded on demand
- 🗜️ **Optimized bundles** - ~79KB gzipped JS, ~33KB gzipped CSS
- 🎯 **Tree-shaking** - Removes unused code

### User Experience
- 🎨 **Smooth animations** using Framer Motion
- 📱 **Fully responsive** design (mobile-first)
- ✨ **Scroll-triggered** animations
- 🧭 **Client-side routing** - No page reloads
- ⌨️ **Keyboard navigation** support

### Developer Experience
- 🛠️ **Modern tooling** - Vite, ESLint, React DevTools
- 🏗️ **Component-based** architecture
- 🔍 **TypeScript-ready** structure
- 🧪 **Easy to test** modular components
- 📝 **Well-documented** codebase

### SEO & Accessibility
- 🔍 **SEO optimized** - Meta tags, Open Graph, Twitter Cards
- ♿ **WCAG compliant** - ARIA attributes, focus management
- 🌐 **Social sharing** ready
- 🎯 **Semantic HTML** structure

### Reliability
- 🛡️ **Error boundaries** - Graceful error handling
- 🔒 **Security** - Zero vulnerabilities (CodeQL verified)
- ✅ **Quality checks** - ESLint passing
- 🧪 **Production ready**

## 🎯 Build Output

Optimized production build with code splitting:

```
dist/index.html                    0.83 kB │ gzip:   0.42 kB
dist/assets/index-*.css          241.16 kB │ gzip:  32.98 kB
dist/assets/StartPage-*.js         1.35 kB │ gzip:   0.68 kB  ← Lazy loaded
dist/assets/MainPage-*.js          5.55 kB │ gzip:   1.65 kB  ← Lazy loaded
dist/assets/SEO-*.js             112.84 kB │ gzip:  37.14 kB
dist/assets/index-*.js           243.47 kB │ gzip:  78.89 kB
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server at localhost:5173 |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🔧 Technologies Used

### Frontend
- React 19.2.0
- React Router DOM 7.9.6
- Bootstrap 5.3.3
- Framer Motion 12.23.24
- React Helmet Async 3.0.0

### Build Tools
- Vite 7.2.4
- ESLint 9.39.1
- @vitejs/plugin-react 5.1.1

### Development
- Hot Module Replacement (HMR)
- Code splitting & lazy loading
- Tree-shaking
- CSS custom properties

## 🎨 Design Highlights

- **Modern animations** with Framer Motion
- **Responsive design** with mobile-first approach
- **Custom CSS** with Grid & Flexbox
- **Smooth transitions** and micro-interactions
- **Accessible focus styles** for keyboard navigation

## 🚀 Future Enhancements

- [ ] Add blog functionality
- [ ] Implement contact form
- [ ] Add portfolio projects section
- [ ] Dark mode support
- [ ] Internationalization (i18n)
- [ ] Progressive Web App (PWA) features

## 📄 License

GPL-3.0 - See LICENSE file for details

---

Built with ❤️ using React and modern web technologies
