import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studioName: '',
    message: '',
    service: ''
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'arpitphogat123@gmail.com',
      description: 'Drop us a line anytime',
      color: 'from-cyan-500 to-blue-500',
      id: 'replace-me'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 82952*****',
      description: 'Mon-Fri from 9am to 6pm IST',
      color: 'from-green-500 to-teal-500',
      id: 'replace-me'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      info: '+91 82952*****',
      description: 'Quick responses guaranteed',
      color: 'from-pink-500 to-purple-500',
      id: 'replace-me'
    }
  ];

  const services = [
    'Instagram Domination',
    'SEO Rebuild',
    'Brand Glow-Up',
    'Studio Content Packs',
    'Full Marketing Suite',
    'Not Sure - Let\'s Discuss'
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
              Ready to
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Power Up?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can transform your fitness studio's digital presence and drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Get in <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your preferred way to connect with us. We're here to help!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="group text-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`p-4 bg-gradient-to-r ${method.color} rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                <p className={`text-xl font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-2`} id={method.id}>
                  {method.info}
                </p>
                <p className="text-gray-400">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8">
                Send us a <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 transition-colors duration-300"
                      placeholder="Arpit"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 transition-colors duration-300"
                      placeholder="arpit@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Studio Name
                  </label>
                  <input
                    type="text"
                    name="studioName"
                    value={formData.studioName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 transition-colors duration-300"
                    placeholder="Your Awesome Fitness Studio"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your studio and what you're looking to achieve..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold text-lg rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-8">
                  Visit Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Studio</span>
                </h3>
                
                {/* Mock Map */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/10 overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                      <h4 className="text-xl font-bold mb-2">PulsePresence Studio</h4>
                      <p className="text-sm text-gray-400">Mumbai, India</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-pink-500/20 rounded-full blur-sm"></div>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">PulsePresence HQ</h4>
                      <p className="text-gray-300 mb-2">
                        WeWork Galaxy, 43, Residency Road<br />
                        Bangalore, Karnataka 560025<br />
                        India
                      </p>
                      <p className="text-sm text-gray-400">
                        Office Hours: Mon-Fri, 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: 'https://instagram.com/niaeto', color: 'from-pink-500 to-purple-500' },
                  { icon: Linkedin, href: 'https://linkedin.com/company/pulsepresence', color: 'from-blue-600 to-blue-800' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    id="replace-me"
                    className={`p-4 bg-gradient-to-r ${social.color} rounded-xl hover:scale-110 transition-transform duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Quick <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Answers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Common questions about working with PulsePresence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can we see results?",
                answer: "Most studios see initial improvements in 2-4 weeks, with significant growth typically visible within 3 months."
              },
              {
                question: "Do you work with all types of fitness studios?",
                answer: "We specialize in boutique fitness: yoga, pilates, CrossFit, spin, barre, and similar wellness-focused studios."
              },
              {
                question: "What's included in your monthly packages?",
                answer: "All packages include strategy, content creation, posting, analytics, and regular strategy calls. Specific deliverables vary by package."
              },
              {
                question: "Can you help with local SEO?",
                answer: "Absolutely! Local SEO is one of our core specialties. We'll help you dominate local search results in your area."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold mb-3 text-cyan-400">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;