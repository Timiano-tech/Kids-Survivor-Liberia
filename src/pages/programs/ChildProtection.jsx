import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import HeaderImage from '../../assets/Students.jpeg';

const pillars = [
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Community Protection Committees',
    description:
      'Establishing grassroots child protection committees in rural and urban communities to monitor child welfare, identify at-risk youth, and coordinate swift interventions.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Substance Abuse Prevention',
    description:
      'Conducting active anti-drug awareness campaigns in schools and youth hubs across Montserrado, Grand Bassa, Nimba, and surrounding counties to shield children from illegal substances.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Safe Havens & Shelter Support',
    description:
      'Providing temporary safe space referrals, emergency food assistance, and medical support for child victims of domestic abuse and displacement.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Legal Rights & Policy Advocacy',
    description:
      'Advocating for the strict enforcement of the Liberian Children’s Law, ensuring perpetrator accountability and child justice reform.',
  },
];

export default function ChildProtection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Child Protection in Liberia — Kids Survivor Liberia"
        description="Kids Survivor Liberia child protection programs safeguard vulnerable children from abuse, exploitation, and drug exposure through community-driven prevention and response strategies."
        canonical="/programs/child-protection"
        keywords={[
          'child protection in Liberia',
          'child welfare Liberia',
          'protect Liberian children',
          'KSL child protection',
          'Liberia NGO child safety',
          'child abuse prevention Liberia',
          'vulnerable children programs Liberia',
          'child safeguarding Liberia',
        ]}
        breadcrumbs={[
          { name: 'Programs', url: '/programs' },
          { name: 'Child Protection', url: '/programs/child-protection' },
        ]}
      />

      <PageHeader
        eyebrow="Core Initiative"
        title="Child Protection in Liberia"
        description="Safeguarding Liberian children from abuse, neglect, exploitation, and illicit drug exposure through grassroots community protection networks and legal advocacy."
        image={HeaderImage}
        alt="Child Protection Background"
      />

      <main>
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="The Challenge"
                title="Addressing Child Protection Challenges Across Liberia"
                description="In post-conflict Liberia, thousands of children face heightened vulnerabilities including physical abuse, child labor, sexual exploitation, and early exposure to substance abuse. Economic hardship and limited social safety nets often force children into informal labor or onto the streets. Kids Survivor Liberia (KSL) leads targeted child protection initiatives in Liberia aimed at creating safe, supportive environments where every child can grow free from harm."
                align="left"
              />
              <p className="mt-8 text-slate-700 leading-relaxed">
                Our holistic approach combines emergency protection services, legal advocacy, psychosocial counseling, and community training. By partnering with local chiefs, school principals, health workers, and county officials across all 15 counties, KSL establishes sustainable protection mechanisms at the community level.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="Program Pillars"
                title="Key Pillars of KSL Child Protection Programs"
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
                eyebrow="Community Results"
                title="Our Impact in Liberian Communities"
                align="left"
              />
              <p className="mt-6 text-slate-700 leading-relaxed">
                Through direct outreach, KSL has helped protect over 5,000 children across Liberia, re-enrolling dropouts in primary education, providing psychosocial counseling to traumatized youth, and hosting community forums on child welfare rights. Learn more about our county-level work on our <Link to="/counties" className="text-blue-600 hover:underline font-semibold">Liberia Counties Impact Page</Link>.
              </p>

              <div className="mt-12 bg-slate-950 px-8 py-12 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    Join Us in Protecting Liberia's Children
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Your monthly donation or volunteer partnership empowers KSL to respond to child safety emergencies immediately.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                  <Link
                    to="/donate"
                    className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-6 py-3 transition-colors"
                  >
                    Donate Now
                  </Link>
                  <Link
                    to="/volunteer"
                    className="inline-flex items-center justify-center border border-white/40 text-white hover:bg-white/10 font-semibold px-6 py-3 transition-colors"
                  >
                    Become a Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RelatedContent currentId="child-protection" />
    </div>
  );
}