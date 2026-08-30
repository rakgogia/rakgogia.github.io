import React, { useState } from 'react';
import { name, contactInfo } from './data';
import { GitHubIcon, MailIcon, PhoneIcon, LinkedInIcon } from './components/Icons';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import TravelPage from './pages/TravelPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Experience':
        return <ExperiencePage />;
      case 'Education':
        return <EducationPage />;
      case 'Skills':
        return <SkillsPage />;
      case 'Travel':
        return <TravelPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="noise" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-6 md:py-10 lg:px-8">
        <header className="mb-4 flex flex-col gap-4 sm:mb-6 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-lg">
              RG
            </div>
            <div>
              <h1 className="text-base font-bold tracking-[0.08em] text-white sm:text-2xl sm:tracking-[0.16em]">{name}</h1>
              <p className="mt-0.5 text-xs font-medium text-cyan-200/70 sm:mt-1 sm:text-sm">Software Engineer · AI &amp; Search</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 text-xs text-slate-300 sm:flex sm:flex-wrap sm:text-sm">
            <a href={`mailto:${contactInfo.email}`} className="contact-pill">
              <MailIcon className="h-4 w-4 text-cyan-300" />
              <span>Email</span>
            </a>
            <a href={`tel:${contactInfo.phone.replace(/[() -]/g, '')}`} className="contact-pill">
              <PhoneIcon className="h-4 w-4 text-cyan-300" />
              <span>Call</span>
            </a>
            <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-pill">
              <LinkedInIcon className="h-4 w-4 text-cyan-300" />
              <span>LinkedIn</span>
            </a>
            <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-pill">
              <GitHubIcon className="h-4 w-4 text-cyan-300" />
              <span>GitHub</span>
            </a>
          </div>
        </header>

        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

        <div key={currentPage} className="page-enter mt-4 min-h-[620px] rounded-3xl border border-white/10 bg-slate-50 p-4 text-slate-900 shadow-2xl shadow-black/30 sm:mt-5 sm:rounded-[2rem] sm:p-8 lg:p-12">
          {renderPage()}
        </div>

        <footer className="mt-6 flex justify-center px-2 text-xs text-slate-500 sm:justify-end">
          <p>© {new Date().getFullYear()} Rakshit Gogia</p>
        </footer>
      </main>
    </div>
  );
};

export default App;