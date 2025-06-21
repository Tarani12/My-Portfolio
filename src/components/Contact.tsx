import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "taraniyaragani12@gmail.com",
      href: "mailto:taraniyaragani12@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7416328010",
      href: "tel:+917416328010"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Visakhapatnam, Andhra Pradesh",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/tarani12"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tarani-yaragani-7a56b3270/"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-3"></div>
            <p className="text-gray-600">
              Feel free to reach out for opportunities, collaboration, or just a friendly chat.
            </p>
          </div>

          {/* Contact Info & Social */}
          <div className="grid gap-4 mb-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition"
              >
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{item.icon}</div>
                <span>{item.value}</span>
              </a>
            ))}
          </div>

          <div className="flex space-x-4 justify-center mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="mb-6 text-center">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              <Send className="w-3 h-3" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-10">
          <p>&copy; 2025 Tarani Yaragani. Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
