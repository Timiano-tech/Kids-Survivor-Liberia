import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import PhotoMosaic from '../components/visuals/PhotoMosaic';
import PhotoCards from '../components/visuals/PhotoCards';
import VideoCards from '../components/visuals/VideoCards';
import StudentsImpact from '../assets/Students Impacted.jpeg';
import Assembly from '../assets/Children on the assembly.jpeg';
import FieldMedical from '../assets/Free_Medicals9.jpeg';
import JohnHoward from '../assets/Success_Story.jpeg';
import Franklin_Mondor from '../assets/Success_story2.jpeg';
import Samuel_Meaway from '../assets/Success_Story3.jpeg';
import ChildrenImpact from '../assets/ChildrenImpact.jpg';
import CommunityChildren from '../assets/Community_Children.jpeg';
import Education from '../assets/Education.jpg';
import SayNoToDrugs from '../assets/Say no to drugs.jpeg';
import Sharing_Food from '../assets/Sharing_Food.jpg';

const Impact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const impactStats = [
    { value: 12000, suffix: '+', label: 'People Reached' },
    { value: 120, suffix: '+', label: 'Communities Engaged' },
    { value: 10000, suffix: '+', label: 'Youth in Prevention' },
    { value: 8000, suffix: '+', label: 'In Rehabilitation' },
  ];

  const stories = [
    {
      title: 'John Howard',
      image: JohnHoward,
      meta: 'Lofa County · Rehabilitation',
      description: 'Reached in July 2025 after years on the streets. He is the only survivor of his original group and is now rebuilding his life.',
    },
    {
      title: 'Franklin Mondor',
      image: Franklin_Mondor,
      meta: 'Nimba County · Rehabilitation',
      description: 'After thirteen years dealing drugs and resisting outreach, he joined the programme on 2 January 2026 and is now working towards reintegration.',
    },
    {
      title: 'Samuel Meaway',
      image: Samuel_Meaway,
      meta: 'Nimba County · Rehabilitation',
      description: 'Spent a year in corrections before joining KSL through an outreach session. He is now rebuilding his life.',
    },
    {
      title: 'Clara Town & West Point Outreach',
      image: CommunityChildren,
      meta: 'Montserrado County · Outreach',
      description: 'Outreach in Clara Town and West Point reintegrated more than 150 young people through vocational training and care.',
    },
    {
      title: 'Free Medical Outreach',
      image: ChildrenImpact,
      meta: 'Grand Bassa County · Child Protection',
      description: 'Community outreach providing free medical care and basic needs for children.',
    },
    {
      title: 'School Awareness Sessions',
      image: StudentsImpact,
      meta: 'Schools Nationwide · Prevention',
      description: 'Drug awareness sessions held with students in schools.',
    },
  ];

  const videos = [
    {
      title: 'Education Sponsorship',
      meta: 'Education · 0:26',
      poster: Education,
      videoSrc: '/videos/Children_Sponsor..mp4',
      description: 'Girls and children sponsored for free education.',
    },
    {
      title: 'Say No To Drugs',
      meta: 'Prevention · 0:38',
      poster: SayNoToDrugs,
      videoSrc: '/videos/StudentsImpact.mp4',
      description: 'Students learning what drug abuse costs them.',
    },
    {
      title: 'Community Nutrition',
      meta: 'Nutrition · 0:38',
      poster: Sharing_Food,
      videoSrc: '/videos/Sharing_food_To_Children.mp4',
      description: 'Meals shared with children who need them most.',
    },
  ];

  const fieldPhotos = [
    { src: StudentsImpact, caption: 'School awareness sessions' },
    { src: Assembly, caption: 'Children at a KSL assembly' },
    { src: FieldMedical, caption: 'Free medical outreach' },
  ];

  return (
    <>
      <SEO
        title="Our Impact — Kids Survivor Liberia Results & Numbers"
        description="See Kids Survivor Liberia's measurable impact: 13,000+ children reached, 12,500+ drug sessions, 3,000+ households engaged across 15 Liberian counties. Real results, real lives changed."
        canonical="/impact"
        keywords={[
          'KSL impact Liberia',
          'child protection impact numbers',
          'Liberia youth statistics',
          'NADAP results Liberia',
          'drug prevention reach Liberia',
          'community impact KSL',
          'NGO outcomes Liberia',
          'measurable impact Liberia children',
        ]}
        breadcrumbs={[{ name: 'Our Impact', url: '/impact' }]}
      />

      <PageHeader
        title="Our Impact"
        description="Drug prevention, rehabilitation, education, and child protection work carried out with communities across Liberia."
        image={StudentsImpact}
        meta={impactStats}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Stories of change"
              description="Some of the people and communities we have worked with."
              className="mb-14"
            />
            <PhotoCards items={stories} columns="sm:grid-cols-2 lg:grid-cols-3" imageHeight="h-72" />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="In the field"
              className="mb-14"
            />
            <PhotoMosaic photos={fieldPhotos} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              title="Videos"
              description="Short videos from our prevention, education, and nutrition work."
              className="mb-14"
            />

            <VideoCards items={videos} tone="dark" />
          </div>
        </section>
      </main>

      <CTABanner
        title="Support our work"
        description="Your gift helps us protect and support children and young people across Liberia."
      />
    </>
  );
};

export default Impact;
