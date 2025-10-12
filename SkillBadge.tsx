
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full transition-transform duration-200 hover:scale-105 hover:bg-blue-200 cursor-default">
      {skill}
    </span>
  );
};

export default SkillBadge;
