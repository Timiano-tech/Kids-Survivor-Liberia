import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShield } from 'react-icons/fi';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import DonateCTA from '../../components/DonateCTA';
import RuleList from '../../components/visuals/RuleList';
import PillarCards from '../../components/visuals/PillarCards';
import ProcessSteps from '../../components/visuals/ProcessSteps';
import Timeline from '../../components/visuals/Timeline';
import StatBand from '../../components/visuals/StatBand';
import ImageFeature from '../../components/visuals/ImageFeature';
import HeaderImage from '../../assets/Campaign.jpeg';
import EducationRights from '../../assets/School assembly.jpeg';
import IdentityRights from '../../assets/Community_Outreach.jpeg';
import ProtectionRights from '../../assets/Community_Speech2.jpeg';
import YouthVoice from '../../assets/Students2.jpeg';
import RadioProgramme from '../../assets/Talking to children.jpeg';
import CommunityForum from '../../assets/Community_Outreach_Children.jpeg';

const pillars = [
  {
    title: 'Right to Free & Quality Education',
    image: EducationRights,
    tag: 'Focus 01',
    description:
      'Campaigning against illegal school fees, promoting girl-child enrollment, and partnering with schools to ensure safe, violence-free learning environments.',
    points: ['Opposition to illegal school fees', 'Girl-child enrollment drives', 'Safe school partnerships'],
  },
  {
    title: 'Right to Identity & Birth Registration',
    image: IdentityRights,
    tag: 'Focus 02',
    description:
      'Assisting rural families with birth certificate registration so children can access formal healthcare, education, and legal protection.',
    points: ['Birth certificate registration support', 'Access to formal healthcare', 'Legal protection unlocked'],
  },
  {
    title: 'Protection Against Gender-Based Violence',
    image: ProtectionRights,
    tag: 'Focus 03',
    description:
      'Educating communities on child sexual exploitation, early marriage prevention, and gender equity through radio programs and town hall meetings.',
    points: ['Child sexual exploitation awareness', 'Early marriage prevention', 'Gender equity sensitization'],
  },
  {
    title: 'Youth Voice & Child Rights Clubs',
    image: YouthVoice,
    tag: 'Focus 04',
    description:
      'Establishing student-led Child Rights Clubs in schools to teach youth how to advocate for their rights, speak out against bullying, and report violations safely.',
    points: ['Student-led rights clubs', 'Safe reporting channels', 'Anti-bullying peer education'],
  },
];

const advocacyPath = [
  {
    kicker: 'Stage 01',
    title: 'Listen',
    description: 'Community and school listening sessions surface where children’s rights are being denied in practice.',
  },
  {
    kicker: 'Stage 02',
    title: 'Educate',
    description: 'Radio programming and town hall meetings teach children and caregivers the rights they hold.',
  },
  {
    kicker: 'Stage 03',
    title: 'Document',
    description: 'Violations are documented with evidence and routed to traditional leaders, ministries, and law enforcement.',
  },
  {
    kicker: 'Stage 04',
    title: 'Change',
    description: 'Policy advocacy and public pressure convert documented violations into enforced protections.',
  },
];

const legalMilestones = [
  {
    period: 'International Framework',
    title: 'UN Convention on the Rights of the Child',
    description:
      'Establishes the baseline rights every child holds: education, protection, healthcare, identity, and participation. It is the reference point for all KSL child rights programming.',
  },
  {
    period: 'National Law',
    title: '2011 Liberian Children’s Law',
    description:
      'Codifies children’s rights in Liberian law, including the right to free primary education and protection from abuse and exploitation.',
  },
  {
    period: 'National Development',
    title: 'Pro-Poor Agenda for Prosperity and Development',
    description:
      'KSL aligns child rights advocacy to the PAPD, linking rights protection to poverty reduction, education access, and gender equality.',
  },
  {
    period: 'KSL Practice',
    title: 'Grassroots enforcement partnerships',
    description:
      'KSL works alongside ministries, traditional leaders, civil society, and international partners so rights protections are enforced in local community life.',
  },
];

const reach = [
  { value: 4, label: 'Rights Focus Areas', description: 'Education, identity, protection, and youth voice.' },
  { value: 2, label: 'Legal Instruments', description: 'UNCRC and the 2011 Liberian Children’s Law.' },
  { value: 3, label: 'Advocacy Channels', description: 'Schools, radio, and community town halls.' },
  { value: 15, label: 'Counties Reached', description: 'Rights work delivered with county stakeholders.' },
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
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="The Framework"
                title="Advocacy for children's rights"
                description="The United Nations Convention on the Rights of the Child (UNCRC) and the 2011 Liberian Children’s Law establish unambiguous rights for all children. Yet in practice, systemic barriers—such as birth registration gaps, lack of free primary schooling, gender discrimination, and harmful traditional practices—continue to violate the rights of children in Liberia."
                align="left"
              />
              <p className="mt-8 text-body-md leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-900">Kids Survivor Liberia (KSL)</span> serves as a robust grassroots voice for child rights. We work alongside government ministries, traditional leaders, civil society organizations, and international partners to ensure laws protecting children are fully enforced and integrated into local community life.
              </p>
            </div>

            <div className="mt-16 bg-slate-950 p-10 lg:p-14">
              <div className="flex items-center gap-5 mb-10">
                <span className="w-14 h-14 bg-blue-700 text-white flex items-center justify-center shrink-0">
                  <FiShield className="w-7 h-7" />
                </span>
                <div>
                  <p className="text-eyebrow text-yellow-400">Legal Foundations</p>
                  <h3 className="text-3xl font-semibold text-white tracking-tight">
                    The instruments we hold ourselves to
                  </h3>
                </div>
              </div>

              <Timeline items={legalMilestones} tone="dark" />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Focus Areas"
              title="Key areas of rights advocacy"
              description="Four focus areas that convert legal rights into everyday protection for Liberian children."
              className="mb-12"
            />
            <PillarCards pillars={pillars} columns="sm:grid-cols-2" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Approach"
              title="How advocacy creates change"
              description="Rights work only matters if a denied right becomes an enforced one. KSL advocacy runs through four stages."
              className="mb-14"
            />
            <ProcessSteps steps={advocacyPath} />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
            <ImageFeature
              image={RadioProgramme}
              eyebrow="Community Education"
              title="Rights awareness, in the languages people listen to"
              description="Rights are only meaningful when people understand them. KSL delivers child rights education through radio programming, school assemblies, and town hall meetings, so that children, caregivers, and leaders all understand what the law already guarantees them."
              imagePosition="left"
              points={[
                'Radio programmes on child rights and protection',
                'Town hall meetings open to the whole community',
                'Traditional leaders engaged as rights allies',
                'School assemblies used as awareness platforms',
              ]}
            />

            <ImageFeature
              image={CommunityForum}
              eyebrow="Youth Participation"
              title="Young people advocating for their own rights"
              description="Student-led Child Rights Clubs teach children to speak out about bullying, abuse, and discrimination, and give them safe channels for reporting violations they witness."
              imagePosition="right"
              stat={{ value: '4', label: 'Rights Focus Areas' }}
              points={[
                'Child Rights Clubs established in schools',
                'Structured safe reporting pathways',
                'Peer-to-peer anti-bullying education',
                'Youth representatives at community forums',
              ]}
            />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="Governance"
                title="National policy alignment and transparency"
                align="left"
              />
              <p className="mt-6 text-body-md leading-relaxed text-slate-600">
                KSL aligns its child rights programs with Liberia's Pro-Poor Agenda for Prosperity and Development (PAPD) and international human rights frameworks. Review our financial stewardship on our <Link to="/transparency" className="text-blue-600 hover:underline font-semibold">Transparency Page</Link> or collaborate on legal advocacy via our <Link to="/partnership" className="text-blue-600 hover:underline font-semibold">Partnership Page</Link>.
              </p>

              <div className="mt-14">
                <StatBand stats={reach} tone="light" divided />
              </div>

              <RuleList
                items={[
                  { label: 'Aligned', title: 'UNCRC', note: 'Every focus area maps to a Convention on the Rights of the Child article.' },
                  { label: 'Reach', title: 'Radio', note: 'National and community radio used for rights education.' },
                  { label: 'First', title: 'Safeguarding', note: 'A zero tolerance child safeguarding policy governs all KSL activity.' },
                ]}
                className="mt-14"
              />
            </div>
          </div>
        </section>
      </main>

      <DonateCTA
        eyebrow="Rights Advocacy"
        title="Stand up for children's rights"
        description="Partner with KSL to fund rights training, policy advocacy, and community outreach across Liberia."
        primaryLabel="Partner With KSL"
        primaryTo="/partnership"
        secondaryLabel="Read Our Policies"
        secondaryTo="/transparency"
      />

      <RelatedContent currentId="childrens-rights" />
    </div>
  );
}
