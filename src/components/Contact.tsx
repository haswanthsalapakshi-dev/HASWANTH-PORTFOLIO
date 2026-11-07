import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.76.78 1.76 1.75-.79 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Let's Connect & Build Something Great
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            I am always excited to connect with fellow developers, explore innovative ideas, collaborate on projects, and learn from the tech community.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Direct Form */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Email Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl border border-zinc-200/90 bg-white shadow-2xs space-y-6">
              
              <div>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight mb-1">
                  Connect Directly
                </h3>
                <p className="text-xs text-zinc-500">
                  Feel free to reach out via LinkedIn, GitHub, or direct email.
                </p>
              </div>

              {/* LinkedIn Button */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg border border-zinc-200 bg-[#FDFDFC] hover:border-blue-400 hover:bg-blue-50/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-blue-50 text-blue-700">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">
                      LinkedIn Profile
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      salapakshi-haswanth-6706aa432
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-blue-700 transition-colors" />
              </a>

              {/* GitHub Button */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg border border-zinc-200 bg-[#FDFDFC] hover:border-zinc-400 hover:bg-zinc-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-zinc-100 text-zinc-800">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                      GitHub Profile
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      haswanthsalapakshi-dev
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </a>

              {/* Email Contact Placeholder & Copy Action */}
              <div className="p-3.5 rounded-lg border border-zinc-200 bg-[#FDFDFC] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                    <Mail className="w-4 h-4 text-zinc-600" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-xs text-zinc-700 break-all select-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>

            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/60 text-xs text-zinc-600">
              <span className="font-semibold text-zinc-800">Student Availability:</span> Currently focused on B.Tech coursework, independent Python programming, and weekend hackathons.
            </div>
          </div>

          {/* Right Column: Simple Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-zinc-200/90 bg-white shadow-2xs">
              
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Have an inquiry, hackathon idea, or just want to say hi? Leave a message below.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="font-bold text-sm">Thank You for Connecting!</div>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                    Your message has been received. Haswanth will follow up with you at the earliest opportunity.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {errorMessage && (
                    <div className="p-3 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-zinc-700 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-zinc-700 mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-zinc-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Write your note, feedback, or collaborative opportunity here..."
                      className="w-full px-3.5 py-2.5 text-sm border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-400 rounded-lg transition-colors shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-zinc-400 text-center pt-1">
                    Your details are used strictly to reply to your inquiry.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
