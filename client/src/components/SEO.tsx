/**
 * Per-page SEO meta component using react-helmet-async.
 * Every page should render <SEO ... /> as its first element.
 */
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  /** Path relative to root, e.g. "/give" */
  path: string;
  /** URL for og:image (full URL or absolute path) */
  image?: string;
}

const SITE_NAME = "Global Reformation Mission";
const SITE_URL = "https://globalreformation.org";
const DEFAULT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663285988803/3ZUpWVbQs8K7BH2BqZvsuF/grm_hero_cartographic_sanctuary-EuZ89gXaUWMkRGFHAs3qcH.webp";

export default function SEO({ title, description, path, image }: SEOProps) {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
