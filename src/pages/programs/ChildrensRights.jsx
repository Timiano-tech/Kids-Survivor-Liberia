import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import DonateCTA from '../../components/DonateCTA';
import PillarCards from '../../components/visuals/PillarCards';
import ProcessSteps from '../../components/visuals/ProcessSteps';
import Timeline from '../../components/visuals/Timeline';
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
    description:
      'Campaigning against illegal school fees, encouraging girls to enrol in school, and working with schools to make them safe and free from violence.',
    points: ['Opposition to illegal school fees', 'Girl-child enrolment drives', 'Safe school partnerships'],
  },
  {
    title: 'Right to Identity & Birth Registration',
    image: IdentityRights,
    description:
      'Helping rural families register births so children can access healthcare, education, and legal protection.',
    points: ['Birth registration support', 'Access to healthcare', 'Access to legal protection'],
  },
  {
    title: 'Protection Against Gender-Based Violence',
    image: ProtectionRights,
    description:
      'Educating communities on child sexual exploitation, early marriage, and gender equality through radio programmes and town hall meetings.',
    points: ['Child sexual exploitation awareness', 'Early marriage prevention', 'Gender equality sensitization'],
  },
  {
    title: 'Youth Voice & Child Rights Clubs',
    image: YouthVoice,
    description:
      'Setting up student-led Child Rights Clubs in schools where children learn about their rights, speak out against bullying, and report violations safely.',
    points: ['Student-led rights clubs', 'Safe reporting channels', 'Anti-bullying peer education'],
  },
];

const advocacyPath = [
  {
    title: 'Listen',
    description: 'Listening sessions in communities and schools show us where children’s rights are not being respected.',
  },
  {
    title: 'Educate',
    description: 'Radio programmes and town hall meetings help children and caregivers understand their rights.',
  },
  {
    title: 'Document',
    description: 'Violations are recorded and referred to traditional leaders, ministries, and law enforcement.',
  },
  {
    title: 'Advocate',
    description: 'We raise documented cases with decision-makers and push for existing protections to be enforced.',
  },
];

const legalMilestones = [
  {
    period: 'International',
    title: 'UN Convention on the Rights of the Child',
    description:
      'Sets out the rights every child holds, including education, protection, healthcare, identity, and participation. All KSL child rights work is based on it.',
  },
  {
    period: 'National law',
    title: '2011 Liberian Children’s Law',
    description:
      'Sets out children’s rights in Liberian law, including the right to free primary education and protection from abuse and exploitation.',
  },
  {
    period: 'National development',
    title: 'Pro-Poor Agenda for Prosperity and Development',
    description:
      'KSL aligns its child rights work with the PAPD, which links children’s rights to poverty reduction, access to education, and gender equality.',
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
        title="Children's Rights"
        description="Promoting the rights of every Liberian child to education, protection, healthcare, identity, and participation."
        image={HeaderImage}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionHeading title="About this programme" />
              <div className="mt-6 space-y-5 text-body-md leading-relaxed text-slate-600">
                <p>
                  The UN Convention on the Rights of the Child (UNCRC) and the 2011 Liberian Children&rsquo;s Law set
                  out clear rights for all children. In practice, many children in Liberia are still denied these
                  rights because of gaps in birth registration, school fees, gender discrimination, and harmful
                  traditional practices.
                </p>
                <p>
                  Kids Survivor Liberia (KSL) speaks up for children&rsquo;s rights at community level. We work with
                  government ministries, traditional leaders, civil society organisations, and international partners
                  so that the laws protecting children are respected in everyday community life.
                </p>
              </div>

              <h3 className="mt-14 mb-8 text-heading-lg text-slate-900">Legal framework</h3>
              <Timeline items={legalMilestones} />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What we do"
              description="Our children's rights work covers four areas."
              className="mb-12"
            />
            <PillarCards pillars={pillars} columns="sm:grid-cols-2" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How we work"
              description="Our advocacy work follows these steps."
              className="mb-14"
            />
            <ProcessSteps steps={advocacyPath} />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
            <ImageFeature
              image={RadioProgramme}
              title="Community education"
              description="We share information on children's rights through radio programmes, school assemblies, and town hall meetings, so that children, caregivers, and community leaders know what the law guarantees."
              imagePosition="left"
              points={[
                'Radio programmes on child rights and protection',
                'Town hall meetings open to the whole community',
                'Working with traditional leaders',
                'Awareness sessions at school assemblies',
              ]}
            />

            <ImageFeature
              image={CommunityForum}
              title="Child Rights Clubs"
              description="Student-led Child Rights Clubs help children speak out about bullying, abuse, and discrimination, and give them safe ways to report problems."
              imagePosition="right"
              points={[
                'Clubs set up in schools',
                'Safe ways to report concerns',
                'Peer education on bullying',
                'Young people represented at community forums',
              ]}
            />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionHeading title="Policy and accountability" />
              <p className="mt-6 text-body-md leading-relaxed text-slate-600">
                KSL aligns its child rights work with Liberia&rsquo;s Pro-Poor Agenda for Prosperity and Development
                (PAPD) and international human rights frameworks, and all of our activities are governed by a zero
                tolerance child safeguarding policy. You can review our finances on the{' '}
                <Link to="/transparency" className="text-blue-700 hover:underline font-semibold">
                  Transparency page
                </Link>{' '}
                or work with us on advocacy through the{' '}
                <Link to="/partnership" className="text-blue-700 hover:underline font-semibold">
                  Partnership page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <DonateCTA
        title="Support children's rights in Liberia"
        description="Partner with KSL to fund rights training, advocacy, and community outreach across Liberia."
        primaryLabel="Partner With KSL"
        primaryTo="/partnership"
        secondaryLabel="Read Our Policies"
        secondaryTo="/transparency"
      />

      <RelatedContent currentId="childrens-rights" />
    </div>
  );
}
