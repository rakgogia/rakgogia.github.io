
import React from 'react';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { contactInfo, summary } from '../data';

const HomePage: React.FC = () => {
  return (
    <div className="grid min-h-[530px] items-center gap-10 py-4 md:grid-cols-[1.15fr_0.85fr] md:py-8">
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
          Engineering intelligent
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">products at scale.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:mx-0">{summary}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a href={`mailto:${contactInfo.email}`} className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700">
            Start a conversation
          </a>
          <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700">
            View LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-sm">
        <div className="relative">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-cyan-300 to-blue-600 opacity-80" />
          <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white bg-slate-200 shadow-2xl">
            <ProfilePhoto className="aspect-[4/5] h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 pb-5 pt-16 text-white">
              <p className="font-bold">Rakshit Gogia</p>
              <p className="text-sm text-cyan-200">Engineer · Builder · Explorer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;