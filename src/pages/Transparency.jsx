import { useEffect } from 'react';
import { FiFileText } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import DonateCTA from '../components/DonateCTA';
import PillarCards from '../components/visuals/PillarCards';
import FlowChain from '../components/visuals/FlowChain';
import ImageFeature from '../components/visuals/ImageFeature';
import Accordion from '../components/visuals/Accordion';
import HeaderImage from '../assets/KSL_Team.jpeg';
import BoardOversight from '../assets/KSL_Team2.jpeg';
import Safeguarding from '../assets/Community_Children.jpeg';
import Inclusion from '../assets/Girls_Emp.png';
import FieldMonitoring from '../assets/Community_Outreach.jpeg';
import TeamReview from '../assets/Team_meeting.jpeg';
import FieldRecords from '../assets/Free_Medicals9.jpeg';
import GovernanceMeeting from '../assets/Team_discussion.jpeg';

const Transparency = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      title: 'Financial Integrity',
      image: TeamReview,
      description:
        'We use internal financial controls and transparent procurement, and our accounts are independently audited every year. Audit reports are available to all partners.',
    },
    {
      title: 'Governance',
      image: GovernanceMeeting,
      description:
        'An independent Board of Directors oversees our strategy, risk management, and compliance with national and international laws.',
    },
    {
      title: 'Monitoring and Evaluation',
      image: FieldMonitoring,
      description:
        'We monitor and evaluate our programmes against the YTEI and NADAP frameworks and report the results to our partners.',
    },
  ];

  const accountabilityCycle = [
    {
      title: 'Receiving Funds',
      description: 'Contributions are received, recorded, and assigned to a programme area.',
    },
    {
      title: 'Spending',
      description: 'All spending goes through internal controls and transparent procurement.',
    },
    {
      title: 'Programme Delivery',
      description: 'Funds are used for field programmes in prevention, protection, and youth development.',
    },
    {
      title: 'Monitoring & Evaluation',
      description: 'Each activity is tracked against YTEI and NADAP indicators.',
    },
    {
      title: 'Audit & Reporting',
      description: 'Independent external audits and annual reports are shared with partners.',
    },
  ];

  const policies = [
    {
      title: 'Child Safeguarding Policy',
      image: Safeguarding,
      description:
        'KSL has zero tolerance for child abuse or exploitation. The policy applies to all KSL activities, and concerns can be reported through internal channels.',
    },
    {
      title: 'Anti-Fraud & Corruption Policy',
      image: FieldRecords,
      description:
        'Financial controls, independent auditing, and a whistleblowing procedure help ensure that contributions are used for their stated purpose.',
    },
    {
      title: 'Gender Equality & Social Inclusion Policy',
      image: Inclusion,
      description:
        'Guidelines to ensure that all marginalised groups we serve can access, take part in, and benefit from our programmes equally.',
    },
  ];

  const faqs = [
    {
      question: 'How can I request KSL audited financial statements?',
      answer:
        'Annual independent external audits are available to all partners. Email support@ksliberia.org with your request and our team will provide the most recent audited financial statements and annual impact reports.',
    },
    {
      question: 'Does KSL produce annual impact reports?',
      answer:
        'Yes. Annual impact reporting runs alongside the independent external audit cycle, and reports are released to partners on request rather than published publicly.',
    },
    {
      question: 'Who provides oversight of KSL?',
      answer:
        'An independent Board of Directors provides oversight of strategic alignment, risk management, and compliance with national and international laws.',
    },
    {
      question: 'How does KSL protect children in its programmes?',
      answer:
        'Our Child Safeguarding Policy applies across all KSL activities with zero tolerance for child abuse or exploitation. Concerns can be raised directly with the partnership team through the contact page.',
    },
    {
      question: 'How are programmes measured?',
      answer:
        'Evidence-based monitoring and evaluation systems track every intervention against the Youth Transformation & Empowerment Initiative (YTEI) and NADAP 2025–2030 frameworks.',
    },
    {
      question: 'What happens if misconduct is reported?',
      answer:
        'Anti-Fraud & Corruption procedures provide whistleblower mechanisms alongside strict financial controls and independent auditing, so reports are handled through channels independent of the programme team involved.',
    },
  ];

  return (
    <>
      <SEO
        title="Transparency & Accountability — Kids Survivor Liberia"
        description="Kids Survivor Liberia is committed to transparency, accountability, and good governance. View our financial reports, safeguarding policies, and governance standards."
        canonical="/transparency"
        keywords={[
          'KSL transparency',
          'Liberia NGO accountability',
          'child safeguarding policy',
          'financial integrity KSL',
          'good governance Liberia',
          'NGO annual report Liberia',
          'anti-corruption Liberia',
          'donor accountability Liberia',
        ]}
        breadcrumbs={[{ name: 'Transparency & Accountability', url: '/transparency' }]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          title="Transparency & Accountability"
          description="How Kids Survivor Liberia manages funds, provides oversight, and reports on its work to partners and the communities we serve."
          image={HeaderImage}
        />

        <main>
          {/* Core Principles */}
          <section className="bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading title="Our Approach to Accountability" className="mb-12" />
              <PillarCards pillars={principles} columns="md:grid-cols-3" />
            </div>
          </section>

          {/* Accountability Cycle */}
          <section className="bg-slate-950 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                tone="dark"
                title="How Donations Are Managed"
                description="Specific audited figures are shared with partners on request rather than published on this page."
                className="mb-12"
              />
              <FlowChain steps={accountabilityCycle} tone="dark" />
            </div>
          </section>

          {/* Board Oversight */}
          <section className="bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ImageFeature
                title="Board of Directors"
                description="KSL is overseen by an independent Board of Directors, which reviews our strategy, risks, and compliance, and holds the organisation to the policies described on this page."
                image={BoardOversight}
                points={['Strategic oversight', 'Risk management', 'Legal and policy compliance', 'Accountability to partners']}
              />
            </div>
          </section>

          {/* Policies & Documents */}
          <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading title="Our Policies" className="mb-12" />
              <PillarCards pillars={policies} columns="md:grid-cols-3" />
            </div>
          </section>

          {/* Reports & Downloads */}
          <section className="bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-950 px-6 py-12 sm:px-12 lg:px-16">
                <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                  <div className="text-center md:w-2/3 md:text-left">
                    <h2 className="text-heading-lg text-white mb-4">Annual Reports and Financial Statements</h2>
                    <p className="text-slate-400 leading-relaxed">
                      To request our latest audited financial statements or annual report, email
                      support@ksliberia.org.
                    </p>
                  </div>
                  <div className="shrink-0 md:w-auto">
                    <a
                      href="mailto:support@ksliberia.org"
                      className="inline-flex items-center justify-center gap-3 bg-blue-700 px-7 py-3.5 text-body-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-800"
                    >
                      <FiFileText className="h-5 w-5" />
                      Request Documents
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accountability in the field */}
          <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading title="Frequently Asked Questions" className="mb-12" />
              <div className="max-w-3xl">
                <Accordion items={faqs} />
              </div>
            </div>
          </section>
        </main>

        <DonateCTA
          title="Support Our Work"
          description="All donations go through our internal financial controls and are covered by our annual independent external audit. Contact us if you would like to see the statements."
          primaryLabel="Donate Now"
          secondaryLabel="Request Documents"
          secondaryHref="mailto:support@ksliberia.org"
        />
      </div>
    </>
  );
};

export default Transparency;
