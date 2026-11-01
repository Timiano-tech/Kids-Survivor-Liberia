import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import DonateCTA from '../../components/DonateCTA';
import PillarCards from '../../components/visuals/PillarCards';
import ProcessSteps from '../../components/visuals/ProcessSteps';
import ImageFeature from '../../components/visuals/ImageFeature';
import StatBand from '../../components/visuals/StatBand';
import HeaderImage from '../../assets/ChildrenImpact.jpg';
import CommunityCare from '../../assets/Community_Children.jpeg';
import NutritionSupport from '../../assets/Feeding_CHildren.jpeg';
import SchoolSupport from '../../assets/KSL_School.jpeg';
import Counselling from '../../assets/Community_Outreach_Children.jpeg';

const pillars = [
  {
    title: 'Shelter & Family Reunification',
    image: CommunityCare,
    description:
      'Working with social workers to trace families, support safe reunification, and help foster families with care packages and income assistance.',
    points: ['Family tracing', 'Foster and host family support', 'Care packages and income assistance'],
  },
  {
    title: 'Emergency Nutrition & Healthcare',
    image: NutritionSupport,
    description:
      'Providing meals, hygiene kits, and medical care to children in informal settlements and rural villages.',
    points: ['Nutritious meals', 'Hygiene and sanitation kits', 'Mobile medical screening'],
  },
  {
    title: 'Educational Scholarships & Sponsorship',
    image: SchoolSupport,
    description:
      'Covering tuition, uniforms, textbooks, and school supplies so vulnerable children can return to primary and secondary school.',
    points: ['Tuition and fee coverage', 'Uniforms, textbooks, supplies', 'Re-enrolment in primary education'],
  },
  {
    title: 'Psychosocial Care',
    image: Counselling,
    description:
      'Offering counselling to help children cope with loss, build confidence, and settle into supportive peer groups.',
    points: ['Counselling sessions', 'Confidence building', 'Peer group support'],
  },
];

const carePathway = [
  {
    title: 'Reach & Assess',
    description: 'Outreach teams identify children in informal settlements and rural villages and assess their needs.',
  },
  {
    title: 'Meet Urgent Needs',
    description: 'Food, hygiene kits, medical screening, and safe shelter come first.',
  },
  {
    title: 'Return to School',
    description: 'Scholarships help children re-enrol in school while counselling begins.',
  },
  {
    title: 'Reunify Families',
    description: 'Where it is safe, children are reunited with family, with continued support afterwards.',
  },
];

const reach = [
  { value: 5000, suffix: '+', label: 'Children Reached', description: 'Vulnerable children supported through direct care.' },
  { value: 125, label: 'Widows In Livelihoods', description: 'Women supported through livelihood programmes.' },
];

export default function VulnerableChildren() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Support for Vulnerable Children — Kids Survivor Liberia"
        description="Kids Survivor Liberia supports vulnerable children, orphans, and street children with education, shelter, nutrition, and rehabilitation services across Liberia."
        canonical="/programs/vulnerable-children"
        keywords={[
          'vulnerable children in Liberia',
          'orphan care Liberia',
          'street children Liberia',
          'KSL child support',
          'Liberia youth welfare',
          'children rehabilitation Liberia',
          'child poverty relief Liberia',
          'shelter for children Liberia',
        ]}
        breadcrumbs={[
          { name: 'Programs', url: '/programs' },
          { name: 'Vulnerable Children', url: '/programs/vulnerable-children' },
        ]}
      />

      <PageHeader
        title="Vulnerable Children"
        description="Food, shelter, schooling, and care for orphaned, displaced, and marginalised children in Liberian communities."
        image={HeaderImage}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionHeading title="About this programme" />
              <div className="mt-6 space-y-5 text-body-md leading-relaxed text-slate-600">
                <p>
                  Across Liberia, many children live in difficult conditions caused by poverty, the loss of parents,
                  family breakdown, and a lack of basic services. Many do not have regular meals, healthcare, clean
                  water, or a place in school. Without support, they are at greater risk of homelessness, drug use,
                  and child labour.
                </p>
                <p>
                  Kids Survivor Liberia (KSL) believes every child deserves safety, care, and the chance to reach
                  their potential. Our vulnerable children programme provides emergency aid, rehabilitation, and
                  educational support suited to conditions in Liberia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What we do"
              description="Our support for vulnerable children covers four areas."
              className="mb-12"
            />
            <PillarCards pillars={pillars} columns="sm:grid-cols-2" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How we work"
              description="We support each child step by step, starting with their most urgent needs."
              className="mb-14"
            />
            <ProcessSteps steps={carePathway} />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ImageFeature
              image={CommunityCare}
              title="In the community"
              description="Our teams work directly in informal settlements and rural villages, so that children without a stable home can still be reached. Outreach, feeding, health screening, and counselling all take place in the community."
              points={[
                'Meals and hygiene kits',
                'Medical screening for children and caregivers',
                'Help with school enrolment',
                'Referrals for counselling',
              ]}
            />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionHeading title="Our impact" />
              <p className="mt-6 text-body-md leading-relaxed text-slate-600">
                KSL works directly in communities across 7 Liberian counties and is expanding to more. Read about our
                county partnerships on the{' '}
                <Link to="/counties" className="text-blue-700 hover:underline font-semibold">
                  Counties page
                </Link>{' '}
                or find out how to get involved on the{' '}
                <Link to="/volunteer" className="text-blue-700 hover:underline font-semibold">
                  Volunteer page
                </Link>
                .
              </p>
              <div className="mt-12">
                <StatBand stats={reach} tone="light" divided />
              </div>
            </div>
          </div>
        </section>
      </main>

      <DonateCTA
        title="Support a vulnerable child"
        description="Your gift helps provide school fees, meals, counselling, and safe shelter for a vulnerable child in Liberia."
        primaryLabel="Donate Now"
        secondaryLabel="Explore Our Counties"
        secondaryTo="/counties"
      />

      <RelatedContent currentId="vulnerable-children" />
    </div>
  );
}
