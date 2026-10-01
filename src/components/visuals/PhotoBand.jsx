import { motion } from 'framer-motion';

const PhotoBand = ({ photos = [], tone = 'dark', columns = 'sm:grid-cols-2 lg:grid-cols-4', className = '' }) => {
  const isDark = tone === 'dark';

  return (
    <div className={`grid gap-px ${columns} ${isDark ? 'bg-slate-800' : 'bg-slate-200'} ${className}`}>
      {photos.map((photo, index) => (
        <motion.figure
          key={photo.src + index}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className={`group relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={photo.src}
              alt={photo.caption || 'Kids Survivor Liberia program'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/30 transition-colors duration-500 group-hover:bg-slate-950/50"></div>
          </div>

          {photo.caption && (
            <figcaption
              className={`absolute inset-x-0 bottom-0 p-5 ${
                isDark ? 'bg-slate-950/85 text-white' : 'bg-slate-950/80 text-white'
              }`}
            >
              <p className="text-sm font-semibold leading-snug">{photo.caption}</p>
              {photo.meta && (
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-400">{photo.meta}</p>
              )}
            </figcaption>
          )}
        </motion.figure>
      ))}
    </div>
  );
};

export default PhotoBand;
