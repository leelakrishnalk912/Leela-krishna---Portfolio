import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Code2, FolderGit2, BookOpen, Compass, Mail, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState('');

  const items = [
    { label: 'Home / Hero', href: '#home', category: 'Navigation', icon: <Compass className="w-4 h-4 text-slate-500" /> },
    { label: 'About Me & Education', href: '#about', category: 'Navigation', icon: <BookOpen className="w-4 h-4 text-slate-500" /> },
    { label: 'Skills & Tech Stack', href: '#skills', category: 'Navigation', icon: <Code2 className="w-4 h-4 text-slate-500" /> },
    { label: 'Featured Python Projects', href: '#projects', category: 'Navigation', icon: <FolderGit2 className="w-4 h-4 text-slate-500" /> },
    { label: 'Hackathons: Learning Through Building', href: '#experience', category: 'Navigation', icon: <Compass className="w-4 h-4 text-slate-500" /> },
    { label: 'Contact & Social Links', href: '#contact', category: 'Navigation', icon: <Mail className="w-4 h-4 text-slate-500" /> },
    { label: 'Project: Voter Eligibility Checker', href: '#projects', category: 'Project', icon: <Code2 className="w-4 h-4 text-blue-600" /> },
    { label: 'Project: Calculator', href: '#projects', category: 'Project', icon: <Code2 className="w-4 h-4 text-indigo-600" /> },
    { label: 'Project: ATM Management System', href: '#projects', category: 'Project', icon: <Code2 className="w-4 h-4 text-emerald-600" /> },
    { label: 'Project: Student Grade Calculator', href: '#projects', category: 'Project', icon: <Code2 className="w-4 h-4 text-amber-600" /> }
  ];

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-start justify-center pt-20 sm:pt-28 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Command Navigation"
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section... (e.g. Projects, Skills, ATM)"
            className="flex-1 text-sm bg-transparent border-none focus:outline-hidden text-slate-900 placeholder:text-slate-400"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-slate-100 rounded border border-slate-200">
            ESC
          </kbd>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500">
              No matching sections or projects found for "{query}".
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleSelect(item.href)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.label}
                    </span>
                    <span className="block text-[10px] text-slate-400">{item.category}</span>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors opacity-0 group-hover:opacity-100" />
              </button>
            ))
          )}
        </div>

        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Tip: Press <kbd className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200 text-slate-600">Cmd+K</kbd> anywhere to open</span>
          <span className="font-mono">LEELA KRISHNA.D</span>
        </div>
      </div>
    </div>
  );
};
