import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://ksliberia.org';
const DEFAULT_BRAND = 'Kids Survivor Liberia';
const DEFAULT_DESCRIPTION = 'Kids Survivor Liberia (KSL) is a registered non-profit working across Liberia to protect vulnerable children, advance youth development, and safeguard children’s rights.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/KSL%20Logo.png`;

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  noindex = false,
  twitterHandle = '@KSLiberia_NGO',
}) {
  // Construct formatted title under 60 chars where possible
  const formattedTitle = title
    ? (title.includes(DEFAULT_BRAND) ? title : `${title} | ${DEFAULT_BRAND}`)
    : DEFAULT_BRAND;

  // Construct canonical URL cleanly
  let canonicalUrl = SITE_URL;
  if (canonical) {
    if (canonical.startsWith('http://') || canonical.startsWith('https://')) {
      canonicalUrl = canonical;
    } else {
      const cleanPath = canonical.startsWith('/') ? canonical : `/${canonical}`;
      canonicalUrl = `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
    }
  }

  // Remove trailing slash except root
  if (canonicalUrl.length > SITE_URL.length && canonicalUrl.endsWith('/')) {
    canonicalUrl = canonicalUrl.slice(0, -1);
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Indexing / Robots Policy */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={DEFAULT_BRAND} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
    </Helmet>
  );
}
