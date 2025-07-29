import { motion } from 'framer-motion';
import { Calendar, DollarSign, MapPin, Search, TrendingUp, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const CaseStudies = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const caseStudies = [
    {
      name: 'ZenHouse Yoga',
      location: 'Delhi, India',
      image: 'https://images.pexels.com/photos/3822187/pexels-photo-3822187.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: Users, metric: '2.1k → 14.8k', label: 'Instagram Followers', period: '4 months' },
        { icon: TrendingUp, metric: '16.2k', label: 'Average Reel Views', period: 'ongoing' },
        { icon: Search, metric: '#1 Rank', label: 'Google "best yoga studio Delhi"', period: '3 months' },
        { icon: Calendar, metric: '+27%', label: 'Daily Appointments', period: 'ongoing' }
      ],
      highlights: [
        'Created branded reels series that consistently hit 15k+ views',
        'Optimized Google My Business with local SEO strategy',
        'Redesigned booking system with streamlined user experience',
        'Developed signature class content that increased retention by 45%'
      ],
      color: 'from-green-500'
    },
    {
      name: 'CoreForge CrossFit',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: Search, metric: '+210%', label: 'Google Traffic Increase', period: '6 months' },
        { icon: TrendingUp, metric: 'Viral', label: '"Stronger Every Day" Campaign', period: '2 months' },
        { icon: Users, metric: '512', label: 'Email Signups', period: '6 weeks' },
        { icon: DollarSign, metric: '+180%', label: 'Online Revenue', period: '6 months' }
      ],
      highlights: [
        'Complete website rebuild with technical SEO optimization',
        'Launched viral Instagram Reels series showcasing member transformations',
        'Implemented lead magnets including free workout plans and nutrition guides',
        'Created automated email sequences that convert at 34% rate'
      ],
      color: 'from-orange-500'
    },
    {
      name: 'Elevate Cycle Studio',
      location: 'Amsterdam, Netherlands',
      image: 'https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: TrendingUp, metric: '+320%', label: 'IG Story Ad ROI', period: '3 months' },
        { icon: Search, metric: '1st Page', label: '"spin studio Amsterdam"', period: '4 months' },
        { icon: Users, metric: '2.8k', label: 'IGTV Class Views', period: 'per session' },
        { icon: DollarSign, metric: '+250%', label: 'Membership Sales', period: '6 months' }
      ],
      highlights: [
        'Complete brand identity refresh with modern color palette and logo',
        'Launched successful IGTV fitness classes during lockdown',
        'Created high-converting Instagram Story ad campaigns',
        'Developed local SEO strategy that dominated Amsterdam fitness searches'
      ],
      color: 'from-purple-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Success Stories That
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Inspire Movement
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real studios. Real results. Real transformations that prove our strategies work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              className="mb-32 last:mb-0"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={study.image}
                      alt={study.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-20`}></div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-400">{study.location}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {study.name}
                  </h2>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <result.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-sm text-gray-400">{result.period}</span>
                        </div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-1`}>
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-300">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Achievements:</h3>
                    {study.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Numbers Don't <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Lie</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Across all our case studies, the results speak for themselves.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: '60+', label: 'Studios Transformed' },
              { metric: '250%', label: 'Average Revenue Growth' },
              { metric: '5M+', label: 'Social Media Impressions' },
              { metric: '95%', label: 'Client Retention Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Write Your <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Success Story</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful fitness studios that trusted PulsePresence to transform their digital presence.
            </p>
            <motion.button
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold text-lg rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Transformation</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudies;