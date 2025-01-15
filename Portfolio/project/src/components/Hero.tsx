import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "E&C Engineer | Cyber Security Analyst | Full Stack Developer";
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%)',
        color: 'white'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1,
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="glow-effect mb-8"
        >
          <h1 className="text-4xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
              Shanmukh K
            </span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl mb-8 text-gray-300 h-8 overflow-hidden relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="relative">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.p>

        <motion.div 
          className="flex space-x-6 justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 1.5,
            type: "spring",
            stiffness: 200
          }}
        >
          {[
            { href: "https://github.com/shanmukh7781-prog", icon: Github, label: "GitHub Profile", hoverColor: "cyan" },
            { href: "https://www.linkedin.com/in/shanmukh-k-a361b1253", icon: Linkedin, label: "LinkedIn Profile", hoverColor: "blue" },
            { href: "mailto:shanmukhkommisetty2004.08@gmail.com?subject=Hello%20Shanmukh&body=Hi%20Shanmukh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.", icon: Mail, label: "Send Email", hoverColor: "purple" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.icon !== Mail ? "_blank" : undefined}
              rel={item.icon !== Mail ? "noopener noreferrer" : undefined}
              className={`hover:text-${item.hoverColor}-400 transition-all p-3 hover:bg-white/10 rounded-full social-icon-hover`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              aria-label={item.label}
            >
              <item.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {showScrollIndicator && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 2.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ChevronDown className="text-white/50 animate-bounce" size={32} />
        </motion.div>
      )}
    </motion.div>
  );
}