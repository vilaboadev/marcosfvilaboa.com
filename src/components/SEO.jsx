import { Helmet } from 'react-helmet-async';
import { SITE } from '../constants';

/**
 * Injects page-level SEO meta tags.
 * Falls back to the global SITE defaults for any omitted prop.
 *
 * Open/Closed: add new meta tags here without changing callers.
 */
const SEO = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title ?? SITE.title}</title>
    <meta name="description" content={description ?? SITE.description} />
    <meta name="keywords" content={keywords ?? SITE.keywords} />
    <meta property="og:title" content={title ?? SITE.title} />
    <meta property="og:description" content={description ?? SITE.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title ?? SITE.title} />
    <meta name="twitter:description" content={description ?? SITE.description} />
  </Helmet>
);

export default SEO;
