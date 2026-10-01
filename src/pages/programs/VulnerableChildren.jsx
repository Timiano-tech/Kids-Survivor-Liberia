import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiDroplet } from 'react-icons/fi';
import SEO from '../../components/SEO';
import { COUNTIES } from '../../data/counties';
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
    tag: 'Intervention 01',
    description:
      'Working with social workers to trace families, facilitate safe reunification, and support foster families with care packages and income assistance.',
    points: ['Family tracing and tracing back home', 'Foster and host family support', 'Care packages and income assistance'],
  },
  {
    title: 'Emergency Nutrition & Healthcare',
    image: NutritionSupport,
    tag: 'Intervention 02',
    description:
      'Distributing nutritional meals, hygiene kits, and medical care to underprivileged children in high-density informal settlements and rural villages.',
    points: ['Daily nutritional meals', 'Hygiene and sanitation kits', 'Mobile medical screening'],
  },
  {
    title: 'Educational Scholarships & Sponsorship',
    image: SchoolSupport,
    tag: 'Intervention 03',
    description:
      'Covering tuition, uniforms, textbooks, and school supplies so vulnerable children can re-enter primary and secondary schools.',
    points: ['Tuition and fee coverage', 'Uniforms, textbooks, supplies', 'Re-enrolment in primary education'],
  },
  {
    title: 'Trauma-Informed Psychosocial Care',
    image: Counselling,
    tag: 'Intervention 04',
    description:
      'Offering specialized counseling and trauma therapy to help children process loss, build self-worth, and integrate into supportive peer groups.',
    points: ['Trauma processing sessions', 'Self-worth and confidence building', 'Peer group integration'],
  },
];

const barriers = [
  {
    label: 'Food Insecurity',
    helper: 'Regular meals and nutrition support are the first point of contact for most children we reach.',
  },
  {
    label: 'School Fee Barrier',
    helper: 'Scholarships cover tuition, uniforms, and learning materials so children can re-enter school.',
  },
  {
    label: 'No Safe Shelter',
    helper: 'Shelter referrals and foster support stabilise children before longer term rehabilitation.',
  },
  {
    label: 'Unaddressed Trauma',
    helper: 'Counselling and trauma therapy close the loop after safety and food are secured.',
  },
];

const carePathway = [
  {
    kicker: 'Stage 01',
    title: 'Reach & Assess',
    description: 'Outreach teams identify children in informal settlements and rural villages and complete a needs assessment.',
  },
  {
    kicker: 'Stage 02',
    title: 'Stabilise',
    description: 'Food, hygiene kits, medical screening, and a safe shelter are secured as immediate priorities.',
  },
  {
    kicker: 'Stage 03',
    title: 'Restore',
    description: 'Scholarships re-enrol children in school while counselling begins addressing trauma.',
  },
  {
    kicker: 'Stage 04',
    title: 'Reunify & Empower',
    description: 'Family reunification and psychosocial support build a durable foundation beyond the programme.',
  },
];

const reach = [
  { value: 5000, suffix: '+', label: 'Children Reached', description: 'Vulnerable children supported through direct care.' },
  { value: COUNTIES.filter((c) => c.isActive).length, label: 'Active Counties', description: 'With active county programmes and national expansion.' },
  { value: 4, label: 'Care Interventions', description: 'Shelter, nutrition, education, and psychosocial care.' },
  { value: 125, label: 'Widows In Livelihoods', description: 'Women organised into structured livelihood programmes.' },
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
        eyebrow="Priority Care"
        title="Vulnerable Children in Liberia"
        description="Restoring dignity, health, and hope for orphaned, displaced, and marginalized children living in high-risk Liberian communities."
        image={HeaderImage}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="The Need"
                title="Meeting vulnerable children where they are"
                description="Across Liberia, thousands of children live under severe conditions of vulnerability caused by extreme poverty, parental loss, family breakup, and lack of basic services. Many vulnerable children in Liberia lack access to consistent daily meals, healthcare, clean water, and formal schooling. Without intervention, these young people face an elevated risk of homelessness, substance dependency, and early labor exploitation."
                align="left"
              />
              <p className="mt-8 text-body-md leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-900">Kids Survivor Liberia (KSL)</span> believes every child deserves safety, nurture, and the opportunity to fulfill their potential. Our comprehensive vulnerable children programs deliver essential emergency aid, long term rehabilitation, and educational support tailored to Liberia's socio-economic landscape.
              </p>
            </div>

            <div className="mt-16 bg-slate-950 p-10 lg:p-14">
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
                <div>
                  <p className="text-eyebrow text-yellow-400 mb-4">Barriers We Design Against</p>
                  <h3 className="text-3xl font-semibold text-white tracking-tight mb-6">
                    What stands between a child and stability
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    Vulnerability is rarely a single problem. It compounds, so our programme budget follows the sequence
                    of need: survival first, then shelter, then schooling, then recovery.
                  </p>
                  <div className="flex items-center gap-4 pt-8 border-t border-slate-800">
                    <span className="w-12 h-12 bg-slate-800 border border-slate-700 text-yellow-400 flex items-center justify-center shrink-0">
                      <FiDroplet className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 leading-relaxed">
                      Survival, then shelter, then school, then recovery
                    </span>
                  </div>
                </div>

                <ol className="space-y-6">
                  {barriers.map((barrier, index) => (
                    <li key={barrier.label} className="flex items-start gap-4">
                      <span className="w-10 h-10 bg-slate-800 border border-slate-700 text-yellow-400 flex items-center justify-center shrink-0 text-caption font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-heading-md text-white mb-1">{barrier.label}</p>
                        <p className="text-body-sm text-slate-400 leading-relaxed">{barrier.helper}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Care Initiatives"
              title="Core interventions for vulnerable children"
              description="Four interventions that follow a child from immediate survival through to long term stability."
              className="mb-12"
            />
            <PillarCards pillars={pillars} columns="sm:grid-cols-2" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Approach"
              title="The care pathway"
              description="Recovery is not a single intervention. Each child moves through four stages with the same team following their case."
              className="mb-14"
            />
            <ProcessSteps steps={carePathway} />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ImageFeature
              image={CommunityCare}
              eyebrow="Direct Care In The Community"
              title="Care delivered where children actually live"
              description="Our teams work inside high-density informal settlements and rural villages rather than waiting for children to reach a facility. Outreach, feeding, screening, and counselling happen in the community, which is the only reliable way to reach children who have no stable home."
              stat={{ value: '7', label: 'Counties Served' }}
              points={[
                'Meals and hygiene kits distributed weekly',
                'Mobile medical screening for children and caregivers',
                'School places secured before the next term',
                'Counselling referrals tracked through recovery',
              ]}
            />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="Outreach"
                title="Community outreach and county programs"
                align="left"
              />
              <p className="mt-6 text-body-md leading-relaxed text-slate-600">
                KSL operates directly within marginalized communities across 7 key Liberian counties and is actively expanding nationwide. Read about our county-level partnerships on our <Link to="/counties" className="text-blue-600 hover:underline font-semibold">Counties Overview Page</Link> or discover how you can get involved on our <Link to="/volunteer" className="text-blue-600 hover:underline font-semibold">Volunteer Page</Link>.
              </p>

              <div className="mt-14">
                <StatBand stats={reach} tone="light" divided />
              </div>
            </div>
          </div>
        </section>
      </main>

      <DonateCTA
        eyebrow="Support A Child"
        title="Change a vulnerable child's story today"
        description="Your gift provides school fees, hot meals, counselling, and safe shelter for a vulnerable child in Liberia."
        primaryLabel="Donate to Care"
        secondaryLabel="Explore Our Counties"
        secondaryTo="/counties"
      />

      <RelatedContent currentId="vulnerable-children" />
    </div>
  );
}
