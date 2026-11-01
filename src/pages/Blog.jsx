import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import PhotoCards from '../components/visuals/PhotoCards';
import VideoCards from '../components/visuals/VideoCards';
import NoToDrugs from '../assets/Say no to drugs.jpeg';
import HeaderImage from '../assets/Team_discussion2.jpeg';
import CampaignImage from '../assets/Campaign3.jpeg';
import MedicalImage from '../assets/Free_Medicals9.jpeg';
import KSL_School_Img from '../assets/KSL_School.jpeg';
import StudentsLatest from '../assets/Students_Latest.jpeg';
import StudentsImpact from '../assets/Students Impacted.jpeg';
import OutreachImage from '../assets/Youth_Community_Outreach.jpeg';
import ChildrenImage from '../assets/Helping Children.jpeg';
import Thumbnail from '../assets/Campaign_Thumbnail.png';
import Thumbnail2 from '../assets/Thumbnail2.png';
import SuccessStoryThumb from '../assets/Success_Story.jpeg';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const articles = [
    {
      title: 'Awareness Campaign in Gbarnga',
      image: CampaignImage,
      meta: 'Community Outreach · Apr 15, 2026',
      description: 'Town hall meetings and school workshops held across Bong County.',
    },
    {
      title: 'Free Medical Outreach in Buchanan',
      image: MedicalImage,
      meta: 'Health & Wellbeing · Apr 15, 2026',
      description: '175 at-risk young people received free medical care, together with our local partners.',
    },
    {
      title: 'KSL Primary & Elementary School',
      image: KSL_School_Img,
      meta: 'Education · Apr 04, 2026',
      description: 'Free learning in Wee Statutory District for children who cannot pay fees.',
    },
    {
      title: 'Protecting Your Future: Drug Risks',
      image: StudentsLatest,
      meta: 'Prevention · Jan 19, 2026',
      description: 'Helping students understand the health and social risks of drug use.',
    },
    {
      title: 'A Look At Our School Programme',
      image: StudentsImpact,
      meta: 'Education · Jan 19, 2026',
      description: 'How sponsorship helps children stay in school.',
    },
    {
      title: 'Youth-Led Community Outreach',
      image: OutreachImage,
      meta: 'Community · Jan 19, 2026',
      description: 'Young people leading outreach activities in their own communities.',
    },
    {
      title: "Supporting Children's Wellbeing",
      image: ChildrenImage,
      meta: 'Health · Jan 19, 2026',
      description: 'Care and protection for vulnerable children.',
    },
  ];

  const videos = [
    {
      title: 'The Risks of Drug Abuse',
      meta: 'Prevention · 0:52',
      poster: NoToDrugs,
      videoSrc: '/videos/KSL_video.mp4',
      description: 'Students learn about the health and social effects of drug use.',
    },
    {
      title: 'Youth Outreach: A Success Story',
      meta: 'Story · 2:27',
      poster: SuccessStoryThumb,
      videoSrc: '/videos/Succes_story.mp4',
      description: 'A success story from our youth outreach work.',
    },
    {
      title: 'Say No To Drugs',
      meta: 'Campaign · 0:51',
      poster: Thumbnail,
      videoSrc: '/videos/Blog_Video_4.mp4',
      description: 'Highlights from the school and community campaign.',
    },
    {
      title: 'Sensitization Drive 2026',
      meta: 'Campaign · 2:16',
      poster: Thumbnail2,
      videoSrc: '/videos/Blog_Video_5.mp4',
      description: 'Highlights from our 2026 awareness activities.',
    },
  ];

  return (
    <>
      <SEO
        title="KSL News & Articles — Stories of Hope in Liberia"
        description="Stay updated with news, articles, and video stories on Kids Survivor Liberia drug abuse prevention, community outreach, and youth empowerment campaigns across Liberia."
        canonical="/blog"
        keywords={[
          'Kids Survivor Liberia news',
          'KSL blog',
          'Liberia youth news',
          'drug prevention news Liberia',
          'community outreach stories Liberia',
          'Gbarnga outreach KSL',
          'Buchanan medical outreach',
          'Liberia NGO blog',
          'child protection news Liberia',
        ]}
        breadcrumbs={[{ name: 'Blog & Media', url: '/blog' }]}
      />

      <PageHeader
        title="News and Stories"
        description="Updates, videos, and stories from our programmes and communities across Liberia."
        image={HeaderImage}
      />

      <main>
        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              title="Videos"
              className="mb-14"
            />
            <VideoCards items={videos} tone="dark" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Latest News"
              description="Reports from our county and programme teams."
              className="mb-14"
            />
            <PhotoCards items={articles} columns="sm:grid-cols-2 lg:grid-cols-3" imageHeight="h-64" />
          </div>
        </section>
      </main>

      <CTABanner
        title="Help us reach more young people"
        description="Your support keeps prevention education, school programmes, and community outreach growing across Liberia."
        secondaryLabel="Explore Our Programs"
        secondaryTo="/programs"
      />
    </>
  );
};

export default Blog;
