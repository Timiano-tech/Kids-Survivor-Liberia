import { useState, useEffect } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import FlowChain from '../components/visuals/FlowChain';
import RuleList from '../components/visuals/RuleList';
import Accordion from '../components/visuals/Accordion';
import DonateImage from '../assets/Children5.jpeg';
import GivingImage from '../assets/Sharing_Food.jpg';

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = useState(false);
  const bankAccount = {
    bankName: 'Guaranty TrustBank (Liberia) Limited',
    accountName: 'Kids Survivor Liberia',
    accountNumber: '203334045210',
    currency: 'USD',
  };

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(bankAccount.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const donateMeta = [
    { value: 'USD', label: 'Transfer Currency' },
    { value: 4, label: 'Giving Steps' },
    { value: 3, label: 'Other Ways to Give' },
    { value: 15, label: 'Counties Funded' },
  ];

  const accountRows = [
    { label: 'Bank', value: bankAccount.bankName },
    { label: 'Account Name', value: bankAccount.accountName },
    { label: 'Currency', value: bankAccount.currency },
  ];

  const completionSteps = [
    { kicker: 'Step 01', title: 'Transfer', description: 'Send the amount to the account on this page.' },
    { kicker: 'Step 02', title: 'Reference', description: 'Include your name so we can identify the gift.' },
    { kicker: 'Step 03', title: 'Receipt', description: 'Email your receipt to donate@ksliberia.org.' },
  ];

  const supports = [
    { title: 'Prevention sessions', note: 'School and community campaigns.' },
    { title: 'Rehabilitation care', note: 'Counselling and family reunification.' },
    { title: 'Education', note: 'School places, materials, and uniforms.' },
    { title: 'Protection work', note: 'Safeguarding for girls, widows, and elderly men.' },
  ];

  const givingSteps = [
    { kicker: 'Stage 01', title: 'You Give', description: 'Transfer directly into the KSL account.' },
    { kicker: 'Stage 02', title: 'We Confirm', description: 'Your receipt is recorded against your name.' },
    { kicker: 'Stage 03', title: 'It Reaches Programmes', description: 'Funds move through internal controls to field work.' },
    { kicker: 'Stage 04', title: 'Impact Is Reported', description: 'Tracked within the annual independent audit cycle.' },
  ];

  const otherWays = [
    { title: 'Monthly giving', note: 'Recurring transfers give programmes a predictable base.' },
    { title: 'Corporate partnership', note: 'Matched donations and employee volunteering days.' },
    { title: 'In-kind donations', note: 'School supplies, equipment, and professional services.' },
  ];

  const faqs = [
    {
      question: 'How do I get a receipt for my donation?',
      answer:
        'Email your bank transfer receipt to donate@ksliberia.org with your name in the transfer reference. Our team records the contribution and confirms it back to you.',
    },
    {
      question: 'Can I direct my donation to a specific programme?',
      answer:
        'Yes. Mention the programme or county in your transfer reference and confirm the restriction with the partnership team before sending funds.',
    },
    {
      question: 'How is my donation accounted for?',
      answer:
        'Contributions pass through internal financial controls and transparent procurement, and are covered by the annual independent external audit available to partners. See the Transparency page for more detail.',
    },
    {
      question: 'Can my organisation partner with KSL formally?',
      answer:
        'Yes. Formal partnerships, matched giving, and multi-year grant arrangements are covered on the Partnership page, or email support@ksliberia.org to start a conversation.',
    },
  ];

  return (
    <>
      <SEO
        title="Donate to Kids Survivor Liberia — Support Vulnerable Children"
        description="Donate to Kids Survivor Liberia. Your contributions fund drug abuse prevention, child protection, and youth empowerment programs across Liberia. Safe, transparent donations."
        canonical="/donate"
        keywords={[
          'donate to Kids Survivor Liberia',
          'KSL donations',
          'donate Liberia children',
          'sponsor a child Liberia',
          'help vulnerable children Liberia',
          'charity donation Liberia',
          'online donation Liberia NGO',
          'support Liberian youth',
          'bank transfer KSL',
          'Orange Money Liberia donation',
        ]}
        breadcrumbs={[{ name: 'Donate', url: '/donate' }]}
      />

      <PageHeader
        eyebrow="Make An Impact"
        title="Give directly, see where it lands"
        description="One bank account, a named receipt, and reports you can audit."
        image={DonateImage}
        meta={donateMeta}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-3">
                <SectionHeading
                  eyebrow="Ways To Give"
                  title="Bank transfer"
                  description="KSL receives donations by direct transfer into the account below."
                  className="mb-12"
                />

                <div className="bg-slate-950 px-7 py-9 sm:px-10">
                  <dl className="divide-y divide-slate-800">
                    {accountRows.map((row) => (
                      <div key={row.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-8 sm:py-5">
                        <dt className="text-caption uppercase tracking-widest text-slate-500 sm:w-36">{row.label}</dt>
                        <dd className="text-body-md text-white">{row.value}</dd>
                      </div>
                    ))}
                    <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-8">
                      <dt className="text-caption uppercase tracking-widest text-slate-500 sm:w-36">Account Number</dt>
                      <dd className="flex flex-wrap items-center justify-between gap-4">
                        <span className="font-mono text-heading-lg tracking-wide text-white tabular-nums">
                          {bankAccount.accountNumber}
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyAccountNumber}
                          className="inline-flex items-center gap-2 border border-white/25 px-4 py-2 text-caption uppercase tracking-widest text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
                        >
                          {copied ? <FiCheck className="h-3.5 w-3.5" /> : <FiCopy className="h-3.5 w-3.5" />}
                          {copied ? 'Copied' : 'Copy'}
                        </button>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-14">
                  <FlowChain steps={completionSteps} />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="relative h-full min-h-[24rem]">
                  <img
                    src={GivingImage}
                    alt="Children sharing a meal supported by KSL"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className="text-caption uppercase tracking-[0.18em] text-yellow-400">What Your Gift Supports</p>
                    <ul className="mt-5 space-y-3">
                      {supports.map((item) => (
                        <li key={item.title} className="border-t border-white/20 pt-3">
                          <p className="text-body-md font-semibold text-white">{item.title}</p>
                          <p className="text-body-sm text-slate-300">{item.note}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Your Donation"
              title="How a contribution moves"
              description="Four stages, the same path for every gift."
              className="mb-14"
            />
            <FlowChain steps={givingSteps} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              eyebrow="Give Differently"
              title="Other ways to support"
              className="mb-14"
            />
            <RuleList items={otherWays} tone="dark" columns="sm:grid-cols-2 lg:grid-cols-3" />

            <div className="mt-20 border-t border-slate-800 pt-16">
              <SectionHeading
                tone="dark"
                eyebrow="Donor Support"
                title="Donation questions"
                className="mb-12"
              />
              <div className="max-w-3xl">
                <Accordion items={faqs} tone="dark" />
              </div>
              <p className="mt-12 max-w-3xl text-body-sm text-slate-400">
                Still deciding? Email{' '}
                <a href="mailto:donate@ksliberia.org" className="font-medium text-yellow-400 hover:underline">
                  donate@ksliberia.org
                </a>{' '}
                and the donation team will advise on the best way to give.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Donate;
