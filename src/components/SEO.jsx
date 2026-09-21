import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://ksliberia.org';
const SITE_NAME = 'Kids Survivor Liberia';
const DEFAULT_DESCRIPTION =
  'Kids Survivor Liberia (KSL) is a community-based non-profit protecting vulnerable children, preventing drug abuse, and empowering youth, widows, and elderly people across Liberia.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/KSL%20Logo.png`;

const SOCIAL_PROFILES = [
  'https://www.facebook.com/profile.php?id=61573527237699',
  'https://www.linkedin.com/company/kids-survivor-liberia/',
  'https://x.com/Kidssurvivor123',
  'https://instagram.com/kids_survivorliberia',
  'https://www.youtube.com/@Kidssurvivorliberia_1',
];

const DEFAULT_KEYWORDS = [
  'Kids Survivor Liberia',
  'KSL Liberia',
  'non-profit organization Liberia',
  'NGO in Liberia',
  'child protection Liberia',
  'vulnerable children Liberia',
  'youth development Liberia',
  'drug abuse prevention Liberia',
  'child welfare Monrovia',
  'orphan support Liberia',
  'Liberia charity for children',
  'childrens rights Liberia',
  'community development Liberia',
  'NADAP Liberia',
];

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['NGO', 'Organization'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['KSL', 'Kids Survivor Liberia (KSL)'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: DEFAULT_OG_IMAGE,
  },
  image: DEFAULT_OG_IMAGE,
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monrovia',
    addressRegion: 'Montserrado',
    addressCountry: 'LR',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+231887291599',
      contactType: 'customer service',
      email: 'support@ksliberia.org',
      availableLanguage: ['English'],
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Liberia',
  },
  knowsLanguage: ['en'],
  sameAs: SOCIAL_PROFILES,
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const toAbsoluteUrl = (value) => {
  if (!value) return SITE_URL;
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  const cleanPath = value.startsWith('/') ? value : `/${value}`;
  return `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
};

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  noindex = false,
  twitterHandle = '@KSLiberia_NGO',
  jsonLd,
  breadcrumbs,
  publishedTime,
  modifiedTime,
  author,
  articleSection,
  tags,
}) {
  const formattedTitle = title
    ? title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`
    : SITE_NAME;

  let canonicalUrl = toAbsoluteUrl(canonical);
  if (canonicalUrl.length > SITE_URL.length && canonicalUrl.endsWith('/')) {
    canonicalUrl = canonicalUrl.slice(0, -1);
  }

  const keywordList = Array.isArray(keywords)
    ? [...new Set([...keywords, ...DEFAULT_KEYWORDS])]
    : DEFAULT_KEYWORDS;

  const schemas = [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA];

  if (Array.isArray(jsonLd)) {
    schemas.push(...jsonLd);
  } else if (jsonLd) {
    schemas.push(jsonLd);
  }

  if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        ...breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name: crumb.name,
          item: toAbsoluteUrl(crumb.url),
        })),
      ],
    });
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordList.join(', ')} />
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="theme-color" content="#020617" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Indexing / Robots Policy */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Geo targeting */}
      <meta name="geo.region" content="LR" />
      <meta name="geo.placename" content="Monrovia" />

      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} — protecting Liberia's vulnerable children and youth`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {articleSection && <meta property="article:section" content={articleSection} />}
      {Array.isArray(tags) && tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — protecting Liberia's vulnerable children and youth`} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
}
