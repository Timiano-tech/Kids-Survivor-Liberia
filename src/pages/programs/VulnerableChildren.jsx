import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiHome, FiSmile, FiArrowRight } from 'react-icons/fi';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import HeaderImage from '../../assets/ChildrenImpact.jpg';

const pillars = [
  {
    icon: <FiHome className="w-6 h-6" />,
    title: 'Shelter & Family Reunification',
    description:
      'Working with social workers to trace families, facilitate safe reunification, and support foster families with care packages and income assistance.',
  },
  {
    icon: <FiSmile className="w-6 h-6" />,
    title: 'Emergency Nutrition & Healthcare',
    description:
      'Distributing nutritional meals, hygiene kits, and medical care to underprivileged children in high-density informal settlements and rural villages.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Educational Scholarships & Sponsorship',
    description:
      'Covering tuition, uniforms, textbooks, and school supplies so vulnerable children can re-enter primary and secondary schools.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Trauma-Informed Psychosocial Care',
    description:
      'Offering specialized counseling and trauma therapy to help children process loss, build self-worth, and integrate into supportive peer groups.',
  },
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
        alt="Vulnerable Children Background"
      />

      <main>
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="The Need"
                title="Understanding the Needs of Vulnerable Children in Liberia"
                description="Across Liberia, thousands of children live under severe conditions of vulnerability caused by extreme poverty, parental loss, family breakup, and lack of basic services. Many vulnerable children in Liberia lack access to consistent daily meals, healthcare, clean water, and formal schooling. Without intervention, these young people face an elevated risk of homelessness, substance dependency, and early labor exploitation."
                align="left"
              />
              <p className="mt-8 text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">Kids Survivor Liberia (KSL)</span> believes every child deserves safety, nurture, and the opportunity to fulfill their potential. Our comprehensive vulnerable children programs deliver essential emergency aid, long term rehabilitation, and educational support tailored to Liberia's socio-economic landscape.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="Care Initiatives"
                title="Core Interventions for Vulnerable Children"
                align="left"
                className="mb-10"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="bg-white border border-slate-200 p-6 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-50 text-blue-700 rounded-sm p-2">
                        {pillar.icon}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="Outreach"
                title="Community Outreach & County Programs"
                align="left"
              />
              <p className="mt-6 text-slate-700 leading-relaxed">
                KSL operates directly within marginalized communities across 7 key Liberian counties and is actively expanding nationwide. Read about our county-level partnerships on our <Link to="/counties" className="text-blue-600 hover:underline font-semibold">Counties Overview Page</Link> or discover how you can get involved on our <Link to="/volunteer" className="text-blue-600 hover:underline font-semibold">Volunteer Page</Link>.
              </p>

              <div className="mt-12 bg-slate-950 px-8 py-12 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    Change a Vulnerable Child's Story Today
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Your gift provides school fees, hot meals, and safe shelter for a vulnerable child in Liberia.
                  </p>
                </div>
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-6 py-3 transition-colors shrink-0"
                >
                  Donate to Care <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RelatedContent currentId="vulnerable-children" />
    </div>
  );
}