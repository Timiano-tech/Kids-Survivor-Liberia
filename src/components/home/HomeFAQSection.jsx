import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

export const HomeFAQSection = () => {
  // FAQ Data updated to reflect organizational focus
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "How is KSL aligned with Liberia's National Anti-Drugs Action Plan (NADAP)?",
      answer: "KSL implements NADAP 2025-2030 through national-based drug use prevention, early intervention, rehabilitation, and reintegration programs. Our work focuses on drug demand reduction, stigma reduction, and promoting public health approaches to substance abuse.",
      open: false,
      links: [
        { text: "Learn about our NADAP alignment", path: "/programs" },
        { text: "View NADAP 2025-2030 framework", path: "/programs" }
      ]
    },
    {
      id: 2,
      question: "What populations does KSL specifically serve?",
      answer: "KSL focuses on vulnerable populations including children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men. Our interventions are inclusive, rights-based, and community-driven, addressing intersecting challenges of drug abuse, poverty, and gender vulnerability.",
      open: false,
      links: [
        { text: "See our target populations", path: "/programs" },
        { text: "Learn about our GESI approach", path: "/programs" }
      ]
    },
    {
      id: 3,
      question: "How does KSL contribute to the Youth Transformation & Empowerment Initiative (YTEI)?",
      answer: "KSL advances YTEI priorities by strengthening youth leadership and civic engagement, expanding education and vocational pathways, supporting psychosocial well-being, and positioning young people as agents of change and community role models.",
      open: false,
      links: [
        { text: "Explore our youth programs", path: "/programs" },
        { text: "Learn about YTEI alignment", path: "/Programs" }
      ]
    },
    {
      id: 4,
      question: "What are KSL's core programmatic pillars?",
      answer: "Our work is organized around five pillars: 1) Drug Abuse Prevention & Public Awareness, 2) Rehabilitation & Social Reintegration, 3) Education & Skills Development, 4) Gender, Protection & Social Inclusion, and 5) Community Engagement & Peacebuilding.",
      open: false,
      links: [
        { text: "Explore all program pillars", path: "/programs" },
        { text: "View our strategic framework", path: "/about" }
      ]
    },
    {
      id: 5,
      question: "How does KSL ensure community ownership of programs?",
      answer: "We implement community-driven interventions through partnerships with traditional leaders, local authorities, and civil society. Our programs emphasize volunteer training, community ownership, and social cohesion initiatives that contribute to crime reduction and peacebuilding.",
      open: false,
      links: [
        { text: "Learn about community partnerships", path: "/partnerships" },
        { text: "See our community impact", path: "/impact" }
      ]
    },
    {
      id: 6,
      question: "What cross-cutting themes guide KSL's work?",
      answer: "Our programs integrate: Child & Youth Safeguarding, Gender Equality & Social Inclusion (GESI), Human Rights & Dignity, Community Ownership & Sustainability, and Accountability & Transparency. These ensure comprehensive, rights-based approaches to all interventions.",
      open: false,
      links: [
        { text: "Learn about our values", path: "/about" },
        { text: "View our safeguarding policy", path: "/programs" }
      ]
    }
  ]);

  // Toggle FAQ function
  const toggleFAQ = (id) => {
    setFaqItems(faqItems.map(item =>
      item.id === id ? { ...item, open: !item.open } : { ...item, open: false }
    ));
  };

  // Auto-close other FAQs when one opens
  useEffect(() => {
    const openCount = faqItems.filter(item => item.open).length;
    if (openCount > 1) {
      const firstOpenId = faqItems.find(item => item.open)?.id;
      setFaqItems(faqItems.map(item =>
        item.id === firstOpenId ? { ...item, open: true } : { ...item, open: false }
      ));
    }
  }, [faqItems]);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Learn more about our NADAP and YTEI-aligned approach to drug prevention and youth empowerment
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-slate-100 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors flex items-start gap-3">
                  <span className="text-blue-400 mt-1 flex-shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <span className="text-blue-600 font-bold ml-4">{faq.open ? '−' : '+'}</span>
              </div>

              <motion.div
                initial={false}
                animate={{ height: faq.open ? 'auto' : 0, opacity: faq.open ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pl-7 mt-3">
                  <p className="text-slate-600 leading-relaxed">
                    <span className="text-slate-400 font-bold mr-2 hidden sm:inline">A.</span>
                    {faq.answer}
                  </p>

                  {faq.links && (
                    <div className="flex flex-wrap gap-4 pt-4 mt-4 border-t border-slate-100">
                      {faq.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.path}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                        >
                          <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-blue-600 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left">
                            {link.text}
                          </span>
                          <FiChevronRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
