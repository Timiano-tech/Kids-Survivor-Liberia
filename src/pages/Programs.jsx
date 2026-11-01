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

  const pillars = [
    {
      title: 'Drug Abuse Prevention & Public Awareness',
      image: PreventionImage,
      description: 'Awareness campaigns in schools and communities that help young people say no to drugs.',
      points: ['School-based programmes', 'Youth-led advocacy', 'Peer education networks'],
      stat: { value: '10,000+', label: 'Youth Reached' },
    },
    {
      title: 'Rehabilitation & Social Reintegration',
      image: RehabImage,
      description: 'Psychosocial support and help returning to family and community life for people recovering from drug dependence.',
      points: ['Psychosocial care', 'Skills development', 'Family reunification'],
      stat: { value: '8,000+', label: 'In Recovery' },
    },
    {
      title: 'Education & Skills Development',
      image: EducationImage,
      description: 'Scholarships, non-formal learning, and vocational training for children and young people.',
      points: ['Scholarships', 'Vocational training', 'Digital literacy'],
      stat: { value: '3,000+', label: 'Children Sponsored' },
    },
    {
      title: 'Gender, Protection & Social Inclusion',
      image: GenderImage,
      description: 'Protection and economic inclusion for adolescent girls, widows, and vulnerable elderly men.',
      points: ['Girls’ empowerment', 'Widow livelihoods', 'Elderly support'],
      stat: { value: '125', label: 'Widows Organised' },
    },
    {
      title: 'Community Engagement & Peacebuilding',
      image: CommunityImage,
      description: 'Working with traditional leaders, schools, and local authorities in the communities we serve.',
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
        title="Our Programmes"
        description="Kids Survivor Liberia runs five programmes in drug prevention, rehabilitation, education, inclusion, and community engagement, which together have reached more than 12,000 people across Liberia."
        image={HeaderImage}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20 lg:space-y-28">
              {pillars.map((pillar, index) => (
                <ImageFeature
                  key={pillar.title}
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
              title="National frameworks"
              description="Our programmes support two Government of Liberia frameworks."
              className="mb-14"
            />
            <SplitNotes
              items={[
                {
                  eyebrow: 'NADAP 2025–2030',
                  title: 'National Anti-Drugs Action Plan',
                  text: 'Drug demand reduction through prevention education, early intervention, rehabilitation, and reintegration.',
                  note: 'Supported by our drug prevention and rehabilitation programmes.',
                },
                {
                  eyebrow: 'YTEI',
                  title: 'Youth Transformation & Empowerment Initiative',
                  text: 'Youth leadership, civic engagement, access to education, and positive youth development.',
                  note: 'Supported by our education, inclusion, and community engagement programmes.',
                },
              ]}
            />
          </div>
        </section>
      </main>

      <CTABanner
        title="Support our programmes"
        description="Your gift supports prevention, rehabilitation, education, and community work across Liberia."
      />
    </>
  );
};

export default Programs;
