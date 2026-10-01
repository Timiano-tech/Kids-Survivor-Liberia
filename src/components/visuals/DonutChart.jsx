import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

const PALETTE = ['#1d4ed8', '#eab308', '#0f172a', '#60a5fa', '#f59e0b', '#94a3b8'];

const DonutChart = ({
  segments = [],
  size = 220,
  thickness = 28,
  centerValue,
  centerLabel,
  tone = 'light',
  className = '',
}) => {
  const isDark = tone === 'dark';
  const total = segments.reduce((sum, segment) => sum + segment.value, 0) || 1;
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  const arcs = segments.map((segment, index) => {
    const length = (segment.value / total) * circumference;
    const consumed = segments
      .slice(0, index)
      .reduce((sum, earlier) => sum + (earlier.value / total) * circumference, 0);

    return { ...segment, index, length, dashOffset: -consumed };
  });

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-8 ${className}`}>
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={isDark ? '#1e293b' : '#e2e8f0'}
            strokeWidth={thickness}
          />
          {arcs.map((arc) => (
            <motion.circle
              key={arc.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={arc.color || PALETTE[arc.index % PALETTE.length]}
              strokeWidth={thickness}
              strokeLinecap="butt"
              initial={{ strokeDasharray: `0 ${circumference}` }}
              whileInView={{ strokeDasharray: `${arc.length} ${circumference - arc.length}` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: arc.index * 0.15, ease: 'easeOut' }}
              strokeDashoffset={arc.dashOffset}
            />
          ))}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span
            className={`font-serif text-display-sm tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}
            role="img"
            aria-label={typeof centerValue === 'number' ? centerValue.toLocaleString() : centerValue}
          >
            {typeof centerValue === 'number' ? (
              <AnimatedNumber end={centerValue} duration={1.8} />
            ) : (
              centerValue
            )}
          </span>
          {centerLabel && (
            <span
              className={`mt-1 text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
            >
              {centerLabel}
            </span>
          )}
        </div>
      </div>

      <ul className="w-full space-y-4">
        {segments.map((segment, index) => (
          <li key={segment.label} className="flex items-start gap-4">
            <span
              className="w-3.5 h-3.5 shrink-0 mt-1"
              style={{ backgroundColor: segment.color || PALETTE[index % PALETTE.length] }}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-4">
                <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  {segment.label}
                </span>
                <span className={`shrink-0 text-sm font-bold tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {typeof segment.value === 'number' ? (
                    <AnimatedNumber end={segment.value} unit={segment.unit} duration={1.2} />
                  ) : (
                    <>{segment.value}{segment.unit || ''}</>
                  )}
                </span>
              </div>
              {segment.description && (
                <p className={`text-xs leading-relaxed mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {segment.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonutChart;
