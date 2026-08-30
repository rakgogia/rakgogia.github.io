
import React from 'react';
import Section from '../components/Section';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data';

const SkillsPage: React.FC = () => {
  return (
    <div>
      <Section title="Skills">
        <div className="grid gap-5">
          {skills.map((category, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5">
                <h4 className="text-lg font-black text-slate-800">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <SkillBadge key={sIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default SkillsPage;
