/**
 * Application-wide configuration constants.
 * Centralising literals here satisfies the Open/Closed Principle:
 * behaviour can be changed by editing this file without touching components.
 */

export const SITE = {
  title: 'Personal Website | Marcos F. Vilaboa',
  description:
    'Resume curriculum personal – Almost IT engineer. Geek or nerd (both fit). Always learning and trying to improve myself.',
  keywords:
    'Marcos F. Vilaboa, personal website, portfolio, web developer, IT engineer',
  author: 'Marcos F. Vilaboa',
};

export const NAV_LINKS = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About Me', sectionId: 'aboutMe' },
  { label: 'Contact', sectionId: 'contact' },
  { label: 'Blog', sectionId: null },
];

export const LANGUAGES = ['English', 'Spanish', 'Catalan'];

export const SCROLL_SHRINK_THRESHOLD = 50; // px

export const TYPEWRITER_INITIAL_DELAY_MS = 1200;
export const TYPEWRITER_MIN_DELAY_MS = 60;
export const TYPEWRITER_MAX_DELAY_MS = 300;

/** Framer Motion variant presets – reused across pages (DRY / SRP). */
export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const SLIDE_DOWN = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay: 0.2, duration: 0.8 },
};

export const SLIDE_UP = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay: 0.5, duration: 0.8 },
};

export const SLIDE_RIGHT = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { delay: 0.8, duration: 0.8 },
};

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const STAGGER_ITEM = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};
