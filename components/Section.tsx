
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12 last:mb-0">
      <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-blue-600 pb-3 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
