import React, { useEffect } from 'react';
import SEO from '../components/SEO';

// Components
import HeroSection from '../components/home/HeroSection';
import QuickStats from '../components/home/QuickStats';
import AboutSection from '../components/home/AboutSection';
import ProgramGridSection from '../components/home/ProgramGridSection';
import { WhereWeWorkSection, GetInvolvedSection } from '../components/home/EngagementSections';
import LatestNewsSection from '../components/home/LatestNewsSection';

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Kids Survivor Liberia',
  alternateName: 'KSL',
  url: '/',
  description:
    'A Liberian non-profit focused on drug abuse prevention, child protection, education, and rehabilitation for vulnerable populations.',
  areaServed: { '@type': 'Country', name: 'Liberia' },
  knowsAbout: [
    'Drug abuse prevention',
    'Child protection',
    'Youth development',
    'Rehabilitation',
    'Community engagement',
  ],
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <SEO
        title="Kids Survivor Liberia — Protecting Vulnerable Children & Youth"
        description="Kids Survivor Liberia (KSL) is a community-based non-profit protecting vulnerable children, preventing drug abuse, and empowering youth and communities across Liberia. Aligned with NADAP and YTEI national frameworks."
        canonical="/"
        keywords={[
          'Kids Survivor Liberia',
          'KSL Liberia',
          'child protection Liberia',
          'vulnerable children Liberia',
          'youth development Liberia',
          'drug abuse prevention Liberia',
          'non-profit organization Liberia',
          'NGO in Liberia',
          'community development Liberia',
          'NADAP Liberia',
          'YTEI Liberia',
          'child welfare Monrovia',
          'rehabilitation programs Liberia',
        ]}
        jsonLd={ORGANIZATION_JSON_LD}
      />

      <HeroSection />
      <QuickStats />
      <AboutSection />
      <ProgramGridSection />
      <WhereWeWorkSection />
      <GetInvolvedSection />
      <LatestNewsSection />
    </div>
  );
};

export default Home;
