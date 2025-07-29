import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const CounterSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const counters = [
    { end: 320, suffix: '%', label: 'IG Reach Increase', prefix: '+' },
    { end: 1, suffix: '', label: 'Google Rank in 3 Months', prefix: '#' },
    { end: 60, suffix: '+', label: 'Studios Transformed', prefix: '' },
    { end: 250, suffix: '%', label: 'Revenue Growth', prefix: '+' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500/5 via-transparent to-pink-500/5">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Results that <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Move</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
                <Counter
                  end={counter.end}
                  duration={2000}
                  start={inView}
                  prefix={counter.prefix}
                  suffix={counter.suffix}
                />
              </div>
              <p className="text-gray-400 text-sm md:text-base">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

type CounterProps = {
  end: number;
  duration: number;
  start: boolean;
  prefix: string;
  suffix: string;
};

const Counter = ({ end, duration, start, prefix = '', suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: any;
    const animate = (timestamp: any) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return <span>{prefix}{count}{suffix}</span>;
};

export default CounterSection;