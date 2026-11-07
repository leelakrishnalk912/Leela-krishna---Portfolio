import React, { useState } from 'react';
import { Github, Linkedin, Mail, Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendNote = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.links.email}?subject=${encodeURIComponent(
      senderSubject || 'Hello from Portfolio'
    )}&body=${encodeURIComponent(
      `Hi Leela Krishna,\n\n${senderMessage}\n\nBest regards,\n${senderName || 'A fellow developer'}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-indigo-50/20 to-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
            Get In Touch
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Let's Connect
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            I'm always open to connecting with fellow students, developers, builders, and people interested in AI and technology.
          </p>
        </div>

        {/* Contact Layout: Channels & Direct Email Client Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Channels with colorful cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 bg-gradient-to-br from-blue-50/80 via-white to-white rounded-2xl border border-blue-200/80 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/10 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-xs text-slate-500">Connect & Network professionally</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 bg-gradient-to-br from-slate-50 via-white to-white rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md hover:shadow-slate-500/10 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                  <Github className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                    GitHub
                  </h3>
                  <p className="text-xs text-slate-500">View code repositories & commits</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </a>

            {/* Email Card with Copy button */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/80 via-purple-50/30 to-white rounded-2xl border border-indigo-200/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-xs">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Direct Email</h3>
                  <p className="text-xs font-mono text-indigo-700 font-semibold truncate max-w-[170px] sm:max-w-xs">
                    {PERSONAL_INFO.links.email}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 rounded-xl border border-indigo-200 transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Direct Quick Message Composer (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-indigo-100 shadow-xl shadow-indigo-500/5">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <h3 className="text-base font-bold text-slate-900">
                Send a Quick Message
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Draft a direct note to collaborate on projects, discuss hackathons, or share learning resources.
            </p>

            <form onSubmit={handleSendNote} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-hidden transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="e.g. Hackathon collaboration / Python project"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Hi Leela Krishna, I saw your portfolio and would like to connect..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-hidden transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                <span className="text-[11px] text-slate-400">
                  Opens your default email client with your drafted message.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 rounded-xl transition-all shadow-md shadow-indigo-500/20 active:scale-98"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
