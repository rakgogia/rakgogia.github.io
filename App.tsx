import React, { useState } from 'react';
import { name, contactInfo } from './data';
import { MailIcon, PhoneIcon, LinkedInIcon } from './components/Icons';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';

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
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">{name}</h1>
          <div className="mt-3 flex justify-center items-center gap-x-6 gap-y-2 flex-wrap text-slate-500">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <MailIcon className="w-5 h-5" />
              <span>{contactInfo.email}</span>
            </a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a href={`tel:${contactInfo.phone.replace(/[() -]/g, '')}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <PhoneIcon className="w-5 h-5" />
              <span>{contactInfo.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a href={`https/${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <LinkedInIcon className="w-5 h-5" />
              <span>{contactInfo.linkedin}</span>
            </a>
          </div>
        </header>

        {/* Navigation */}
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

        {/* Page Content */}
        <div className="bg-white rounded-b-2xl shadow-xl p-8">
          {renderPage()}
        </div>

      </main>
    </div>
  );
};

export default App;