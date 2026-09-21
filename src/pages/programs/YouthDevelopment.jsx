import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiCpu, FiAward, FiArrowRight } from 'react-icons/fi';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import HeaderImage from '../../assets/Youth2.jpeg';

const pillars = [
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: 'Digital Literacy & Computer Training',
    description:
      'Teaching foundational computer usage, word processing, internet navigation, and introductory software skills to bridge the digital divide for Liberian youth.',
  },
  {
    icon: <FiAward className="w-6 h-6" />,
    title: 'Vocational & Artisanal Trades',
    description:
      'Offering practical training in tailoring, soap making, agriculture, catering, and carpentry to enable young men and women to establish micro-enterprises.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Youth Leadership & Civics',
    description:
      'Mentoring young people in public speaking, conflict resolution, project management, and peacebuilding so they become proactive change-makers.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Peer Anti-Drug & Health Advocacy',
    description:
      'Training youth ambassadors to educate their peers on drug prevention, reproductive health, and emotional resilience in urban and rural hubs.',
  },
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
        alt="Youth Development Background"
      />

      <main>
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="The Opportunity"
                title="Empowering the Next Generation of Liberian Leaders"
                description="Youth constitute over 60% of Liberia’s population, representing the nation's greatest resource and hope for future economic growth. However, high youth unemployment, limited access to higher education, and lack of practical skill development hinder many young people from achieving financial independence. Youth development in Liberia requires structured, hands-on programs that align with modern workforce demands."
                align="left"
              />
              <p className="mt-8 text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">Kids Survivor Liberia (KSL)</span> addresses these challenges through comprehensive youth transformation initiatives. We provide computer literacy training, vocational skill workshops, entrepreneurship support, and civic leadership mentorship designed to convert youth energy into productive community development.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="Program Pillars"
                title="Core Pillars of KSL Youth Programs"
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
                eyebrow="Results"
                title="Sustainable Community Impact"
                align="left"
              />
              <p className="mt-6 text-slate-700 leading-relaxed">
                Our youth development programs have empowered over 1,200 young adults across Liberia, helping them gain employment or launch small community businesses. Explore our recent initiatives on the <Link to="/projects" className="text-blue-600 hover:underline font-semibold">Projects Page</Link> or meet our dedicated program facilitators on our <Link to="/team" className="text-blue-600 hover:underline font-semibold">Our Team Page</Link>.
              </p>

              <div className="mt-12 bg-slate-950 px-8 py-12 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    Invest in Liberia's Youth Future
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Your financial sponsorship provides laptop computers, vocational kits, and training materials for Liberian youth.
                  </p>
                </div>
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-6 py-3 transition-colors shrink-0"
                >
                  Sponsor Youth <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RelatedContent currentId="youth-development" />
    </div>
  );
}