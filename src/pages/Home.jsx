import React, { useEffect } from 'react';

// Components
import HeroSection from '../components/home/HeroSection';
import QuickStats from '../components/home/QuickStats';
import ProgramPillarsSection from '../components/home/ProgramPillarsSection';
import NationalAlignmentSection from '../components/home/NationalAlignmentSection';
import Team from '../components/Teams';
import SuccessStoriesCTA from '../components/home/SuccessStoriesCTA';
import LatestNewsSection from '../components/home/LatestNewsSection';
import HomeFAQSection from '../components/home/HomeFAQSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Carousel Section */}
      <HeroSection />

      {/* Quick Stats Section */}
      <QuickStats />

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