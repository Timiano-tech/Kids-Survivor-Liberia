import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const PhotoCards = ({ items = [], columns = 'sm:grid-cols-2 lg:grid-cols-3', imageHeight = 'h-64', className = '' }) => {
  return (
    <div className={`grid gap-x-8 gap-y-12 ${columns} ${className}`}>
      {items.map((item, index) => {
        const Body = (
          <>
            <div className="group relative overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.alt || item.title}
                className={`w-full ${imageHeight} object-cover transition-transform duration-[900ms] group-hover:scale-105`}
                loading="lazy"
              />
              {item.tag && (
                <span className="absolute top-0 left-0 bg-slate-950/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-400">
                  {item.tag}
                </span>
              )}
            </div>

            <div className="mt-5 border-t border-slate-200 pt-5">
              <h3 className="text-heading-lg text-slate-900 leading-snug">{item.title}</h3>
              {item.meta && (
                <p className="mt-2 text-caption uppercase tracking-widest text-slate-500">{item.meta}</p>
              )}
              {item.description && (
                <p className="mt-3 text-body-sm leading-relaxed text-slate-600">{item.description}</p>
              )}
              {item.linkLabel && (
                <span className="mt-5 inline-flex items-center gap-2 text-caption font-bold uppercase tracking-widest text-blue-700">
                  {item.linkLabel}
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              )}
            </div>
          </>
        );

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className={item.to ? 'group' : ''}
          >
            {item.to ? (
              <Link to={item.to} className="block h-full">
                {Body}
              </Link>
            ) : (
              Body
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default PhotoCards;
