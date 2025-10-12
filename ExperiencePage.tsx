
import React from 'react';
import Section from '../components/Section';
import ExperienceCard from '../components/ExperienceCard';
import { workExperience, researchExperience, internships } from '../data';

const ExperiencePage: React.FC = () => {
  return (
    <div>
      <Section title="Work Experience">
        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </Section>

      <Section title="Research Experience">
        <div className="space-y-8">
          {researchExperience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </Section>
      
      <Section title="Internships">
        <div className="space-y-8">
          {internships.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ExperiencePage;
