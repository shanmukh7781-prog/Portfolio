import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      id="about"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Technology representation" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
            <div className="relative mt-6">
              <img 
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80" 
                alt="Cybersecurity representation" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                As a passionate Cyber Security Analyst and Full Stack Developer, I specialize in building secure and scalable applications while ensuring robust security measures. My expertise spans across various domains of cyber security, including penetration testing, vulnerability assessment, and ethical hacking.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                With a strong foundation in Electronics and Communication Engineering, I bring a unique perspective to problem-solving and system security. I'm particularly interested in the intersection of hardware security and software development.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Currently focused on advancing my knowledge in emerging cyber security threats and countermeasures, while developing innovative solutions that prioritize both functionality and security.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}