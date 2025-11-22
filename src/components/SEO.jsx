import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const defaultTitle = 'Personal Website | Marcos F. Vilaboa';
  const defaultDescription = 'Resume curriculum personal - Almost IT engineer. Geek or nerd (both fit). Always learning and trying to improve myself.';
  const defaultKeywords = 'Marcos F. Vilaboa, personal website, portfolio, web developer, IT engineer';

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;
