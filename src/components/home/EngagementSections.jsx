import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../SectionHeading';
import AnimatedNumber from '../visuals/AnimatedNumber';
import { COUNTIES } from '../../data/counties';

import FieldImage from '../../assets/Zwedru_City.jpeg';
import SchoolImage from '../../assets/KSL_School.jpeg';

export const WhereWeWorkSection = () => {
  const active = COUNTIES.filter((county) => county.isActive);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Where We Work"
              title="Community Led, County by County"
              description="We do not parachute in. Each programme is designed with the communities who live it, delivered alongside county authorities, and built to continue after our teams step back."
            />

            <div className="mt-9 grid grid-cols-3 gap-4">
              <div className="border border-slate-200 px-4 py-5 text-center">
                <p className="font-serif text-stat-sm text-slate-900 leading-none">
                  <AnimatedNumber end={COUNTIES.length} duration={1.6} />
                </p>
                <p className="mt-2 text-caption uppercase tracking-wider text-slate-500">
                  Counties in footprint
                </p>
              </div>
              <div className="border border-blue-700 px-4 py-5 text-center bg-blue-700">
                <p className="font-serif text-stat-sm text-white leading-none">
                  <AnimatedNumber end={active.length} duration={1.6} />
                </p>
                <p className="mt-2 text-caption uppercase tracking-wider text-blue-100">
                  Active now
                </p>
              </div>
              <div className="border border-slate-200 px-4 py-5 text-center">
                <p className="font-serif text-stat-sm text-slate-900 leading-none">
                  <AnimatedNumber end={COUNTIES.length - active.length} duration={1.6} />
                </p>
                <p className="mt-2 text-caption uppercase tracking-wider text-slate-500">
                  Planned
                </p>
              </div>
            </div>

            <Link
              to="/counties"
              className="group mt-9 inline-flex items-center gap-2 text-button text-blue-700 hover:text-blue-800"
            >
              View all counties
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img
              src={FieldImage}
              alt="KSL field presence in Zwedru"
              className="w-full h-64 lg:h-80 object-cover"
              loading="lazy"
            />
            <img
              src={SchoolImage}
              alt="KSL school programme"
              className="w-full h-64 lg:h-80 object-cover mt-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const GetInvolvedSection = () => {
  const ways = [
    {
      to: '/donate',
      title: 'Give',
      description:
        'Bank transfer or mobile money. Every contribution funds meals, shelter, school fees, and counselling.',
      action: 'Donate now',
      image: FieldImage,
      alt: 'Supporting a KSL outreach',
    },
    {
      to: '/volunteer',
      title: 'Volunteer',
      description:
        'Teach prevention sessions, support events, or lend professional skills. Training and safeguarding briefing provided.',
      action: 'View roles',
      image: SchoolImage,
      alt: 'KSL volunteers in the field',
    },
    {
      to: '/partnership',
      title: 'Partner',
      description:
        'Align a foundation, corporate, or NGO programme with our six focus areas under NADAP and YTEI.',
      action: 'Partner with us',
      image: FieldImage,
      alt: 'KSL community partnership meeting',
    },
  ];

  return (
    <section className="bg-slate-950 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-eyebrow text-yellow-400">Get Involved</p>
            <h2 className="mt-3 text-display-md lg:text-display-lg text-white max-w-2xl leading-tight">
              Three ways to change a child&apos;s trajectory
            </h2>
          </div>
          <p className="text-body-md text-slate-400 md:max-w-sm">
            Contributions and partnerships are tracked internally and covered by our
            annual independent external audit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ways.map((way) => (
            <Link
              key={way.title}
              to={way.to}
              className="group flex flex-col bg-slate-900 border border-slate-800 hover:border-yellow-500 transition-colors"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={way.image}
                  alt={way.alt}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-heading-lg text-white mb-3">{way.title}</h3>
                <p className="text-body-sm text-slate-400 leading-relaxed flex-1">
                  {way.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-wider text-yellow-400">
                  {way.action}
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
