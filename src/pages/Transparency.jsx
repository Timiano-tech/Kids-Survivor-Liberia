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

const Transparency = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      title: 'Financial Integrity',
      tag: 'Principle 01',
      image: TeamReview,
      description:
        'Maintained through rigorous internal controls, transparent procurement processes, and annual independent external audits available to all partners.',
      points: ['Rigorous internal controls', 'Transparent procurement', 'Annual independent external audits'],
    },
    {
      title: 'Ethical Governance',
      tag: 'Principle 02',
      image: BoardOversight,
      description:
        'Oversight provided by an independent Board of Directors ensuring strategic alignment, risk management, and compliance with national and international laws.',
      points: ['Independent Board oversight', 'Risk management', 'National and international compliance'],
    },
    {
      title: 'Programmatic Rigor',
      tag: 'Principle 03',
      image: FieldMonitoring,
      description:
        'Evidence-based monitoring and evaluation systems track every intervention against the YTEI and NADAP frameworks to guarantee measurable outcomes.',
      points: ['Evidence-based M&E systems', 'YTEI and NADAP tracking', 'Measurable outcome reporting'],
    },
  ];

  const accountabilityCycle = [
    {
      title: 'Partner Funding',
      description: 'Contributions are received, recorded, and designated to a specific programme area.',
    },
    {
      title: 'Controlled Expenditure',
      description: 'Spending passes through internal controls and transparent procurement processes.',
    },
    {
      title: 'Programme Delivery',
      description: 'Funds are deployed to field programmes across prevention, protection, and empowerment.',
    },
    {
      title: 'Monitoring & Evaluation',
      description: 'Evidence-based systems track every intervention against YTEI and NADAP indicators.',
    },
    {
      title: 'Audit & Reporting',
      description: 'Independent external audits and annual impact reports are made available to partners.',
    },
  ];

  const policies = [
    {
      title: 'Child Safeguarding Policy',
      tag: 'Policy 01',
      image: Safeguarding,
      description:
        'Our comprehensive framework ensuring zero tolerance for child abuse or exploitation across all KSL activities.',
      points: ['Zero tolerance for abuse or exploitation', 'Applies to all KSL activities', 'Reportable through internal channels'],
    },
    {
      title: 'Anti-Fraud & Corruption',
      tag: 'Policy 02',
      image: FieldRecords,
      description:
        'Strict financial controls, independent auditing, and whistleblower mechanisms so contributions are applied to their stated purpose.',
      points: ['Strict financial controls', 'Independent auditing', 'Whistleblower mechanisms'],
    },
    {
      title: 'Gender Equality & Social Inclusion',
      tag: 'Policy 03',
      image: Inclusion,
      description:
        'Guiding principles ensuring equitable access, participation, and benefit for all marginalized groups we serve.',
      points: ['Equitable access to services', 'Meaningful participation', 'Equitable benefit distribution'],
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
          eyebrow="Our Commitment"
          title="Transparency & Accountability"
          description="We hold ourselves to the highest international standards of governance, financial integrity, and program delivery to ensure maximum impact for the communities we serve."
          image={HeaderImage}
          meta={[
            { value: 3, label: 'Core Principles' },
            { value: 5, label: 'Control Stages' },
            { value: 3, label: 'Core Policies' },
            { value: 'Annual', label: 'Independent Audit' },
          ]}
        />

        <main>
          {/* Core Principles */}
          <section className="bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Core Principles"
                title="How we remain accountable"
                description="Three commitments shape every decision KSL makes with donor resources and community trust."
                className="mb-12"
              />
              <PillarCards pillars={principles} columns="md:grid-cols-3" />
            </div>
          </section>

          {/* Accountability Cycle */}
          <section className="bg-slate-950 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                tone="dark"
                eyebrow="Our Process"
                title="How funds are tracked"
                description="Every contribution moves through the same five-stage accountability chain before it is reported back to partners."
                className="mb-12"
              />
              <FlowChain steps={accountabilityCycle} tone="dark" />

              <p className="mt-10 max-w-3xl text-body-sm leading-relaxed text-slate-500">
                A description of KSL accountability processes. Specific audited figures are shared with partners on
                request rather than published on this page.
              </p>
            </div>
          </section>

          {/* Board Oversight */}
          <section className="bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ImageFeature
                eyebrow="Independent Oversight"
                title="Governance from an independent board"
                description="Oversight is provided by an independent Board of Directors, holding the organisation to the commitments published across this page."
                image={BoardOversight}
                points={['Strategic alignment oversight', 'Risk management', 'Legal and policy compliance', 'Partner accountability']}
              />
            </div>
          </section>

          {/* Policies & Documents */}
          <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Governance Standards"
                title="Core organizational policies"
                description="Three frameworks protect beneficiaries and uphold trust."
                className="mb-12"
              />
              <PillarCards pillars={policies} columns="md:grid-cols-3" />
            </div>
          </section>

          {/* Reports & Downloads */}
          <section className="bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-950 px-6 py-12 sm:px-12 lg:px-16">
                <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                  <div className="text-center md:w-2/3 md:text-left">
                    <span className="mb-4 inline-block text-caption uppercase tracking-[0.18em] text-yellow-400">
                      Open Records
                    </span>
                    <h2 className="text-heading-lg text-white mb-4">Annual reports &amp; financials</h2>
                    <p className="text-slate-400 leading-relaxed">
                      Request our latest audited financial statements or annual impact reports below.
                    </p>
                  </div>
                  <div className="shrink-0 md:w-auto">
                    <a
                      href="mailto:support@ksliberia.org"
                      className="inline-flex items-center justify-center gap-3 bg-yellow-500 px-7 py-3.5 text-body-sm font-semibold whitespace-nowrap text-slate-900 transition-colors hover:bg-yellow-400"
                    >
                      <FiFileText className="h-5 w-5" />
                      Request Documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accountability in the field */}
          <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Donor & Partner Questions"
                title="Frequently Asked Questions"
                description="The questions partners ask most often about audits, safeguarding, and reporting."
                className="mb-12"
              />
              <div className="max-w-3xl">
                <Accordion items={faqs} />
              </div>
            </div>
          </section>
        </main>

        <DonateCTA
          eyebrow="Fund With Confidence"
          title="Every Gift Is Accounted For"
          description="Contributions pass through internal financial controls and transparent procurement, and are covered by our annual independent external audit. Ask us for the statements."
          primaryLabel="Donate Now"
          secondaryLabel="Request Documentation"
          secondaryHref="mailto:support@ksliberia.org"
        />
      </div>
    </>
  );
};

export default Transparency;
