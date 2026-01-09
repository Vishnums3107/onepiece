import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  return (
    <div className="relative overflow-hidden">
      <ContactSection />
    </div>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Spam protection
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [statusMessage, setStatusMessage] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check - if filled, it's likely a bot
    if (formData.honeypot) {
      setStatus('success');
      setStatusMessage('Message sent successfully!');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      // EmailJS integration
      // To use EmailJS:
      // 1. Create account at emailjs.com
      // 2. Create an email service and template
      // 3. Replace the IDs below with your own

      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      // Check if EmailJS is configured
      if (serviceId === 'YOUR_SERVICE_ID') {
        // Demo mode - simulate success
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setStatusMessage('Message sent successfully! (Demo mode - configure EmailJS for real emails)');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        return;
      }

      // Real EmailJS submission
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'New Contact Form Submission',
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again or email directly.');
      console.error('Contact form error:', error);
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setStatusMessage('');
    setErrors({});
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 relative">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full mx-auto relative z-10"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
            Let's Build Something That Lasts.
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-light">
            If your idea deserves serious execution, we should talk.
          </p>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                >
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-secondary mb-8">{statusMessage}</p>
                <motion.button
                  onClick={resetForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass rounded-full text-sm font-medium hover:bg-white/10 transition-all"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center"
                >
                  <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">Something Went Wrong</h3>
                <p className="text-secondary mb-8">{statusMessage}</p>
                <motion.button
                  onClick={resetForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass rounded-full text-sm font-medium hover:bg-white/10 transition-all"
                >
                  Try Again
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 glass rounded-xl bg-white/5 border ${errors.name ? 'border-red-400' : 'border-white/20'
                        } focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all placeholder-gray-500`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-400"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 glass rounded-xl bg-white/5 border ${errors.email ? 'border-red-400' : 'border-white/20'
                        } focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all placeholder-gray-500`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-400"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                    Subject <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass rounded-xl bg-white/5 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all placeholder-gray-500"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-6 py-4 glass rounded-xl bg-white/5 border ${errors.message ? 'border-red-400' : 'border-white/20'
                      } focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all placeholder-gray-500 resize-none`}
                    placeholder="Tell me what you're building, why it matters, and where you want it to go."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                  <p className="mt-2 text-xs text-muted">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={status !== 'loading' ? { scale: 1.02, boxShadow: '0 0 40px rgba(100, 100, 255, 0.2)' } : {}}
                  whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                  className="w-full px-12 py-5 glass-strong rounded-full text-lg font-semibold hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Start the Collaboration'
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary text-lg mb-2">
            I work with a limited number of serious projects.
          </p>
          <p className="text-muted text-sm">
            Quality over quantity — always.
          </p>
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted text-sm mb-4">Or reach out directly:</p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="mailto:ONEPIECEBUISNESSOFFL@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/onepieceoffl/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://github.com/Vishnums3107"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
