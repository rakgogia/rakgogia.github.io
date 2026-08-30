
import React from 'react';
import Section from '../components/Section';
import { education, highSchool } from '../data';
import rafflesLogo from '../Raffles.png';

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
          <div className="grid gap-6 p-7 sm:grid-cols-2 sm:p-9 lg:grid-cols-[0.7fr_1fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Academic record</p>
              <p className="mt-2 text-2xl font-black text-slate-900">
                GPA: {education.gpa}
                <span className="mt-1 block text-xl">{education.graduationHonor}</span>
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Honors</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.honors.map((honor) => <span key={honor} className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">{honor}</span>)}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Societies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.societies.map((society) => <span key={society} className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800">{society}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
          <div className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-500 p-7 text-white sm:p-9">
            <div className="mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-lg">
              <img src={rafflesLogo} alt="Raffles Institution crest" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-black sm:text-3xl">{highSchool.institution}</h3>
                <p className="mt-2 text-lg font-medium text-emerald-50">{highSchool.location}</p>
              </div>
              <p className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">{highSchool.classYear}</p>
            </div>
          </div>
          <div className="grid gap-6 p-7 sm:grid-cols-2 sm:p-9">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Honors</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {highSchool.honors.map((honor) => <span key={honor} className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">{honor}</span>)}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Societies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {highSchool.societies.map((society) => <span key={society} className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800">{society}</span>)}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default EducationPage;
