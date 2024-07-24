// Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send this data to your server
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#774EE0] mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you. Please fill out the form or use our contact information to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#774EE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p>123 Education Street, Cityville, State 12345</p>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#774EE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#774EE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <p>info@learnhorizon.edu</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#774EE0] mb-2">Office Hours</h3>
            <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#774EE0]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#774EE0]"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#774EE0]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#774EE0]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#774EE0] text-white py-2 px-4 rounded-md hover:bg-[#5f3eb3] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2175674903423!2d-73.98784368459375!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625684879673!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;