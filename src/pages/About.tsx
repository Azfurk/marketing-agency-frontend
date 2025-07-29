import { motion } from 'framer-motion';
import { Award, Coffee, Heart, Target, Users, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const teamMembers = [
    {
      name: 'Arpit',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former fitness trainer turned digital strategist. Arpit combines his deep understanding of fitness culture with cutting-edge marketing techniques.',
      specialties: ['Brand Strategy', 'Content Creation', 'Fitness Industry'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Founder 2',
      role: 'SEO & Growth Strategist',
      image: 'https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'SEO wizard with 8+ years optimizing local businesses. Founder 2 has helped over 200 fitness studios dominate their local search results.',
      specialties: ['Technical SEO', 'Local Search', 'Analytics'],
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Founder 3',
      role: 'Social Media Creative',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visual storyteller who creates scroll-stopping content. Founder 3\'s designs have generated millions of impressions for fitness brands.',
      specialties: ['Visual Design', 'Video Production', 'Instagram Strategy'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authentic Growth',
      description: 'We believe in genuine connections over vanity metrics. Every strategy focuses on building real relationships with your community.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every campaign, every post, every strategy is designed with clear metrics and measurable outcomes in mind.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of trends and platform changes, ensuring your brand is always at the forefront of digital marketing.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Fitness is about community. We help you build and nurture communities that support each other\'s wellness journeys.',
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
              We're not an agency.
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                We're your creative gym partner.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              PulsePresence was born out of love for fitness and storytelling. We've helped over 60 boutique studios go from invisible to irresistible using design, social psychology, and strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  It started in a small yoga studio in Mumbai. Our founder, Arpit, was teaching his morning class when he noticed something troubling, amazing instructors with incredible knowledge were struggling to fill their classes because no one could find them online.
                </p>
                <p>
                  That's when the lightbulb went off. The fitness industry needed more than just generic marketing. It needed partners who understood the unique challenges of building wellness communities in the digital age.
                </p>
                <p>
                  Three years and 60+ successful studio transformations later, we've learned that the best fitness marketing doesn't feel like marketing at all. It feels like inspiration, community, and genuine connections.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fitness studio community"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-500/30 to-cyan-500/30 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from strategy development to content creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`p-4 bg-gradient-to-r ${value.color} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            ref={teamRef}
            initial={{ y: 50, opacity: 0 }}
            animate={teamInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The creative minds behind your fitness brand's digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={teamInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-2xl mx-auto w-64 h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  <div className={`absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-r ${member.color} opacity-20 rounded-full blur-lg`}></div>
                </div>

                <h3 className={`text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:${member.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {member.name}
                </h3>
                <p className="text-cyan-400 mb-4 font-medium">{member.role}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-transparent to-pink-500/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="p-6 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl w-fit mx-auto mb-8">
              <Award className="w-12 h-12 text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              To help authentic fitness brands grow without gimmicks or trend hopping. Just pure strategy and creative fire.
            </p>
            <p className="text-lg text-gray-400">
              We believe the world needs more spaces where people can feel strong, confident, and connected. By helping fitness studios thrive digitally, we're contributing to healthier and happier communities everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fun <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Facts</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                stat: '2,847',
                label: 'Cups of chai consumed during strategy sessions',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Zap,
                stat: '15min',
                label: 'Average daily workout for the team',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Heart,
                stat: '100%',
                label: 'Team members who are fitness enthusiasts',
                color: 'from-pink-500 to-purple-500'
              }
            ].map((fact, index) => (
              <motion.div
                key={fact.label}
                className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-4 bg-gradient-to-r ${fact.color} rounded-2xl w-fit mx-auto mb-4`}>
                  <fact.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${fact.color} bg-clip-text text-transparent mb-2`}>
                  {fact.stat}
                </div>
                <p className="text-gray-400">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;