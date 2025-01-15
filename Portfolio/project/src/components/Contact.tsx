import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'error', message: 'Contact service is currently unavailable. Please try again later.' });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:shanmukhkommisetty2004.08@gmail.com?subject=Hello%20Shanmukh&body=Hi%20Shanmukh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <motion.div 
              className="flex items-center space-x-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
              whileHover={{ x: 10 }}
              onClick={handleEmailClick}
            >
              <Mail className="text-blue-600" size={24} />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600 break-all">shanmukhkommisetty2004.08@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors"
              whileHover={{ x: 10 }}
            >
              <Phone className="text-blue-600" size={24} />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">+91 7993323489</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors"
              whileHover={{ x: 10 }}
            >
              <MapPin className="text-blue-600" size={24} />
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-600">Bhimavaram, Andhra Pradesh, India</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-600 text-center">Contact service is currently unavailable. Please try again later.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Send Message
              </motion.button>

              {status.message && (
                <p className={`text-center ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;