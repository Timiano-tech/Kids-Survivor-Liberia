import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import PhotoMosaic from '../components/visuals/PhotoMosaic';
import PhotoCards from '../components/visuals/PhotoCards';
import RuleList from '../components/visuals/RuleList';
import VideoCards from '../components/visuals/VideoCards';
import StatBand from '../components/visuals/StatBand';
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
    { value: 12000, suffix: '+', label: 'People Reached', description: 'Children, youth, widows, and vulnerable elderly.' },
    { value: 120, suffix: '+', label: 'Communities Engaged', description: 'Across 15 Liberian counties.' },
    { value: 10000, suffix: '+', label: 'Youth in Prevention', description: 'NADAP-aligned drug prevention work.' },
    { value: 8000, suffix: '+', label: 'In Rehabilitation', description: 'Recovery and reintegration support.' },
  ];

  const stories = [
    {
      name: 'John Howard',
      image: JohnHoward,
      meta: 'Lofa County · Rehabilitation',
      description: 'Reached in July 2025 after years on the streets. Now the sole survivor of his original group, rebuilding his life.',
    },
    {
      name: 'Franklin Mondor',
      image: Franklin_Mondor,
      meta: 'Nimba County · Rehabilitation',
      description: 'Thirteen years dealing drugs and opposing outreach. Transformed on 2 January 2026 and now seeking professional reintegration.',
    },
    {
      name: 'Samuel Meaway',
      image: Samuel_Meaway,
      meta: 'Nimba County · Rehabilitation',
      description: 'Spent a year in corrections before a KSL outreach offered him a way out. He is rebuilding his life with purpose.',
    },
    {
      name: 'Monrovia Slum Recovery',
      image: CommunityChildren,
      meta: 'Montserrado · Urban Intervention',
      description: 'Outreach in Clara Town and West Point reintegrated more than 150 young people through vocational training and care.',
    },
    {
      name: 'Free Medical Outreach',
      image: ChildrenImpact,
      meta: 'Grand Bassa · Child Protection',
      description: 'Community outreach meeting basic needs so children feel valued, protected, and able to grow.',
    },
    {
      name: 'Students Impacted',
      image: StudentsImpact,
      meta: 'Schools Nationwide · Prevention',
      description: 'Awareness sessions that leave students with knowledge, confidence, and a clear vision for their future.',
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

  const focusAreas = [
    { label: 'NADAP Implementation', note: 'Community-based delivery against national anti-drugs goals.' },
    { label: 'Multi-County Reach', note: 'Field presence across Liberia, active and planned.' },
    { label: 'Youth Transformation', note: 'Prevention, rehabilitation, and empowerment in one programme.' },
    { label: 'Community Resilience', note: 'Support systems designed to hold after we leave.' },
  ];

  const fieldPhotos = [
    { src: StudentsImpact, caption: 'School awareness sessions', meta: 'Prevention' },
    { src: Assembly, caption: 'Children at a KSL assembly', meta: 'Education' },
    { src: FieldMedical, caption: 'Free medical outreach', meta: 'Health' },
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
        eyebrow="Measurable Results"
        title="Twelve thousand lives, and counting"
        description="Prevention sessions, rehabilitation care, school places, and protection work delivered with communities across Liberia."
        image={StudentsImpact}
        meta={impactStats.map((stat) => ({ value: stat.value, suffix: stat.suffix, label: stat.label }))}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Lives Changed"
              title="Recovery, in their own words"
              description="Six stories from the counties where we work."
              className="mb-14"
            />
            <PhotoCards items={stories} columns="sm:grid-cols-2 lg:grid-cols-3" imageHeight="h-72" />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="On The Ground"
              title="What the work looks like"
              className="mb-14"
            />
            <PhotoMosaic photos={fieldPhotos} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              eyebrow="Impact In Action"
              title="Watch the short documentaries"
              description="Field footage from prevention, education, and nutrition programmes."
              className="mb-14"
            />

            <VideoCards items={videos} tone="dark" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Where We Focus"
              title="Four commitments behind the numbers"
              className="mb-14"
            />
            <RuleList items={focusAreas} columns="sm:grid-cols-2 lg:grid-cols-4" />

            <div className="mt-20 border-t border-slate-200 pt-14">
              <StatBand stats={impactStats} tone="light" divided />
            </div>
          </div>
        </section>
      </main>

      <CTABanner
        title="Every gift becomes a session, a school place, or a recovery"
        description="Join us in protecting children and young people across Liberia."
      />
    </>
  );
};

export default Impact;
