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
    <section className="py-24 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-5 mix-blend-multiply"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase mb-4 shadow-sm border border-blue-100">
            <FiMessageSquare className="mr-2" />
            PROGRAM UPDATES & INSIGHTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Latest from Our Programs
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Updates on our NADAP and YTEI-aligned initiatives and their impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {latestNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 overflow-hidden transition-all duration-300 h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm">
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                    <FiCalendar className="mr-2 shrink-0 text-blue-500" />
                    {news.date}
                    <span className="mx-3 text-slate-300">•</span>
                    <FiUser className="mr-2 shrink-0 text-blue-500" />
                    {news.author}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-3 leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>

                  <div className="flex justify-start items-center pt-6 border-t border-slate-100">
                    <Link to={news.link} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold group/link">
                      Read Story
                      <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/blog">
            <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
              <span>View All Program Updates</span>
              <FiArrowRight className="ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
