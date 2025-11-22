# My Website
___________________
All the code of my personal website.
##### [_marcosfvilaboa.com_](marcosfvilaboa.com "go to my website")
#### Under construction!!!
News:
- Includes of SaSS folders for migration [with 7-1 pattern from Hugo Giraudel](http://www.sitepoint.com/architecture-sass-project/ "7-1 pattern from Hugo Giraudel in SitePoint").
- Modern development stack with automated SASS compilation and live-reload development server.

I'm using HTML5, CSS3, Bootstrap, SaSS, jQuery and JavaScript, **all from scratch**, because...
> ..._this is how I learn **Web Development**_

## Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server with live reload:**
   ```bash
   npm run dev
   ```
   This will compile your SASS files and start a local server at `http://localhost:3000` with automatic browser refresh when files change.

3. **Build CSS for production:**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm run dev` - Start development server with live reload and SASS watch mode
- `npm run build` - Compile SASS to CSS for production
- `npm run sass:watch` - Watch SASS files and recompile on changes
- `npm run sass:build` - Compile SASS to CSS once
- `npm run serve` - Start local development server with browser-sync

