
import React from 'react';
import Section from '../components/Section';
import { education } from '../data';

const EducationPage: React.FC = () => {
  return (
    <div>
      <Section title="Education">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
          <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-7 text-white sm:p-9">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-1 shadow-lg">
              <img src="/umich_logo.png" alt="University of Michigan logo" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-black sm:text-3xl">{education.institution}</h3>
                <p className="mt-2 text-lg font-medium text-blue-50">{education.degree}</p>
              </div>
              <p className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">{education.duration}</p>
            </div>
          </div>
          <div className="grid gap-6 p-7 sm:grid-cols-[0.7fr_1.3fr] sm:p-9">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Academic record</p>
              <p className="mt-2 text-2xl font-black text-slate-900">{education.gpa}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Honors &amp; societies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.honors.map((honor) => <span key={honor} className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">{honor}</span>)}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default EducationPage;
