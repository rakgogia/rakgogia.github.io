
import React from 'react';
import Section from '../components/Section';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data';

const SkillsPage: React.FC = () => {
  return (
    <div>
      <Section title="Skills">
        <div className="space-y-6">
          {skills.map((category, index) => (
            <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-700 mb-3">{category.title}</h4>
              <div className="flex flex-wrap gap-3">
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
