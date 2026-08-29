
import React from 'react';
import type { Experience } from '../types';
import { MicrosoftLogo, UMichLogo, ProQuestLogo, BoALogo, ShopeeLogo, InfosysLogo } from './Icons';

interface ExperienceCardProps {
  experience: Experience;
}

const companyLogos: Record<string, React.ElementType> = {
  microsoft: MicrosoftLogo,
  umich: UMichLogo,
  proquest: ProQuestLogo,
  boa: BoALogo,
  shopee: ShopeeLogo,
  infosys: InfosysLogo,
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const LogoComponent = experience.logo ? companyLogos[experience.logo] : null;

  return (
    <article className="group relative rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/70 sm:p-6">
      <div className="flex items-start gap-2.5 sm:gap-5">
        <div className="h-10 w-10 flex-shrink-0 sm:h-14 sm:w-14">
          {LogoComponent && (
            <div className={`flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm ${experience.logo === 'microsoft' ? 'p-2' : 'p-0'}`}>
              <LogoComponent className="h-full w-full object-contain" />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-grow">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start sm:gap-3">
            <div className="min-w-0">
              <h3 className="text-lg font-black leading-tight text-slate-900 sm:text-xl">{experience.company}</h3>
            </div>
            <p className="w-fit whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-500 sm:px-3 sm:text-xs">{experience.duration}</p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm font-bold leading-5 text-blue-700 sm:ml-[4.75rem]">{experience.role}</p>
      <ul className="mt-4 space-y-3 text-[13px] leading-5 text-slate-600 sm:ml-[4.75rem] sm:text-sm sm:leading-6">
        {experience.description.map((item, index) => (
          <li key={index} className="flex gap-2.5">
            <span className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-cyan-500" />
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceCard;