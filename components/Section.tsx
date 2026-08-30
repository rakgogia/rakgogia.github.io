
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-10 last:mb-0 sm:mb-14">
      <div className="mb-5 flex items-center gap-2.5 sm:mb-7 sm:gap-4">
        <span className="h-px w-4 flex-none bg-cyan-500 sm:w-8" />
        <h2 className="whitespace-nowrap text-lg font-black tracking-normal text-slate-900 [word-spacing:0.18em] sm:text-3xl">{title}</h2>
        <span className="hidden h-px flex-1 bg-slate-200 sm:block" />
      </div>
      {children}
    </section>
  );
};

export default Section;
