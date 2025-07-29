import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import CounterSection from '../components/CounterSection';
import Quiz from '../components/Quiz';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [trustedRef, trustedInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Audience Growth',
      description: 'Explosive follower growth through strategic content and engagement tactics.',
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Convert social media traffic into paying members and loyal customers.',
    },
    {
      icon: Zap,
      title: 'Brand Identity',
      description: 'Stand out with a cohesive, professional brand that resonates with your audience.',
    },
    {
      icon: Users,
      title: 'Creator Collabs',
      description: 'Strategic partnerships with fitness influencers to amplify your reach.',
    },
  ];

  const trustedStudios = [
    'PulseFit', 'ZenHouse', 'CoreForge', 'Elevate Cycle'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Powering Boutique Fitness Brands
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                With Bold Digital Strategy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We help modern fitness studios go viral, get found, and grow revenue through Instagram and online marketing.
            </p>
            <Link to="/contact">
              <motion.button
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Build Your Presence</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            ref={trustedRef}
            initial={{ y: 50, opacity: 0 }}
            animate={trustedInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-8">Trusted by top-tier studios</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustedStudios.map((studio, index) => (
                <motion.div
                  key={studio}
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={trustedInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-16 bg-gradient-to-r from-white/10 to-white/5 rounded-lg flex items-center justify-center mb-2 hover:from-cyan-500/20 hover:to-pink-500/20 transition-all duration-300">
                    <span className="text-lg font-bold text-white">{studio}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Counter Section */}
      <CounterSection />

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            ref={benefitsRef}
            initial={{ y: 50, opacity: 0 }}
            animate={benefitsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Results that <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Move</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We don't just create content. We create movements that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={benefitsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <Quiz />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-transparent to-pink-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Power Up</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the boutique fitness studios that are dominating their local markets with our proven strategies.
            </p>
            <Link to="/contact">
              <motion.button
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold text-lg rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Transformation</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;