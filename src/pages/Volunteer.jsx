import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import ProcessSteps from '../components/visuals/ProcessSteps';
import PhotoCards from '../components/visuals/PhotoCards';
import RuleList from '../components/visuals/RuleList';
import TeamImg from '../assets/Team.jpeg';
import PreventionImage from '../assets/Say no to drugs.jpeg';
import RecoveryImage from '../assets/Drug_Recovered.jpeg';
import ClassroomImage from '../assets/Class Room.jpeg';
import OutreachImage from '../assets/Youth_Community_Outreach.jpeg';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
    { kicker: 'Step 1', title: 'Apply', description: 'Contact us with your skills, your county, and the programme you would like to support.' },
    { kicker: 'Step 2', title: 'Orientation', description: 'Safeguarding and code of conduct briefing before any community contact.' },
    { kicker: 'Step 3', title: 'Training', description: 'Role-specific training in prevention, psychosocial support, or education.' },
    { kicker: 'Step 4', title: 'Deploy', description: 'Begin working with a programme team in your county.' },
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
        title="Volunteer With Us"
        description="Volunteers help us reach children and young people in communities across Liberia. We welcome people who want to give their time and skills."
        image={TeamImg}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Volunteer Roles"
              description="All volunteers receive training and work alongside one of our county teams."
              className="mb-14"
            />
            <PhotoCards items={roles} columns="sm:grid-cols-2 lg:grid-cols-4" imageHeight="h-56" />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How to Apply"
              className="mb-14"
            />
            <ProcessSteps steps={journey} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              title="What to Expect"
              className="mb-14"
            />
            <RuleList items={expectations} tone="dark" columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </section>
      </main>

      <CTABanner
        title="Interested in volunteering?"
        description="Contact our team to find out about current opportunities, or support our work with a donation."
        primaryLabel="Donate Now"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
};

export default Volunteer;
