import { useEffect } from 'react';
import {
  FiUsers,
  FiHeart,
  FiBook,
  FiActivity,
  FiShield,
  FiTarget,
  FiUserCheck
} from 'react-icons/fi';
import HeaderImage from '../assets/Partner_Header.jpeg';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';

const Partnership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipTypes = [
    {
      title: 'Drug Abuse Prevention',
      description: 'Support community and school based prevention campaigns and youth led advocacy initiatives',
      icon: <FiTarget />
    },
    {
      title: 'Rehabilitation & Recovery',
      description: 'Fund psychosocial support and reintegration pathways for drug affected individuals',
      icon: <FiHeart />
    },
    {
      title: 'Youth Empowerment',
      description: 'Sponsor vocational training, life skills, and entrepreneurship programs for vulnerable youth',
      icon: <FiUsers />
    },
    {
      title: 'Gender & Protection',
      description: 'Support targeted empowerment of adolescent girls, widows, and vulnerable elderly men',
      icon: <FiShield />
    },
    {
      title: 'Education Access',
      description: 'Provide scholarships and non-formal learning opportunities for marginalized populations',
      icon: <FiBook />
    },
    {
      title: 'Community Resilience',
      description: 'Partner in peacebuilding, crime prevention, and social cohesion initiatives',
      icon: <FiActivity />
    }
  ];

  const benefits = [
    "Contribute to national priorities (YTEI & NADAP 2025–2030)",
    "Support drug abuse prevention and rehabilitation",
    "Empower vulnerable children, youth, and women",
    "Promote social inclusion and community resilience",
    "Receive detailed impact measurement reports",
    "Enhance corporate social responsibility alignment",
    "Join community driven sustainable development",
    "Receive official partnership recognition and certificates"
  ];

  return (
    <>
      <SEO
        title="Partner with Kids Survivor Liberia — Collaboration Opportunities"
        description="Partner with Kids Survivor Liberia to support child protection, drug abuse prevention, and youth development initiatives across Liberian communities."
        canonical="/partnership"
        keywords={[
          'KSL partnerships',
          'partner with Liberia NGO',
          'corporate sponsorship Liberia',
          'NADAP partner Liberia',
          'child protection partnerships',
          'youth development sponsors',
          'CSR Liberia organizations',
          'community development partners Liberia',
        ]}
        breadcrumbs={[{ name: 'Partnership', url: '/partnership' }]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Collaborate With Us"
          title="Strategic Partnership"
          description="Join Kids Survivor Liberia in implementing integrated prevention, protection, rehabilitation, and empowerment strategies for children, adolescents, youth, widows, and vulnerable populations."
          image={HeaderImage}
          alt="Strategic Partnership"
        />

        <main>
          {/* Introduction */}
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Why Partner With Us"
                title="Partner in Our Mission to Prevent Drug Abuse and Protect Vulnerable Populations"
                description="Join Kids Survivor Liberia in implementing integrated prevention, protection, rehabilitation, and empowerment strategies for children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men. Together, we contribute to national priorities under the Youth Transformation & Empowerment Initiative (YTEI) and National Anti-Drugs Action Plan (NADAP) 2025–2030."
              />
            </div>
          </section>

          {/* Partnership Types */}
          <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Opportunities"
                title="Strategic Partnership Areas"
                className="mb-12"
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {partnershipTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 p-8 shadow-sm hover:border-blue-300 transition-colors"
                  >
                    <div className="w-14 h-14 bg-blue-50 text-blue-700 border border-blue-200 rounded-sm flex items-center justify-center mb-6 text-2xl">
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{type.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="What You Gain"
                title="Partnership Benefits"
                className="mb-12"
              />
              <div className="bg-slate-950 px-6 py-12 sm:px-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <span className="w-10 h-10 bg-blue-700 text-white flex items-center justify-center shrink-0">
                        <FiUserCheck className="w-5 h-5" />
                      </span>
                      <span className="text-slate-300 text-sm leading-relaxed mt-1 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* National Alignment */}
          <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Policy Alignment"
                title="Aligned with National Priorities"
                className="mb-12"
              />
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 border border-blue-200 rounded-sm flex items-center justify-center mb-6">
                    <FiUsers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Youth Transformation & Empowerment Initiative (YTEI)
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Strengthening youth leadership, expanding education access, supporting psychosocial well-being, and positioning young people as agents of change in their communities.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 border border-blue-200 rounded-sm flex items-center justify-center mb-6">
                    <FiShield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    National Anti-Drugs Action Plan (NADAP) 2025–2030
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Contributing to drug demand reduction through prevention, early intervention, rehabilitation, and community based approaches that promote public health and social reintegration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <CTABanner
            title="Join Our Strategic Partnership Network"
            description="Partner with us to implement community driven interventions that prevent drug abuse, protect vulnerable populations, promote education, develop livelihoods, and build resilient communities aligned with national development goals."
            primaryLabel="Contact Partnership Team"
            primaryTo="/contact"
            secondaryLabel="Partner via Email"
            secondaryHref="mailto:support@ksliberia.org"
          />
        </main>
      </div>
    </>
  );
};

export default Partnership;