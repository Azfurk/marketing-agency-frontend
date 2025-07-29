import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Package, Palette, Search } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Services = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Instagram,
      title: 'Instagram Domination',
      description: 'Craft high-converting IG content calendars, reels, carousel designs, hashtag strategies & influencer collabs.',
      features: [
        'Custom content calendar creation',
        'Viral-ready Reels production',
        'Strategic hashtag research',
        'Influencer partnership setup',
        'Story templates & highlights',
        'Engagement strategy optimization'
      ],
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Search,
      title: 'SEO Rebuild',
      description: 'Rank your studio for local & national searches with optimized site structure, content, keywords, and backlinks.',
      features: [
        'Technical SEO audit & fixes',
        'Local SEO optimization',
        'Keyword research & strategy',
        'Content optimization',
        'Google My Business setup',
        'Backlink building campaigns'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Palette,
      title: 'Brand Glow-Up',
      description: 'Visual identity refresh: color palettes, logo tweaks, IG highlights, website copy rewrite, bio & CTA.',
      features: [
        'Complete brand identity refresh',
        'Logo design & optimization',
        'Color palette development',
        'Instagram visual guidelines',
        'Website copy rewrite',
        'Bio & CTA optimization'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Package,
      title: 'Studio Content Packs',
      description: 'Monthly delivery of images, stories, reels, captions, and templates tailored to your studio vibe.',
      features: [
        'Monthly content deliverables',
        'Custom photo & video assets',
        'Pre-written captions',
        'Story & post templates',
        'Seasonal campaign content',
        'Brand-aligned graphics'
      ],
      color: 'from-green-500 to-teal-500'
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
              Not Just Marketing.
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                It is a Movement.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We create digital experiences that turn browsers into believers and followers into members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            ref={servicesRef}
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`p-4 bg-gradient-to-r ${service.color} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  className="flex items-center text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From strategy to execution, we've perfected the art of fitness brand transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Audit',
                description: 'Deep dive into your brand, audience, and current performance to identify opportunities.'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Create a custom roadmap with clear goals, timelines, and success metrics.'
              },
              {
                step: '03',
                title: 'Execute & Optimize',
                description: 'Launch campaigns, create content, and continuously optimize for maximum ROI.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  {process.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
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
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Transform</span> Your Studio?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss which services will have the biggest impact on your fitness business.
            </p>
            <Link to="/contact">
              <motion.button
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold text-lg rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Your Custom Strategy</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;