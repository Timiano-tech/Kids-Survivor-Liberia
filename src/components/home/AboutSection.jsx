import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../SectionHeading';
import AboutImage from '../../assets/KSL Company.jpeg';
import OutreachImage from '../../assets/Community_Outreach.jpeg';

export const AboutSection = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A National Non-Profit Built by Liberian Communities"
              description="Kids Survivor Liberia (KSL) is a community-driven organisation focused on the wellbeing of Liberia's most vulnerable populations. We work alongside traditional leaders, schools, and local authorities so that programmes are designed locally and owned locally."
            />

            <ul className="mt-8 space-y-3">
              {[
                'Drug abuse prevention and public awareness',
                'Child protection, shelter, and psychosocial support',
                'Education, vocational, and digital skills',
                'Rehabilitation and social reintegration',
                'Gender inclusion and economic empowerment of widows',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-yellow-500 mt-2.5 shrink-0" aria-hidden="true" />
                  <span className="text-body-md">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 text-button text-blue-700 hover:text-blue-800"
            >
              Read more about KSL
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={AboutImage}
              alt="Kids Survivor Liberia team at work"
              className="w-full h-64 lg:h-80 object-cover"
              loading="lazy"
            />
            <img
              src={OutreachImage}
              alt="KSL community outreach session"
              className="w-full h-64 lg:h-80 object-cover mt-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
