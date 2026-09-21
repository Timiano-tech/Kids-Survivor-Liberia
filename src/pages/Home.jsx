import React, { useEffect } from 'react';
import SEO from '../components/SEO';

// Components
import HeroSection from '../components/home/HeroSection';
import QuickStats from '../components/home/QuickStats';
import DonorAppealSection from '../components/home/DonorAppealSection';
import ProgramPillarsSection from '../components/home/ProgramPillarsSection';
import NationalAlignmentSection from '../components/home/NationalAlignmentSection';
import Team from '../components/Teams';
import SuccessStoriesCTA from '../components/home/SuccessStoriesCTA';
import LatestNewsSection from '../components/home/LatestNewsSection';
import HomeFAQSection from '../components/home/HomeFAQSection';

const FAQ_PAGE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How is KSL aligned with Liberia's National Anti-Drugs Action Plan (NADAP)?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KSL implements NADAP 2025-2030 through national-based drug use prevention, early intervention, rehabilitation, and reintegration programs. Our work focuses on drug demand reduction, stigma reduction, and promoting public health approaches to substance abuse.',
      },
    },
    {
      '@type': 'Question',
      name: 'What populations does KSL specifically serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KSL focuses on vulnerable populations including children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men. Our interventions are inclusive, rights-based, and community-driven, addressing intersecting challenges of drug abuse, poverty, and gender vulnerability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does KSL contribute to the Youth Transformation & Empowerment Initiative (YTEI)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KSL advances YTEI priorities by strengthening youth leadership and civic engagement, expanding education and vocational pathways, supporting psychosocial well-being, and positioning young people as agents of change and community role models.',
      },
    },
    {
      '@type': 'Question',
      name: "What are KSL's core programmatic pillars?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our work is organized around five pillars: 1) Drug Abuse Prevention & Public Awareness, 2) Rehabilitation & Social Reintegration, 3) Education & Skills Development, 4) Gender, Protection & Social Inclusion, and 5) Community Engagement & Peacebuilding.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does KSL ensure community ownership of programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We implement community-driven interventions through partnerships with traditional leaders, local authorities, and civil society. Our programs emphasize volunteer training, community ownership, and social cohesion initiatives that contribute to crime reduction and peacebuilding.',
      },
    },
    {
      '@type': 'Question',
      name: "What cross-cutting themes guide KSL's work?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our programs integrate: Child & Youth Safeguarding, Gender Equality & Social Inclusion (GESI), Human Rights & Dignity, Community Ownership & Sustainability, and Accountability & Transparency.',
      },
    },
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
        description="Kids Survivor Liberia (KSL) is a registered non-profit protecting vulnerable children, preventing drug abuse, and empowering youth and communities across Liberia. Aligned with NADAP and YTEI national frameworks."
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
          'orphan support Liberia',
          'rehabilitation programs Liberia',
        ]}
        jsonLd={FAQ_PAGE_JSON_LD}
      />

      {/* Hero Carousel Section */}
      <HeroSection />

      {/* Quick Stats Section */}
      <QuickStats />

      {/* Donor Appeal — Why Your Support Matters */}
      <DonorAppealSection />

      {/* Mission, Vision & Program Pillars */}
      <ProgramPillarsSection />

      {/* National Alignment & Discover More */}
      <NationalAlignmentSection />

      {/* Meet Our Team Section */}
      <Team />

      {/* Success Stories CTA Section */}
      <SuccessStoriesCTA />

      {/* Latest News Section */}
      <LatestNewsSection />

      {/* FAQ Sections */}
      <HomeFAQSection />
    </div>
  );
};

export default Home;