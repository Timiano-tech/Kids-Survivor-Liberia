import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../SectionHeading';

import ChildProtectionImage from '../../assets/Helping Children.jpeg';
import VulnerableChildrenImage from '../../assets/Feeding_CHildren.jpeg';
import YouthDevelopmentImage from '../../assets/Class Room.jpeg';
import ChildrensRightsImage from '../../assets/Children on the assembly.jpeg';

const programmes = [
  {
    slug: '/programs/child-protection',
    title: 'Child Protection',
    description:
      'Safe spaces, case management, and community committees that identify and respond to abuse, neglect, and exploitation.',
    image: ChildProtectionImage,
    alt: 'KSL child protection support',
  },
  {
    slug: '/programs/vulnerable-children',
    title: 'Vulnerable Children',
    description:
      'Food, shelter, medical screening, and counselling for children in informal settlements and rural villages.',
    image: VulnerableChildrenImage,
    alt: 'Children receiving food support from KSL',
  },
  {
    slug: '/programs/youth-development',
    title: 'Youth Development',
    description:
      'Digital literacy, vocational trades, and leadership mentorship that turn youth energy into livelihoods.',
    image: YouthDevelopmentImage,
    alt: 'Youth in a KSL digital skills class',
  },
  {
    slug: '/programs/childrens-rights',
    title: "Children's Rights",
    description:
      'Advocacy for enforcement of the Liberian Children’s Law and child justice reform at community level.',
    image: ChildrensRightsImage,
    alt: 'Children at a KSL rights assembly',
  },
];

export const ProgramGridSection = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Four Programmes, One Goal"
          description="Each programme addresses a different part of the cycle that keeps children and young people vulnerable. Together they move a child from immediate risk to long-term stability."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programmes.map((programme) => (
            <Link
              key={programme.slug}
              to={programme.slug}
              className="group flex flex-col bg-white border border-slate-200 hover:border-blue-700 transition-colors"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={programme.image}
                  alt={programme.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-heading-lg text-slate-900 mb-3">{programme.title}</h3>
                <p className="text-body-sm text-slate-600 leading-relaxed flex-1">
                  {programme.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-wider text-blue-700">
                  Explore
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramGridSection;
