import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle, FiEye, FiFlag } from 'react-icons/fi';
import SEO from '../../components/SEO';
import { COUNTIES } from '../../data/counties';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import DonateCTA from '../../components/DonateCTA';
import PillarCards from '../../components/visuals/PillarCards';
import ProcessSteps from '../../components/visuals/ProcessSteps';
import StatBand from '../../components/visuals/StatBand';
import PhotoBand from '../../components/visuals/PhotoBand';
import HeaderImage from '../../assets/Students.jpeg';
import ProtectionWalk from '../../assets/Community_Speech.jpeg';
import CommitteeMeeting from '../../assets/Community Leaders.jpeg';
import SafeHaven from '../../assets/Helping Children.jpeg';
import LegalAdvocacy from '../../assets/Community_Outreach.jpeg';

const pillars = [
  {
    title: 'Community Protection Committees',
    image: CommitteeMeeting,
    tag: 'Pillar 01',
    description:
      'Establishing grassroots child protection committees in rural and urban communities to monitor child welfare, identify at-risk youth, and coordinate swift interventions.',
    points: ['Village and town level committees', 'Early warning referrals', 'Local chiefs and principals engaged'],
  },
  {
    title: 'Substance Abuse Prevention',
    image: ProtectionWalk,
    tag: 'Pillar 02',
    description:
      'Conducting active anti-drug awareness campaigns in schools and youth hubs across Montserrado, Grand Bassa, Nimba, and surrounding counties to shield children from illegal substances.',
    points: ['School assembly sessions', 'Youth hub peer education', 'Community sensitization walks'],
  },
  {
    title: 'Safe Havens & Shelter Support',
    image: SafeHaven,
    tag: 'Pillar 03',
    description:
      'Providing temporary safe space referrals, emergency food assistance, and medical support for child victims of domestic abuse and displacement.',
    points: ['Emergency food and hygiene kits', 'Medical referrals and treatment', 'Safe space coordination'],
  },
  {
    title: 'Legal Rights & Policy Advocacy',
    image: LegalAdvocacy,
    tag: 'Pillar 04',
    description:
      'Advocating for the strict enforcement of the Liberian Children’s Law, ensuring perpetrator accountability and child justice reform.',
    points: ["Liberian Children’s Law enforcement", 'Child justice reform advocacy', 'Community legal sensitization'],
  },
];

const protectionFocus = [
  {
    label: 'Physical & Emotional Abuse',
    helper: 'Flagged by community committees, teachers, and neighbours.',
  },
  {
    label: 'Child Labour & Street Living',
    helper: 'Addressed through shelter referrals, feeding support, and school re-enrolment.',
  },
  {
    label: 'Sexual Exploitation',
    helper: 'Under-reported by nature, so awareness and confidential referral carry extra weight.',
  },
  {
    label: 'Early Drug Exposure',
    helper: 'Prevention campaigns target initiation risk in schools, youth hubs, and communities.',
  },
];

const responseCycle = [
  {
    kicker: 'Stage 01',
    title: 'Identify',
    description: 'Community committees, teachers, and youth hubs flag children showing abuse, neglect, or exploitation risk.',
  },
  {
    kicker: 'Stage 02',
    title: 'Protect',
    description: 'Immediate safe space referrals, emergency food, hygiene kits, and medical support for the child.',
  },
  {
    kicker: 'Stage 03',
    title: 'Support',
    description: 'Psychosocial counselling and re-enrolment in primary education to stabilise the child long term.',
  },
  {
    kicker: 'Stage 04',
    title: 'Advocate',
    description: 'Case escalation to traditional leaders and law enforcement so perpetrators are held accountable.',
  },
];

const results = [
  { value: 5000, suffix: '+', label: 'Children Protected', description: 'Directly reached through KSL child protection outreach.' },
  { value: COUNTIES.length, label: 'Counties Covered', description: 'Protection work delivered alongside local authorities.' },
  { value: 4, label: 'Protection Pillars', description: 'Prevention, shelter, education, and legal advocacy.' },
  { value: 3, label: 'NADAP Pillars', description: 'Prevention, treatment, and reintegration addressed.' },
];

const fieldPhotos = [
  { src: ProtectionWalk, caption: 'Community sensitization on child protection rights', meta: 'Outreach' },
  { src: CommitteeMeeting, caption: 'Meeting with community leaders and chiefs', meta: 'Protection committees' },
  { src: SafeHaven, caption: 'Direct care and support for vulnerable children', meta: 'Safe havens' },
  { src: LegalAdvocacy, caption: 'Advocacy and awareness in local communities', meta: 'Policy' },
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
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="The Challenge"
                title="Where child protection is needed most"
                description="In post-conflict Liberia, thousands of children face heightened vulnerabilities including physical abuse, child labor, sexual exploitation, and early exposure to substance abuse. Economic hardship and limited social safety nets often force children into informal labor or onto the streets. Kids Survivor Liberia (KSL) leads targeted child protection initiatives in Liberia aimed at creating safe, supportive environments where every child can grow free from harm."
                align="left"
              />
              <p className="mt-8 text-body-md leading-relaxed text-slate-600">
                Our holistic approach combines emergency protection services, legal advocacy, psychosocial counseling, and community training. By partnering with local chiefs, school principals, health workers, and county officials across all 15 counties, KSL establishes sustainable protection mechanisms at the community level.
              </p>
            </div>

            <div className="mt-16 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 bg-yellow-500 text-slate-900 flex items-center justify-center shrink-0">
                    <FiAlertTriangle className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-eyebrow text-blue-700">Harm Categories</p>
                    <h3 className="text-heading-lg text-slate-900 leading-snug">
                      Where child protection is most urgently needed
                    </h3>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Our protection committees triage every case against four harm categories, so that outreach and
                  response capacity is directed where children are most at risk.
                </p>
                <ul className="space-y-5">
                  {protectionFocus.map((item, index) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-950 text-caption font-bold text-yellow-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-heading-md text-slate-900 mb-1">{item.label}</p>
                        <p className="text-body-sm text-slate-500 leading-relaxed">{item.helper}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950 p-10 lg:p-12">
                <div className="w-14 h-14 bg-blue-700 text-white flex items-center justify-center mb-7">
                  <FiEye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-5 tracking-tight">
                  Why early identification changes everything
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Most harm begins as a quiet pattern rather than a single incident. Trained committees and school
                  staff who know the warning signs are the single most effective protection system available to a
                  Liberian child.
                </p>
                <ul className="space-y-4">
                  {[
                    'Referral pathways that reach a response within 72 hours',
                    'Safeguarding training for teachers, youth workers, and community leaders',
                    'Case follow-up that tracks the child through recovery and re-enrolment',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-4 text-slate-200 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 mt-2 shrink-0 bg-yellow-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 pt-7 border-t border-slate-800 flex items-center gap-3">
                  <FiFlag className="w-4 h-4 text-yellow-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Liberian Children’s Law
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Program Pillars"
              title="Four pillars of child protection"
              description="Four connected pillars that move a child from risk to safety and long-term stability."
              className="mb-12"
            />
            <PillarCards pillars={pillars} columns="sm:grid-cols-2" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Response Model"
              title="How a child is protected"
              description="Every KSL protection case moves through the same four stage cycle, regardless of which pillar identifies it."
              className="mb-14"
            />
            <ProcessSteps steps={responseCycle} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              eyebrow="In The Field"
              title="Protection work across Liberia"
              className="mb-12"
            />
            <PhotoBand photos={fieldPhotos} />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                eyebrow="Community Results"
                title="Our impact in Liberian communities"
                align="left"
              />
              <p className="mt-6 text-body-md leading-relaxed text-slate-600">
                Through direct outreach, KSL has helped protect over 5,000 children across Liberia, re-enrolling dropouts in primary education, providing psychosocial counseling to traumatized youth, and hosting community forums on child welfare rights. Learn more about our county-level work on our <Link to="/counties" className="text-blue-600 hover:underline font-semibold">Liberia Counties Impact Page</Link>.
              </p>

              <div className="mt-14">
                <StatBand stats={results} tone="light" divided />
              </div>
            </div>
          </div>
        </section>
      </main>

      <DonateCTA
        eyebrow="Protect A Child"
        title="Join us in protecting Liberia's children"
        description="Your monthly gift or volunteer partnership keeps KSL able to respond to child safety emergencies immediately."
        secondaryLabel="Become a Volunteer"
        secondaryTo="/volunteer"
      />

      <RelatedContent currentId="child-protection" />
    </div>
  );
}
