
import React from 'react';
import type { Experience } from '../types';
import { MicrosoftLogo, UMichLogo, ProQuestLogo, BoALogo, ShopeeLogo, InfosysLogo } from './Icons';

interface ExperienceCardProps {
  experience: Experience;
}

const companyLogos: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
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
    <div className="flex gap-4 items-start p-4 rounded-lg transition-colors duration-300 hover:bg-slate-50">
      <div className="flex-shrink-0 w-12 h-12 mt-1">
        {LogoComponent && (
          <div className={`w-full h-full bg-white rounded-lg flex items-center justify-center shadow-sm overflow-hidden ${experience.logo === 'microsoft' ? 'p-1.5' : 'p-0'}`}>
            <LogoComponent className="w-full h-full object-contain" />
            </div>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-baseline flex-wrap gap-x-2">
          <h3 className="text-xl font-semibold text-slate-800">{experience.company}</h3>
          <p className="text-sm text-slate-500 font-medium">{experience.duration}</p>
        </div>
        <p className="text-md text-blue-700 font-medium">{experience.role}</p>
        <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1.5">
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;