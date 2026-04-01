/**
 * Static data for the three home-section cards.
 * Keeping data separate from view components follows the
 * Single Responsibility Principle and makes future content edits trivial.
 */
export const HOME_CARDS = [
  {
    id: 'homeAbout',
    imageSrc: '/images/desktop.jpg',
    imageAlt: 'My desktop',
    heading: 'ABOUT ME',
    bodyText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkHref: '#aboutMe',
    linkLabel: 'ABOUT ME >>',
  },
  {
    id: 'homeContact',
    imageSrc: '/images/table.jpg',
    imageAlt: 'My work table',
    heading: 'CONTACT',
    bodyText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkHref: '#contact',
    linkLabel: 'CONTACT ME >>',
  },
  {
    id: 'homeBlog',
    imageSrc: '/images/coworkers.jpg',
    imageAlt: 'Co-working',
    heading: 'BLOG',
    bodyText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkHref: '#',
    linkLabel: 'BLOG >>',
  },
];
