
import React from 'react';
import Section from '../components/Section';
import { education } from '../data';

const EducationPage: React.FC = () => {
  return (
    <div>
      <Section title="Education">
        <div>
          <div className="flex justify-between items-baseline flex-wrap gap-2">
            <h3 className="text-2xl font-semibold text-slate-800">{education.institution}</h3>
            <p className="text-md text-slate-500 font-medium">{education.duration}</p>
          </div>
          <p className="text-xl text-blue-700 font-medium mt-1">{education.degree}</p>
          <div className="mt-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
             <p className="text-md text-slate-600">
                <span className="font-semibold text-slate-700">GPA:</span> {education.gpa}
             </p>
             <p className="text-md text-slate-600 mt-2">
                <span className="font-semibold text-slate-700">Honors:</span> {education.honors.join(', ')}
             </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default EducationPage;
