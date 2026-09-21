import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

import BlogImage1 from '../../assets/Campaign3.jpeg';
import KSL_School from '../../assets/KSL_School.jpeg';
import TreatmentImage from '../../assets/Free_Medicals9.jpeg';

export const LatestNewsSection = () => {
  const latestNews = [
    {
      id: 1,
      title: "Meaningful Awareness Campaign in Gbarnga, Bong County",
      excerpt: "Kids Survivor Liberia recently led a meaningful awareness campaign reaching children and families with vital information on child safety, education, health, and positive life choices. Through community talks and interactive youth sessions, the team created a safe space for learning, open dialogue, and empowerment.",
      category: "Community Outreach",
      date: "Apr 15, 2026",
      author: "KSL Team",
      image: BlogImage1,
      link: "/blog"
    },
    {
      id: 2,
      title: "Free Medical Outreach Serving At-Risk Youth in Buchanan",
      excerpt: "Kids Survivor Liberia, in partnership with The Mary Hand Organization, recently held a free medical outreach serving about 175 young people in Buchanan City, Grand Bassa County, providing vital treatments for common illnesses and conditions linked to substance abuse.",
      category: "Health & Wellbeing",
      date: "Apr 15, 2026",
      author: "KSL Team",
      image: TreatmentImage,
      link: "/blog"
    },
    {
      id: 3,
      title: "KIDS SURVIVOR LIBERIA PRIMARY & ELEMENTARY SCHOOL (KSL)",
      excerpt: "KIDS SURVIVOR LIBERIA Primary & Elementary School (KSL) is located in Wee Statutory District, Compound #3, Grand Bassa County, Liberia. In alignment with our mission, KSL provides free educational opportunities for children from marginalized communities, especially those from low-income families who cannot afford the high cost of school fees. Many of these children are left without access to education due to financial hardship. Through our program, we aim to bridge this gap by offering free learning opportunities, giving every child a chance to learn, grow, and build a better future. We are committed to empowering the next generation through education, regardless of their background or economic status.",
      category: "Education",
      date: "Apr 04, 2026",
      author: "KSL Team",
      image: KSL_School,
      link: "/blog"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 border border-blue-100 text-button tracking-wide uppercase mb-4">
            <FiMessageSquare className="mr-2" />
            Program Updates & Insights
          </span>
          <h2 className="text-[1.5rem] sm:text-display-md lg:text-display-lg font-medium text-slate-900">Latest from Our Programs</h2>
          <p className="mt-3 md:mt-4 text-[0.9rem] md:text-body-md text-slate-600 max-w-2xl mx-auto">
            Updates on our NADAP and YTEI-aligned initiatives and their impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {latestNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border border-slate-200 hover:border-blue-300 transition-colors h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-700 text-white px-3.5 py-1.5 text-caption tracking-wider uppercase">
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center text-caption font-semibold uppercase tracking-wider text-slate-500 mb-4">
                    <FiCalendar className="mr-2 shrink-0 text-blue-600" />
                    {news.date}
                    <span className="mx-3 text-slate-300">•</span>
                    <FiUser className="mr-2 shrink-0 text-blue-600" />
                    {news.author}
                  </div>

                  <h3 className="text-heading-md font-medium text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors line-clamp-3">
                    {news.title}
                  </h3>

                  <p className="text-slate-600 text-body-md mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>

                  <div className="flex justify-start items-center pt-5 border-t border-slate-100">
                    <Link to={news.link} className="inline-flex items-center text-button text-blue-700 hover:text-blue-800 group/link">
                      Read Story
                      <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog" className="inline-flex items-center px-6 py-3 bg-white text-blue-700 border border-blue-700 text-button hover:bg-blue-50 transition-colors">
            <span>View All Program Updates</span>
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
