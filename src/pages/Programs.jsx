import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import ImageFeature from '../components/visuals/ImageFeature';
import SplitNotes from '../components/visuals/SplitNotes';
import HeaderImage from '../assets/Talking to children.jpeg';
import PreventionImage from '../assets/Say no to drugs.jpeg';
import RehabImage from '../assets/Children3.jpeg';
import EducationImage from '../assets/Children on the assembly.jpeg';
import GenderImage from '../assets/Girls_Emp.png';
import CommunityImage from '../assets/Community_Speech3.jpeg';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programMeta = [
    { value: 5, label: 'Programme Pillars' },
    { value: 2, label: 'National Frameworks' },
    { value: 15, label: 'Counties' },
    { value: 12000, suffix: '+', label: 'People Reached' },
  ];

  const pillars = [
    {
      title: 'Drug Abuse Prevention & Public Awareness',
      image: PreventionImage,
      alignment: 'NADAP Pillar 1 · Prevention',
      description: 'School and community campaigns that build refusal skills before experimentation starts.',
      points: ['School-based programmes', 'Youth-led advocacy', 'Peer education networks'],
      stat: { value: '10,000+', label: 'Youth Reached' },
    },
    {
      title: 'Rehabilitation & Social Reintegration',
      image: RehabImage,
      alignment: 'NADAP Pillar 2 · Treatment',
      description: 'Psychosocial support and reintegration pathways for people recovering from drug dependence.',
      points: ['Psychosocial care', 'Skills development', 'Family reunification'],
      stat: { value: '8,000+', label: 'In Recovery' },
    },
    {
      title: 'Education & Skills Development',
      image: EducationImage,
      alignment: 'YTEI Priority',
      description: 'Scholarships, non-formal learning, and vocational training for children and young people.',
      points: ['Scholarships', 'Vocational training', 'Digital literacy'],
      stat: { value: '3,000+', label: 'Children Sponsored' },
    },
    {
      title: 'Gender, Protection & Social Inclusion',
      image: GenderImage,
      alignment: 'GESI Integration',
      description: 'Protection and economic inclusion for adolescent girls, widows, and vulnerable elderly men.',
      points: ['Girls’ empowerment', 'Widow livelihoods', 'Elderly support'],
      stat: { value: '125', label: 'Widows Organised' },
    },
    {
      title: 'Community Engagement & Peacebuilding',
      image: CommunityImage,
      alignment: 'Community Driven',
      description: 'Traditional leaders, schools, and local authorities working alongside us in every county.',
      points: ['Leader partnerships', 'Social cohesion', 'Crime prevention'],
      stat: { value: '120+', label: 'Communities' },
    },
  ];

  return (
    <>
      <SEO
        title="Our Programs in Liberia — Child Protection & Youth Empowerment"
        description="Explore Kids Survivor Liberia strategic programs in drug abuse prevention, child protection, youth empowerment, and gender inclusion across Liberia. Aligned with NADAP 2025-2030 and YTEI national frameworks."
        canonical="/programs"
        keywords={[
          'KSL programs',
          'child protection programs Liberia',
          'youth empowerment programs Liberia',
          'drug abuse prevention Liberia',
          'NADAP Liberia',
          'YTEI Liberia',
          'rehabilitation programs Liberia',
          'vulnerable children programs Liberia',
          'community development Liberia',
        ]}
        breadcrumbs={[{ name: 'Our Programs', url: '/programs' }]}
      />

      <PageHeader
        eyebrow="Core Initiatives"
        title="Five pillars of work"
        description="Prevention, recovery, education, inclusion, and community strength — aligned with Liberia's national frameworks."
        image={HeaderImage}
        meta={programMeta}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20 lg:space-y-28">
              {pillars.map((pillar, index) => (
                <ImageFeature
                  key={pillar.title}
                  eyebrow={pillar.alignment}
                  title={pillar.title}
                  description={pillar.description}
                  image={pillar.image}
                  alt={pillar.title}
                  points={pillar.points}
                  stat={pillar.stat}
                  imagePosition={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="National Frameworks"
              title="Aligned with Liberia's national priorities"
              description="Every pillar reports into two government frameworks."
              className="mb-14"
            />
            <SplitNotes
              items={[
                {
                  eyebrow: 'NADAP 2025–2030',
                  title: 'National Anti-Drugs Action Plan',
                  text: 'Drug demand reduction through prevention education, early intervention, rehabilitation, and reintegration.',
                  note: 'Pillars 1 and 2 sit directly inside this plan.',
                },
                {
                  eyebrow: 'YTEI',
                  title: 'Youth Transformation & Empowerment Initiative',
                  text: 'Youth leadership, civic engagement, education access, and positive youth development at scale.',
                  note: 'Pillars 3, 4, and 5 deliver this mandate.',
                },
              ]}
            />
          </div>
        </section>
      </main>

      <CTABanner
        title="Fund a pillar near you"
        description="Support prevention, rehabilitation, education, and peacebuilding across Liberia."
      />
    </>
  );
};

export default Programs;
