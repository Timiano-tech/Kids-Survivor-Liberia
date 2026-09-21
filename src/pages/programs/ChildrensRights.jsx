import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiFileText, FiUsers, FiArrowRight } from 'react-icons/fi';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import HeaderImage from '../../assets/Campaign.jpeg';

const pillars = [
  {
    icon: <FiFileText className="w-6 h-6" />,
    title: 'Right to Free & Quality Education',
    description:
      'Campaigning against illegal school fees, promoting girl-child enrollment, and partnering with schools to ensure safe, violence-free learning environments.',
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: 'Right to Identity & Birth Registration',
    description:
      'Assisting rural families with birth certificate registration so children can access formal healthcare, education, and legal protection.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Protection Against Gender-Based Violence',
    description:
      'Educating communities on child sexual exploitation, early marriage prevention, and gender equity through radio programs and town hall meetings.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: 'Youth Voice & Child Rights Clubs',
    description:
      'Establishing student-led Child Rights Clubs in schools to teach youth how to advocate for their rights, speak out against bullying, and report violations safely.',
  },
];

export default function ChildrensRights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Children's Rights in Liberia — Kids Survivor Liberia"
        description="Kids Survivor Liberia advocates for children's rights in Liberia, promoting awareness, policy engagement, and community education on the Liberian Children's Law."
        canonical="/programs/childrens-rights"
        keywords={[
          "children's rights in Liberia",
          'child rights advocacy Liberia',
          "Liberian Children's Law",
          'KSL rights advocacy',
          'Liberia youth rights',
          'child legal protection Liberia',
          'children welfare policy Liberia',
          'youth rights awareness',
        ]}
        breadcrumbs={[
          { name: 'Programs', url: '/programs' },
          { name: "Children's Rights", url: '/programs/childrens-rights' },
        ]}
      />

      <PageHeader
        eyebrow="Legal & Human Rights"
        title="Children's Rights Advocacy in Liberia"
        description="Promoting the fundamental rights of every Liberian child to education, protection, healthcare, identity, and active participation."
        image={HeaderImage}
        alt="Children's Rights Background"
      />

      <main>
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="The Framework"
                title="Advocating for Children's Rights Across Liberia"
                description="The United Nations Convention on the Rights of the Child (UNCRC) and the 2011 Liberian Children’s Law establish unambiguous rights for all children. Yet in practice, systemic barriers—such as birth registration gaps, lack of free primary schooling, gender discrimination, and harmful traditional practices—continue to violate the rights of children in Liberia."
                align="left"
              />
              <p className="mt-8 text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">Kids Survivor Liberia (KSL)</span> serves as a robust grassroots voice for child rights. We work alongside government ministries, traditional leaders, civil society organizations, and international partners to ensure laws protecting children are fully enforced and integrated into local community life.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="Focus Areas"
                title="Key Areas of Rights Advocacy"
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
                eyebrow="Governance"
                title="National Policy Alignment & Transparency"
                align="left"
              />
              <p className="mt-6 text-slate-700 leading-relaxed">
                KSL aligns its child rights programs with Liberia's Pro-Poor Agenda for Prosperity and Development (PAPD) and international human rights frameworks. Review our financial stewardship on our <Link to="/transparency" className="text-blue-600 hover:underline font-semibold">Transparency Page</Link> or collaborate on legal advocacy via our <Link to="/partnership" className="text-blue-600 hover:underline font-semibold">Partnership Page</Link>.
              </p>

              <div className="mt-12 bg-slate-950 px-8 py-12 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    Stand Up for Children's Rights
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Partner with KSL to fund rights training, policy advocacy, and community outreach across Liberia.
                  </p>
                </div>
                <Link
                  to="/partnership"
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-6 py-3 transition-colors shrink-0"
                >
                  Partner With KSL <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RelatedContent currentId="childrens-rights" />
    </div>
  );
}