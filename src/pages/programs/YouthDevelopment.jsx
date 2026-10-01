import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMonitor } from 'react-icons/fi';
import SEO from '../../components/SEO';
import { COUNTIES } from '../../data/counties';
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
    tag: 'Pillar 01',
    description:
      'Teaching foundational computer usage, word processing, internet navigation, and introductory software skills to bridge the digital divide for Liberian youth.',
    points: ['Basic computer operation', 'Word processing and spreadsheets', 'Internet and online safety'],
  },
  {
    title: 'Vocational & Artisanal Trades',
    image: VocationalTraining,
    tag: 'Pillar 02',
    description:
      'Offering practical training in tailoring, soap making, agriculture, catering, and carpentry to enable young men and women to establish micro-enterprises.',
    points: ['Tailoring, catering, and carpentry', 'Soap making and handicrafts', 'Micro-enterprise start-up'],
  },
  {
    title: 'Youth Leadership & Civics',
    image: LeadershipProgram,
    tag: 'Pillar 03',
    description:
      'Mentoring young people in public speaking, conflict resolution, project management, and peacebuilding so they become proactive change-makers.',
    points: ['Public speaking and facilitation', 'Conflict resolution training', 'Project and team management'],
  },
  {
    title: 'Peer Anti-Drug & Health Advocacy',
    image: PeerAdvocacy,
    tag: 'Pillar 04',
    description:
      'Training youth ambassadors to educate their peers on drug prevention, reproductive health, and emotional resilience in urban and rural hubs.',
    points: ['Youth ambassador network', 'Drug prevention messaging', 'Reproductive health awareness'],
  },
];

const skillsMix = [
    { label: 'Digital & Computer Skills', helper: 'Computer labs and instructor-led sessions in Monrovia, Gbarnga, and Buchanan.' },
    { label: 'Vocational & Artisan Trades', helper: 'Hands-on training in tailoring, soap making, agriculture, catering, and carpentry.' },
    { label: 'Leadership & Civic Skills', helper: 'Mentorship in speaking, negotiation, peacebuilding, and project leadership.' },
    { label: 'Peer Health Advocacy', helper: 'Youth ambassadors delivering drug prevention and health messaging to peers.' },
];

const takeaways = [
  {
    title: 'Certified digital skills',
    description: 'Computers, software fundamentals, and internet literacy with instructor verification on completion.',
  },
  {
    title: 'A trade and the tools for it',
    description: 'Practical training in tailoring, soap making, agriculture, catering, or carpentry with materials supplied.',
  },
  {
    title: 'A livelihood path',
    description: 'Entrepreneurship guidance so graduates can launch a micro-enterprise or take paid work.',
  },
  {
    title: 'A community leadership role',
    description: 'Youth ambassadors who go on to educate their peers on drug prevention and health.',
  },
];

const pathwayToWork = [
  {
    kicker: 'Stage 01',
    title: 'Enrol & Assess',
    description: 'Young people are assessed for baseline skills, goals, and the trade or pathway that fits them.',
  },
  {
    kicker: 'Stage 02',
    title: 'Train',
    description: 'Instructor-led training in digital, vocational, leadership, and health advocacy tracks runs to completion.',
  },
  {
    kicker: 'Stage 03',
    title: 'Certify & Equip',
    description: 'Participants are certified and equipped with the tools, materials, and start-up guidance to work.',
  },
  {
    kicker: 'Stage 04',
    title: 'Launch & Mentor',
    description: 'Graduates launch micro-enterprises or join community advocacy, with ongoing mentor follow-up.',
  },
];

const outcomes = [
  { value: 1200, suffix: '+', label: 'Young Adults Empowered', description: 'Across Liberia with employment or business outcomes.' },
  { value: COUNTIES.filter((c) => c.isActive).length, label: 'Active Counties', description: 'Where youth programmes are currently running.' },
  { value: 4, label: 'Training Tracks', description: 'Digital, vocational, leadership, and peer advocacy.' },
  { value: 3, label: 'Core Cities', description: 'Monrovia, Gbarnga, and Buchanan field coordination.' },
];

const programmePhotos = [
  { src: DigitalTraining, caption: 'Computer and digital literacy training', meta: 'Digital skills' },
  { src: GirlsEmpowerment, caption: 'Leadership development for adolescent girls', meta: 'YTEI priority' },
  { src: VocationalTraining, caption: 'Vocational and artisanal skills training', meta: 'Livelihoods' },
  { src: PeerAdvocacy, caption: 'Youth-led drug prevention advocacy', meta: 'NADAP aligned' },
  { src: CommunityOutreach, caption: 'Youth community outreach programmes', meta: 'Outreach' },
  { src: TeamMentorship, caption: 'Mentorship and facilitator training', meta: 'Facilitators' },
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
        eyebrow="Empowerment Initiative"
        title="Youth Development in Liberia"
        description="Equipping Liberian youth with marketable digital skills, vocational trades, leadership training, and livelihood pathways."
        image={HeaderImage}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="The Opportunity"
                title="Empowering the next generation of Liberian leaders"
                description="Youth constitute over 60% of Liberia’s population, representing the nation's greatest resource and hope for future economic growth. However, high youth unemployment, limited access to higher education, and lack of practical skill development hinder many young people from achieving financial independence. Youth development in Liberia requires structured, hands-on programs that align with modern workforce demands."
                align="left"
              />
              <p className="mt-8 text-body-md leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-900">Kids Survivor Liberia (KSL)</span> addresses these challenges through comprehensive youth transformation initiatives. We provide computer literacy training, vocational skill workshops, entrepreneurship support, and civic leadership mentorship designed to convert youth energy into productive community development.
              </p>
            </div>

            <div className="mt-16 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
              <div className="bg-slate-950 p-10 lg:p-12 order-2 lg:order-1">
                <p className="text-eyebrow text-yellow-400 mb-4">Training Portfolio</p>
                <h3 className="text-3xl font-semibold text-white tracking-tight mb-6">
                  Where we invest in young people
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Four training tracks, each ending in something a participant can use: a certification or a working
                  micro-enterprise.
                </p>

                <ul className="space-y-5">
                  {skillsMix.map((track, index) => (
                    <li key={track.label} className="flex items-start gap-4">
                      <span className="w-10 h-10 bg-slate-800 border border-slate-700 text-yellow-400 flex items-center justify-center shrink-0 text-caption font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-heading-md text-white mb-1">{track.label}</p>
                        <p className="text-body-sm text-slate-400 leading-relaxed">{track.helper}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-7">
                  <span className="w-14 h-14 bg-yellow-500 text-slate-900 flex items-center justify-center shrink-0">
                    <FiMonitor className="w-6 h-6" />
                  </span>
                  <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">What participants walk away with</h3>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8">
                  Every training track is built around tangible outcomes a young person can carry into the workforce or a
                  community business.
                </p>

                <ul className="space-y-5">
                  {takeaways.map((item) => (
                    <li key={item.title} className="flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-slate-950 text-blue-700">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate-400 leading-relaxed max-w-5xl">
              Portfolio weighting of KSL youth development training places across the four tracks. A planning measure, not
              a population survey.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Program Pillars"
              title="Core pillars of KSL youth programs"
              description="Four training tracks designed to convert youth energy into skills, livelihoods, and civic leadership."
              className="mb-12"
            />
            <PillarCards pillars={pillars} columns="sm:grid-cols-2" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Approach"
              title="From enrolment to livelihood"
              description="Every participant moves through the same four stage pathway, regardless of which training track they choose."
              className="mb-14"
            />
            <ProcessSteps steps={pathwayToWork} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              eyebrow="In The Field"
              title="Youth programmes in action"
              description="Digital labs, trade workshops, and youth-led advocacy across Liberia."
              className="mb-12"
            />
            <PhotoBand photos={programmePhotos} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="Results"
                title="Sustainable community impact"
                align="left"
              />
              <p className="mt-6 text-body-md leading-relaxed text-slate-600">
                Our youth development programs have empowered over 1,200 young adults across Liberia, helping them gain employment or launch small community businesses. Explore our recent initiatives on the <Link to="/projects" className="text-blue-600 hover:underline font-semibold">Projects Page</Link> or meet our dedicated program facilitators on our <Link to="/team" className="text-blue-600 hover:underline font-semibold">Our Team Page</Link>.
              </p>

              <div className="mt-14">
                <StatBand stats={outcomes} tone="light" divided />
              </div>
            </div>
          </div>
        </section>
      </main>

      <DonateCTA
        eyebrow="Youth Futures"
        title="Invest in Liberia's youth future"
        description="Your sponsorship provides laptop computers, vocational kits, and training materials for Liberian youth."
        primaryLabel="Sponsor Youth"
        secondaryLabel="See Our Projects"
        secondaryTo="/projects"
      />

      <RelatedContent currentId="youth-development" />
    </div>
  );
}
