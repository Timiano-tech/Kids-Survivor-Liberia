import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import ProcessSteps from '../components/visuals/ProcessSteps';
import PhotoCards from '../components/visuals/PhotoCards';
import RuleList from '../components/visuals/RuleList';
import { COUNTIES } from '../data/counties';
import TeamImg from '../assets/Team.jpeg';
import PreventionImage from '../assets/Say no to drugs.jpeg';
import RecoveryImage from '../assets/Drug_Recovered.jpeg';
import ClassroomImage from '../assets/Class Room.jpeg';
import OutreachImage from '../assets/Youth_Community_Outreach.jpeg';
import 'react-toastify/dist/ReactToastify.css';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const volunteerMeta = [
    { value: 4, label: 'Volunteer Roles' },
    { value: 3, suffix: ' mo', label: 'Minimum Commitment' },
    { value: COUNTIES.filter((c) => c.isActive).length, label: 'Active Counties' },
    { value: 15, label: 'Counties Covered' },
  ];

  const roles = [
    {
      title: 'Youth Leadership Facilitator',
      tag: 'YTEI',
      image: OutreachImage,
      description: 'Mentor young people in civic engagement and positive development.',
    },
    {
      title: 'Drug Prevention Educator',
      tag: 'NADAP',
      image: PreventionImage,
      description: 'Run school sessions and peer education that build refusal skills.',
    },
    {
      title: 'Vocational Assistant',
      tag: 'Skills',
      image: ClassroomImage,
      description: 'Teach digital, entrepreneurial, and livelihood skills to youth and widows.',
    },
    {
      title: 'Community Counsellor',
      tag: 'Recovery',
      image: RecoveryImage,
      description: 'Offer psychosocial support and stigma reduction in the field.',
    },
  ];

  const journey = [
    { kicker: 'Stage 01', title: 'Apply', description: 'Tell us your skills, your county, and the pillar you want to support.' },
    { kicker: 'Stage 02', title: 'Orientation', description: 'Safeguarding and code of conduct briefing before any community contact.' },
    { kicker: 'Stage 03', title: 'Training', description: 'Role-specific training in prevention, psychosocial support, or education.' },
    { kicker: 'Stage 04', title: 'Deploy', description: 'Join a programme team with your impact tracked through participatory monitoring.' },
  ];

  const expectations = [
    { title: 'Three field bases', note: 'Monrovia, Gbarnga, or Buchanan, with more opening as we expand.' },
    { title: 'Training provided', note: 'Prevention, psychosocial support, and child protection training.' },
    { title: 'Remote welcome', note: 'Advocacy and campaign design can be done from anywhere.' },
    { title: 'Safeguarding first', note: 'Child protection briefing before any community contact.' },
  ];

  return (
    <>
      <SEO
        title="Volunteer with Kids Survivor Liberia — Make a Difference"
        description="Volunteer with Kids Survivor Liberia in Monrovia, Gbarnga, or Buchanan. Join our drug prevention and youth empowerment programs across Liberia."
        canonical="/volunteer"
        keywords={[
          'volunteer Kids Survivor Liberia',
          'KSL volunteer Liberia',
          'NGO volunteering Monrovia',
          'youth advocate Liberia',
          'drug prevention volunteer',
          'community outreach volunteer Liberia',
          'child protection volunteer',
          'Liberia NGO opportunities',
        ]}
        breadcrumbs={[{ name: 'Volunteer', url: '/volunteer' }]}
      />

      <PageHeader
        eyebrow="Join The Team"
        title="Volunteer where the work happens"
        description="Four roles, fifteen counties, one shared commitment: keep young Liberians safe from drugs and exploitation."
        image={TeamImg}
        meta={volunteerMeta}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Opportunities"
              title="Where you can help"
              description="Every role is trained, supervised, and matched to a county team."
              className="mb-14"
            />
            <PhotoCards items={roles} columns="sm:grid-cols-2 lg:grid-cols-4" imageHeight="h-56" />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How To Join"
              title="Four steps from interest to deployment"
              className="mb-14"
            />
            <ProcessSteps steps={journey} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              eyebrow="Good To Know"
              title="What volunteering looks like"
              className="mb-14"
            />
            <RuleList items={expectations} tone="dark" columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </section>
      </main>

      <CTABanner
        title="Fund the volunteers who deliver this"
        description="Every field session, shelter placement, and counselling hour depends on trained volunteers."
        primaryLabel="Donate Now"
        secondaryLabel="Contact Volunteer Coordinator"
        secondaryTo="/contact"
      />
    </>
  );
};

export default Volunteer;
