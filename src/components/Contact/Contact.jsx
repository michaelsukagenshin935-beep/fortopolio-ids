import React, { useState, useEffect, useRef } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { InstagramIcon as Instagram, WhatsappIcon } from '../Icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS with public key
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== 'YOUR_PUBLIC_KEY_HERE') {
      emailjs.init(publicKey);
      console.log('EmailJS initialized with public key:', publicKey.substring(0, 8) + '...');
    } else {
      console.error('EmailJS Public Key not configured. Please check .env file');
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.contact-reveal-header', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Contact info stagger animation
      gsap.fromTo('.contact-info-card',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Form animation
      gsap.fromTo('.contact-form-container',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    // Validation
    if (!formData.name.trim()) {
      setFormError('Nama wajib diisi');
      return;
    }

    if (!formData.email.trim()) {
      setFormError('Email wajib diisi');
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormError('Format email tidak valid');
      return;
    }

    if (!formData.message.trim()) {
      setFormError('Pesan wajib diisi');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      console.log('EmailJS Configuration Check:');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.substring(0, 8) + '...');

      // Check if credentials are configured
      if (!serviceId || serviceId === 'YOUR_SERVICE_ID_HERE') {
        throw new Error('Service ID not configured. Please set VITE_EMAILJS_SERVICE_ID in .env file');
      }

      if (!templateId || templateId === 'YOUR_TEMPLATE_ID_HERE') {
        throw new Error('Template ID not configured. Please set VITE_EMAILJS_TEMPLATE_ID in .env file');
      }

      // Template params - these must match your EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'michaelsukagenshin935@gmail.com'
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('EmailJS Response:', response);
      console.log('Email sent successfully! Status:', response.status);

      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error Details:');
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error status:', error.status);
      console.error('Full error object:', error);

      // Provide more specific error messages
      let errorMessage = 'Pesan gagal dikirim. Silakan coba lagi.';

      if (error.message.includes('Service ID')) {
        errorMessage = 'Konfigurasi Service ID belum diisi. Cek file .env';
      } else if (error.message.includes('Template ID')) {
        errorMessage = 'Konfigurasi Template ID belum diisi. Cek file .env';
      } else if (error.status === 400) {
        errorMessage = 'Error: Template variables tidak sesuai. Cek template EmailJS';
      } else if (error.status === 401) {
        errorMessage = 'Error: Public Key tidak valid. Cek file .env';
      } else if (error.status === 403) {
        errorMessage = 'Error: Email Service tidak aktif. Cek dashboard EmailJS';
      }

      setFormError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="container">
        <div className="contact-reveal-header">
          <p className="section-subtitle">Hubungi Saya</p>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links */}
          <div className="contact-info-column">
            <h3 className="contact-info-title">Mari Bekerja Sama</h3>
            <p className="contact-info-subtitle">
              Punya ide menarik atau membutuhkan bantuan untuk project Anda? Silakan hubungi saya melalui salah satu kontak berikut.
            </p>

            <div className="contact-info-cards">
              <a href="mailto:michaelsukagenshin935@gmail.com" className="contact-info-card">
                <div className="contact-card-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">michaelsukagenshin935@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/6289601056499" target="_blank" rel="noopener noreferrer" className="contact-info-card">
                <div className="contact-card-icon">
                  <WhatsappIcon size={20} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-label">WhatsApp</span>
                  <span className="contact-card-value">+62 896-0105-6499</span>
                </div>
              </a>

              <a href="https://www.instagram.com/michael___208?igsh=MWU0OXF0ajhqZ3FobQ==" target="_blank" rel="noopener noreferrer" className="contact-info-card">
                <div className="contact-card-icon">
                  <Instagram size={20} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-label">Instagram</span>
                  <span className="contact-card-value">@michael___208</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="contact-form-success">
                <CheckCircle size={48} className="success-icon" />
                <h3>Pesan Terkirim!</h3>
                <p>Terima kasih telah menghubungi saya. Saya akan segera merespons pesan Anda dalam 24 jam.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {formError && (
                  <div className="form-error">
                    <AlertCircle size={16} />
                    <span>{formError}</span>
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Alamat Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Masukkan alamat email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Pesan Anda</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    placeholder="Tuliskan pesan Anda di sini..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'} <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
