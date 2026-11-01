import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import DonateCTA from '../../components/DonateCTA';
import PillarCards from '../../components/visuals/PillarCards';
import ProcessSteps from '../../components/visuals/ProcessSteps';
import StatBand from '../../components/visuals/StatBand';
import PhotoBand from '../../components/visuals/PhotoBand';
import HeaderImage from '../../assets/Youth2.jpeg';
import DigitalTraining from '../../assets/Class Room.jpeg';
import VocationalTraining from '../../assets/Youth_Barbing.jpeg';
import LeadershipProgram from '../../assets/Community_Speech.jpeg';
import PeerAdvocacy from '../../assets/Say no to drugs.jpeg';
import GirlsEmpowerment from '../../assets/Girls_Emp.png';
import CommunityOutreach from '../../assets/Youth_Community_Outreach.jpeg';
import TeamMentorship from '../../assets/Team_discussion.jpeg';

const pillars = [
  {
    title: 'Digital Literacy & Computer Training',
    image: DigitalTraining,
    description:
      'Teaching basic computer use, word processing, internet use, and introductory software skills to young people with little access to computers.',
    points: ['Basic computer operation', 'Word processing and spreadsheets', 'Internet and online safety'],
  },
  {
    title: 'Vocational & Artisanal Trades',
    image: VocationalTraining,
    description:
      'Practical training in tailoring, soap making, agriculture, catering, and carpentry so young men and women can start small businesses.',
    points: ['Tailoring, catering, and carpentry', 'Soap making and handicrafts', 'Small business start-up'],
  },
  {
    title: 'Youth Leadership & Civics',
    image: LeadershipProgram,
    description:
      'Mentoring young people in public speaking, conflict resolution, project management, and peacebuilding so they can take an active role in their communities.',
    points: ['Public speaking and facilitation', 'Conflict resolution training', 'Project and team management'],
  },
  {
    title: 'Peer Anti-Drug & Health Advocacy',
    image: PeerAdvocacy,
    description:
      'Training youth ambassadors to talk with their peers about drug prevention, reproductive health, and emotional wellbeing in urban and rural areas.',
    points: ['Youth ambassador network', 'Drug prevention messaging', 'Reproductive health awareness'],
  },
];

const pathwayToWork = [
  {
    title: 'Enrol',
    description: 'We meet each young person to understand their skills, goals, and which training suits them.',
  },
  {
    title: 'Train',
    description: 'Instructor-led training in digital skills, a trade, leadership, or health advocacy.',
  },
  {
    title: 'Certify & Equip',
    description: 'Participants receive a certificate along with tools, materials, and guidance on starting work.',
  },
  {
    title: 'Mentor',
    description: 'Graduates start small businesses or join community advocacy, with follow-up from a mentor.',
  },
];

const outcomes = [
  { value: 1200, suffix: '+', label: 'Young Adults Supported', description: 'Helped into employment or their own small business.' },
];

const programmePhotos = [
  { src: DigitalTraining, caption: 'Computer and digital literacy training' },
  { src: GirlsEmpowerment, caption: 'Leadership development for adolescent girls' },
  { src: VocationalTraining, caption: 'Vocational skills training' },
  { src: PeerAdvocacy, caption: 'Youth-led drug prevention advocacy' },
  { src: CommunityOutreach, caption: 'Youth community outreach' },
  { src: TeamMentorship, caption: 'Mentorship and facilitator training' },
];

export default function YouthDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Youth Development in Liberia — Kids Survivor Liberia"
        description="Kids Survivor Liberia empowers young people with leadership training, vocational skills, civic engagement, and psychosocial support to become agents of change in Liberia."
        canonical="/programs/youth-development"
        keywords={[
          'youth development in Liberia',
          'vocational training Liberia',
          'youth empowerment Liberia',
          'KSL youth development',
          'Liberia skill training',
          'leadership training Liberia youth',
          'civic engagement Liberia',
          'YTEI programs Liberia',
        ]}
        breadcrumbs={[
          { name: 'Programs', url: '/programs' },
          { name: 'Youth Development', url: '/programs/youth-development' },
        ]}
      />

      <PageHeader
        title="Youth Development"
        description="Digital skills, vocational trades, leadership training, and livelihood support for young people in Liberia."
        image={HeaderImage}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionHeading title="About this programme" />
              <div className="mt-6 space-y-5 text-body-md leading-relaxed text-slate-600">
                <p>
                  Young people make up over 60% of Liberia&rsquo;s population. Many face unemployment, limited access to
                  higher education, and few chances to learn practical skills, which makes it hard to earn a living.
                </p>
                <p>
                  Kids Survivor Liberia (KSL) offers computer literacy training, vocational skills workshops, support
                  for starting small businesses, and leadership mentoring. Training takes place in Monrovia, Gbarnga,
                  and Buchanan, and each course ends with a certificate or practical support to start working.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What we do"
              description="Our youth development work covers four areas of training."
              className="mb-12"
            />
            <PillarCards pillars={pillars} columns="sm:grid-cols-2" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How we work"
              description="Whichever training they choose, participants follow the same steps."
              className="mb-14"
            />
            <ProcessSteps steps={pathwayToWork} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading tone="dark" title="In the field" className="mb-12" />
            <PhotoBand photos={programmePhotos} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionHeading title="Our impact" />
              <p className="mt-6 text-body-md leading-relaxed text-slate-600">
                Our youth development programmes have supported over 1,200 young adults across Liberia to find work or
                start small businesses in their communities. See our recent work on the{' '}
                <Link to="/projects" className="text-blue-700 hover:underline font-semibold">
                  Projects page
                </Link>{' '}
                or meet our programme facilitators on the{' '}
                <Link to="/team" className="text-blue-700 hover:underline font-semibold">
                  Our Team page
                </Link>
                .
              </p>
              <div className="mt-12">
                <StatBand stats={outcomes} tone="light" divided />
              </div>
            </div>
          </div>
        </section>
      </main>

      <DonateCTA
        title="Support young people in Liberia"
        description="Your support provides computers, vocational kits, and training materials for young people in Liberia."
        primaryLabel="Sponsor Youth"
        secondaryLabel="See Our Projects"
        secondaryTo="/projects"
      />

      <RelatedContent currentId="youth-development" />
    </div>
  );
}
