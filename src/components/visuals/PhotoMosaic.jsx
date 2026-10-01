import { motion } from 'framer-motion';

const PhotoMosaic = ({ photos = [], className = '' }) => {
  const [lead, ...rest] = photos;
  if (!lead) return null;

  return (
    <div className={`grid gap-4 lg:grid-cols-12 ${className}`}>
      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden bg-slate-100 lg:col-span-7"
      >
        <img
          src={lead.src}
          alt={lead.caption || ''}
          className="w-full h-80 sm:h-[26rem] lg:h-[36rem] object-cover transition-transform duration-[900ms] group-hover:scale-105"
          fetchPriority="high"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6 sm:p-8">
          <p className="text-white text-heading-md leading-snug">{lead.caption}</p>
          {lead.meta && (
            <p className="mt-2 text-caption uppercase tracking-widest text-yellow-400">{lead.meta}</p>
          )}
        </figcaption>
      </motion.figure>

      <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:grid-cols-1">
        {rest.map((photo, index) => (
          <motion.figure
            key={photo.src + index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            className="group relative overflow-hidden bg-slate-100"
          >
            <img
              src={photo.src}
              alt={photo.caption || ''}
              className="w-full h-48 sm:h-60 lg:h-full lg:max-h-[17.5rem] object-cover transition-transform duration-[900ms] group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5">
              <p className="text-white text-body-sm font-semibold leading-snug">{photo.caption}</p>
              {photo.meta && (
                <p className="mt-1 text-[10px] uppercase tracking-widest text-yellow-400">{photo.meta}</p>
              )}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
};

export default PhotoMosaic;
