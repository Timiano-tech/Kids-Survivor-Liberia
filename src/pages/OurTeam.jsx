import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import HeaderImage from '../assets/Team_meeting.jpeg';
import TeamImage from '../assets/KSL_Team.jpeg';
import Mr_Steve from '../assets/team/Mr_Steve.png';
import Mrs_Fiona from '../assets/team/Mrs_Fiona.png';
import Mrs_Silvia from '../assets/team/Mrs_Silvia2.png';
import CEO from '../assets/team/CEO.jpeg';
import Mrs_Tawah from '../assets/team/Mrs. Tawah B. John.png';
import Mrs_julie from '../assets/team/Julie Hennings.png';
import Mr_Sebastian from '../assets/team/Mr. Sebastian Stephney.png';
import Mrs_Josephine from '../assets/team/Ms. Josephine P. Wreyou.png';
import Mr_Moses from '../assets/team/Mr. Moses Dahn.png';
import Mr_Paul from '../assets/team/Mr. Paul Bennie.png';

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Billy Jones',
      position: 'Chief Executive Officer',
      department: 'Executive Leadership',
      bio: 'Leads the national strategy and the safeguarding commitment.',
      expertise: ['Strategic Leadership', 'Policy'],
      image: CEO,
    },
    {
      id: 2,
      name: 'Mr. Steve Darwin Wald',
      position: 'Director of Country Operations',
      department: 'Operations',
      bio: 'Runs operations across every area of intervention.',
      expertise: ['Operations', 'Coordination'],
      image: Mr_Steve,
    },
    {
      id: 3,
      name: 'Mrs. Fiona A. Etong',
      position: 'Nigeria Representative & Social Media Manager',
      department: 'Communications',
      bio: 'Handles communications and regional representation.',
      expertise: ['Digital Communications', 'Advocacy'],
      image: Mrs_Fiona,
    },
    {
      id: 4,
      name: 'Mrs. Silvia T. Willie Dongon',
      position: 'Operational Advisor',
      department: 'Programmes',
      bio: 'Advises on gender-sensitive protection work.',
      expertise: ['Gender', 'Social Inclusion'],
      image: Mrs_Silvia,
    },
    {
      id: 5,
      name: 'Mrs. Tawah B. John',
      position: 'Head of the Widows Team',
      department: 'Programmes',
      bio: 'Organised 125 widows into livelihood programmes.',
      expertise: ['Livelihoods', 'Women’s Empowerment'],
      image: Mrs_Tawah,
    },
    {
      id: 6,
      name: 'Miss Julie Hennings',
      position: 'Adolescent Girls Programme Lead',
      department: 'Programmes',
      bio: 'Leads mentorship and life skills for adolescent girls.',
      expertise: ['Girls’ Empowerment', 'Life Skills'],
      image: Mrs_julie,
    },
    {
      id: 7,
      name: 'Mr. Sebastian Stephney',
      position: 'Community Engagement & Education Advisor',
      department: 'Programmes',
      bio: 'Advises on community outreach and school initiatives.',
      expertise: ['Community Outreach', 'Education'],
      image: Mr_Sebastian,
    },
    {
      id: 8,
      name: 'Ms. Josephine P. Wreyou',
      position: 'Adolescent Girls Initiatives Lead',
      department: 'Programmes',
      bio: 'Runs girls’ protection and confidence-building initiatives.',
      expertise: ['Girls’ Protection', 'Mentorship'],
      image: Mrs_Josephine,
    },
    {
      id: 9,
      name: 'Mr. Moses Dahn',
      position: 'Principal, KSL Scholar Programme',
      department: 'Programmes',
      bio: 'Runs free schooling for 4–17s and advises on finance.',
      expertise: ['Education', 'Governance'],
      image: Mr_Moses,
    },
    {
      id: 10,
      name: 'Mr. Paul Bennie',
      position: 'City Coordinator, Gbarnga',
      department: 'Field Operations',
      bio: 'Coordinates programmes in Bong County.',
      expertise: ['Field Operations', 'Community'],
      image: Mr_Paul,
    },
  ];

  const departments = [...new Set(teamMembers.map((member) => member.department))];

  return (
    <>
      <SEO
        title="Our Team — Kids Survivor Liberia Leadership"
        description="Meet the dedicated leadership team behind Kids Survivor Liberia: vision, passion, and expertise driving child protection and youth empowerment across Liberia."
        canonical="/team"
        keywords={[
          'Kids Survivor Liberia team',
          'KSL leadership',
          'Billy Jones KSL',
          'Liberia NGO staff',
          'child protection experts Liberia',
          'youth development leaders',
          'Liberia non-profit leadership',
          'KSL executive team',
        ]}
        breadcrumbs={[{ name: 'Our Team', url: '/team' }]}
      />

      <PageHeader
        title="Our Team"
        description="KSL is run by a small national leadership team, supported by programme specialists and coordinators in the field."
        image={HeaderImage}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Leadership and Staff" className="mb-14" />

            <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-5">
              {teamMembers.map((member) => (
                <article key={member.id} className="group">
                  <div className="overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <h3 className="text-heading-md leading-snug text-slate-900">{member.name}</h3>
                    <p className="mt-1.5 text-body-sm font-medium leading-snug text-blue-700">
                      {member.position}
                    </p>
                    <p className="mt-3 text-body-sm leading-relaxed text-slate-600">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-center">
              <div>
                <SectionHeading
                  title="How Our Team Is Organised"
                  description="Most of our staff work on programmes. They are supported by the executive leadership, operations, communications, and field coordinators based in the counties where we work."
                />
                <ul className="mt-8 space-y-3">
                  {departments.map((dept) => (
                    <li key={dept} className="flex items-start gap-3 text-slate-700">
                      <span className="w-1.5 h-1.5 bg-blue-700 mt-2.5 shrink-0" aria-hidden="true" />
                      <span className="text-body-md">{dept}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[22rem] h-full">
                <img
                  src={TeamImage}
                  alt="Kids Survivor Liberia team in the field"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTABanner
        title="Work With Us"
        description="Many of our staff live in the counties they serve. Your support helps us keep them working in the field."
        secondaryLabel="Volunteer With Us"
        secondaryTo="/volunteer"
      />
    </>
  );
};

export default OurTeam;
