import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiX } from 'react-icons/fi';

const VideoCards = ({ items = [], tone = 'light', columns = 'sm:grid-cols-2 lg:grid-cols-3' }) => {
  const [activeSrc, setActiveSrc] = useState(null);
  const isDark = tone === 'dark';

  return (
    <>
      <div className={`grid gap-10 ${columns}`}>
        {items.map((item, index) => (
          <motion.figure
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group"
          >
            <button
              type="button"
              onClick={() => setActiveSrc(item.videoSrc)}
              className="relative block w-full overflow-hidden bg-slate-900 text-left"
              aria-label={`Play ${item.title}`}
            >
              <img
                src={item.poster}
                alt={item.title}
                className="h-60 w-full object-cover opacity-85 transition-opacity duration-500 group-hover:opacity-100"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-slate-950/30 transition-colors duration-500 group-hover:bg-slate-950/15">
                <span className="flex h-14 w-14 items-center justify-center bg-yellow-500 text-slate-900 transition-transform duration-500 group-hover:scale-105">
                  <FiPlay className="ml-0.5 h-6 w-6" />
                </span>
              </span>
              {item.meta && (
                <span className="absolute bottom-0 left-0 bg-slate-950/85 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-yellow-400">
                  {item.meta}
                </span>
              )}
            </button>

            <figcaption className={`mt-5 border-t pt-5 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
              <h3 className={`text-heading-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
              {item.description && (
                <p className={`mt-2 text-body-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              )}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {activeSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveSrc(null)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={() => setActiveSrc(null)}
              className="absolute -top-10 right-0 inline-flex items-center gap-2 text-caption uppercase tracking-widest text-slate-300 transition-colors hover:text-white"
            >
              <FiX className="h-4 w-4" />
              Close
            </button>
            <video src={activeSrc} controls autoPlay playsInline className="w-full">
              <source src={activeSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCards;
