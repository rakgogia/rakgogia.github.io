
import React from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = ['Home', 'Experience', 'Education', 'Skills'];

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="bg-white rounded-t-2xl shadow-md sticky top-0 z-10 mb-[-1px]">
      <div className="container mx-auto max-w-4xl px-8">
        <div className="flex justify-center space-x-4 sm:space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`py-4 px-2 text-md font-medium transition-colors duration-300 border-b-4
                ${currentPage === item 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-slate-500 hover:text-blue-600 hover:border-blue-300'
                }`}
              aria-current={currentPage === item ? 'page' : undefined}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
