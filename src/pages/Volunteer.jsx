import { useEffect, useState } from 'react';
import { FiShield, FiHeart, FiTarget, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import TeamImg from '../assets/Team.jpeg';
import 'react-toastify/dist/ReactToastify.css';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const volunteerPillars = [
    {
      pillar: "Pillar 1",
      title: "Drug Abuse Prevention & Public Awareness",
      description: "Lead community and school based prevention campaigns, youth advocacy, and 'Say No to Drugs' initiatives aligned with NADAP 2025-2030",
      icon: <FiShield className="w-6 h-6" />
    },
    {
      pillar: "Pillar 2",
      title: "Rehabilitation & Social Reintegration",
      description: "Provide psychosocial support, assist with skills development, and support reintegration pathways for drug affected individuals",
      icon: <FiHeart className="w-6 h-6" />
    },
    {
      pillar: "Pillar 3",
      title: "Education & Skills Development",
      description: "Support education programs, vocational training, and life skills development for youth, adolescent girls, and vulnerable populations",
      icon: <FiAward className="w-6 h-6" />
    },
    {
      pillar: "Pillar 4",
      title: "Gender & Social Inclusion",
      description: "Empower adolescent girls at risk, support widows' economic inclusion, and assist vulnerable elderly men",
      icon: <FiUsers className="w-6 h-6" />
    },
    {
      pillar: "Pillar 5",
      title: "Community Engagement & Peacebuilding",
      description: "Facilitate community partnerships, crime prevention initiatives, and social cohesion activities",
      icon: <FiGlobe className="w-6 h-6" />
    }
  ];

  const volunteerRoles = [
    {
      category: "YTEI Alignment",
      title: "Youth Leadership Facilitator",
      description: "Strengthen youth leadership, civic engagement, and positive youth development in alignment with YTEI priorities",
      icon: <FiTarget className="w-5 h-5" />
    },
    {
      category: "NADAP Support",
      title: "Drug Prevention Educator",
      description: "Conduct early intervention, awareness campaigns, and peer education supporting NADAP 2025-2030 implementation",
      icon: <FiShield className="w-5 h-5" />
    },
    {
      category: "Skills Development",
      title: "Vocational Training Assistant",
      description: "Teach digital, entrepreneurial, and livelihood skills to youth, widows, and vulnerable populations",
      icon: <FiAward className="w-5 h-5" />
    },
    {
      category: "Psychosocial Support",
      title: "Community Counselor",
      description: "Provide emotional support, stigma reduction assistance, and psychosocial recovery guidance",
      icon: <FiHeart className="w-5 h-5" />
    }
  ];

  const values = [
    "Inclusion & Equity",
    "Dignity & Protection",
    "Prevention & Empowerment",
    "Partnership & Participation",
    "Integrity & Accountability"
  ];

  const faqs = [
    { q: "How does KSL align with national initiatives?", a: "All volunteer work supports Youth Transformation & Empowerment Initiative (YTEI) and National Anti-Drugs Action Plan (NADAP) 2025-2030 priorities through community driven interventions." },
    { q: "What training is provided to volunteers?", a: "We provide comprehensive training in drug prevention, psychosocial support, child protection, and community engagement methodologies aligned with our strategic pillars." },
    { q: "Can I volunteer remotely?", a: "Most roles require community presence, but some advocacy and awareness campaign support can be done remotely. Contact us to discuss options." },
    { q: "What's the impact measurement process?", a: "We use participatory monitoring systems tracking outcomes aligned with YTEI and NADAP indicators, with regular feedback from community stakeholders." }
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
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Join Our Team"
          title="Volunteer With KSL"
          description="Join us in transforming lives and building a drug free, empowered Liberia through strategic volunteerism aligned with national initiatives."
          image={TeamImg}
          alt="KSL Background"
        />

        <main>
          {/* Strategic Mandate & Vision */}
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-white border border-slate-200 p-8 sm:p-10 shadow-sm h-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-4 flex items-center">
                    <span className="w-8 h-px bg-blue-700 mr-3"></span>
                    Our Mandate
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 mb-6">Strategic Focus</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Kids Survivor Liberia (KSL) exists to address intersecting challenges of drug abuse,
                    poverty, gender vulnerability, youth marginalization, and age-related neglect through
                    integrated prevention, protection, rehabilitation, and empowerment strategies rooted
                    in community partnership and national policy alignment.
                  </p>
                </div>

                <div className="bg-blue-700 border border-blue-800 p-8 sm:p-10 h-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-100 mb-4 flex items-center">
                    <span className="w-8 h-px bg-blue-100 mr-3"></span>
                    Our Vision
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">A Resilient Liberia</h2>
                  <p className="text-blue-50 leading-relaxed">
                    We envision a Liberia where children, adolescent girls, youth, widows, and elderly men
                    live in dignity, have equitable access to education and economic opportunities, are
                    protected from drugs, violence, and exploitation, and actively contribute to sustainable
                    development and social cohesion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Programmatic Pillars */}
          <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="What We Focus On"
                title="Core Programmatic Pillars"
                description="Our strategic areas of intervention where volunteers can make the most significant impact on communities."
                className="mb-12"
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {volunteerPillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 p-8 shadow-sm hover:border-blue-300 transition-colors"
                  >
                    <div className="flex flex-col mb-6">
                      <div className="w-14 h-14 bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center mb-4 shadow-sm">
                        {pillar.icon}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                        {pillar.pillar}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 leading-snug">{pillar.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Volunteer Opportunities */}
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-950 px-6 py-14 sm:px-12">
                <SectionHeading
                  tone="dark"
                  eyebrow="Get Involved"
                  title="Volunteer Opportunities"
                  description="Discover roles aligned with the Youth Transformation & Empowerment Initiative (YTEI) and NADAP 2025–2030."
                  className="mb-12"
                />
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {volunteerRoles.map((role, index) => (
                    <div
                      key={index}
                      className="bg-slate-900 border border-slate-700 p-8"
                    >
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 bg-blue-950 border border-blue-500/40 px-3 py-2">
                          {role.category}
                        </span>
                        <div className="p-2.5 bg-blue-700 text-white">
                          {role.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{role.title}</h3>
                      <p className="text-slate-300 leading-relaxed mb-8 text-sm">{role.description}</p>
                      <div className="border-t border-slate-700 pt-6">
                        <ul className="text-sm text-slate-300 space-y-3">
                          <li className="flex items-center gap-3">
                            <FiTarget className="text-blue-300 w-5 h-5 shrink-0" />
                            Minimum commitment: 3 months
                          </li>
                          <li className="flex items-center gap-3">
                            <FiShield className="text-blue-300 w-5 h-5 shrink-0" />
                            Comprehensive training provided
                          </li>
                          <li className="flex items-center gap-3">
                            <FiUsers className="text-blue-300 w-5 h-5 shrink-0" />
                            Community based approach
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Guiding Values */}
          <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Our Principles"
                title="Guiding Values"
                className="mb-10"
              />
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {values.map((value, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-5 py-3 bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:border-blue-300 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-sm bg-blue-700 mr-3"></span>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Support"
                title="Frequently Asked Questions"
                className="mb-12"
              />
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 p-6 hover:border-blue-300 transition-colors cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-slate-900 text-lg flex items-start gap-3">
                        <span className="text-blue-700 mt-1 flex-shrink-0">Q.</span>
                        {faq.q}
                      </h3>
                      <span className="text-blue-700 font-semibold ml-4">{openFaq === index ? '−' : '+'}</span>
                    </div>

                    {openFaq === index && (
                      <p className="text-slate-600 leading-relaxed pl-7 mt-3">
                        <span className="text-slate-400 font-semibold mr-2 hidden sm:inline">A.</span>
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CTABanner
            title="Join Our Strategic Mission"
            description="Become part of a movement creating lasting change. Your contribution supports national priorities for youth development, drug demand reduction, gender equality, and social protection in Liberia."
            primaryLabel="Contact Volunteer Coordinator"
            primaryTo="/contact"
            secondaryLabel="support@ksliberia.org"
            secondaryHref="mailto:support@ksliberia.org"
          />
        </main>
      </div>
    </>
  );
};

export default Volunteer;