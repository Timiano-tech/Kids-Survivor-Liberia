import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

import slide1 from '../assets/Scroll3.jpeg';
import slide2 from '../assets/Youth2.jpeg';
import slide3 from '../assets/Scroll4.jpeg';
import slide4 from '../assets/Scroll2.jpeg';
import slide5 from '../assets/Community_Outreach.jpeg';
import slide6 from '../assets/Students2.jpeg';

const images = [
  { src: slide1, alt: 'KSL youth program in action' },
  { src: slide2, alt: 'Empowering young people across Liberia' },
  { src: slide3, alt: 'KSL community outreach' },
  { src: slide4, alt: 'KSL volunteers working with the community' },
  { src: slide5, alt: 'Kids Survivor Liberia community program' },
  { src: slide6, alt: 'Liberian students supported by KSL' },
];

// Drift speed in px per second; hovering eases the strip to a gentle stop
const DRIFT_SPEED = 32;

const CallToAction = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const speed = useRef(DRIFT_SPEED);
  const targetSpeed = useRef(DRIFT_SPEED);
  const inView = useInView(containerRef);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (reduceMotion || !inView || !trackRef.current) return;
    // Clamp delta so returning to a background tab doesn't cause a jump
    const dt = Math.min(delta, 64) / 1000;
    speed.current += (targetSpeed.current - speed.current) * Math.min(1, dt * 3);
    const loopWidth = trackRef.current.scrollWidth / 2;
    let next = x.get() - speed.current * dt;
    if (next <= -loopWidth) next += loopWidth;
    x.set(next);
  });

  return (
    <section className="bg-slate-50 border-t border-slate-200 py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-display-md sm:text-display-lg font-medium leading-[1.1] tracking-tight text-slate-900">
              Support Our Work
            </h2>
            <p className="mt-6 text-body-lg leading-relaxed text-slate-600 max-w-xl">
              Your donation supports our drug abuse prevention, rehabilitation, and youth
              programmes, which are aligned with Liberia&apos;s National Anti-Drugs Action Plan
              (NADAP) 2025–2030.
            </p>
            <div className="mt-10">
              <Link
                to="/donate"
                className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 px-8 py-4 text-button text-slate-900 transition-colors"
              >
                Donate
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div
            ref={containerRef}
            className="relative overflow-hidden"
            aria-label="Photos of our programs"
            onMouseEnter={() => { targetSpeed.current = 0; }}
            onMouseLeave={() => { targetSpeed.current = DRIFT_SPEED; }}
          >
            <motion.div ref={trackRef} className="flex w-max will-change-transform" style={{ x }}>
              {[...images, ...images].map((image, index) => (
                <div key={index} className="shrink-0 overflow-hidden mr-4">
                  <img
                    src={image.src}
                    alt={index < images.length ? image.alt : ''}
                    loading="lazy"
                    draggable={false}
                    className="h-[320px] sm:h-[420px] lg:h-[520px] w-[280px] sm:w-[360px] lg:w-[440px] object-cover border border-slate-200 transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              ))}
            </motion.div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
