import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your current Instagram follower count?",
      options: [
        { text: "Under 1K", value: "starter" },
        { text: "1K - 5K", value: "growing" },
        { text: "5K - 15K", value: "established" },
        { text: "15K+", value: "advanced" }
      ]
    },
    {
      question: "How often do you post on Instagram?",
      options: [
        { text: "Rarely (1-2 times per week)", value: "starter" },
        { text: "Regularly (3-4 times per week)", value: "growing" },
        { text: "Daily", value: "established" },
        { text: "Multiple times daily", value: "advanced" }
      ]
    },
    {
      question: "What's your biggest challenge?",
      options: [
        { text: "Getting started with social media", value: "starter" },
        { text: "Creating consistent content", value: "growing" },
        { text: "Converting followers to customers", value: "established" },
        { text: "Scaling and automation", value: "advanced" }
      ]
    }
  ];

  const plans = {
    starter: {
      name: "Starter Plan",
      description: "Perfect for studios just beginning their digital journey",
      features: ["Basic IG strategy", "Content calendar", "Hashtag research"]
    },
    growing: {
      name: "Glow-Up Plan",
      description: "Ideal for studios ready to amplify their presence",
      features: ["Advanced content creation", "SEO optimization", "Brand refresh"]
    },
    established: {
      name: "Growth Beast Plan",
      description: "For studios ready to dominate their market",
      features: ["Full marketing suite", "Influencer partnerships", "Advanced analytics"]
    },
    advanced: {
      name: "Enterprise Plan",
      description: "Custom solutions for established fitness brands",
      features: ["Custom strategy", "Dedicated team", "Multi-location support"]
    }
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendedPlan = () => {
    const answerCounts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(answerCounts).reduce((a, b) => 
      answerCounts[a] > answerCounts[b] ? a : b
    );
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Ideal <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-300">
            Take our quick quiz to discover the perfect strategy for your studio
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <div className="flex space-x-1">
                      {questions.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index <= currentQuestion ? 'bg-cyan-400' : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-8">
                    {questions[currentQuestion].question}
                  </h3>
                </div>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      className="w-full p-4 text-left bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
                      onClick={() => handleAnswer(option.value)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.text}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {currentQuestion > 0 && (
                  <button
                    className="mt-6 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Perfect! We recommend the
                  </h3>
                  <h4 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    {plans[getRecommendedPlan()].name}
                  </h4>
                  <p className="text-xl text-gray-300 mb-8">
                    {plans[getRecommendedPlan()].description}
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-6 mb-8">
                  <h5 className="text-lg font-semibold mb-4">What's included:</h5>
                  <ul className="space-y-2 text-gray-300">
                    {plans[getRecommendedPlan()].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started Now
                  </motion.button>
                  <button
                    className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors duration-300"
                    onClick={resetQuiz}
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Quiz;