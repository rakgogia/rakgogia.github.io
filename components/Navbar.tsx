
import React from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = ['Home', 'Experience', 'Education', 'Skills', 'Travel'];

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="sticky top-2 z-20 rounded-2xl border border-white/10 bg-slate-950/70 p-1 shadow-xl shadow-black/20 backdrop-blur-xl sm:top-4 sm:rounded-full sm:p-1.5">
      <div className="flex items-center justify-between gap-1">
        <span className="hidden pl-4 text-xs font-bold uppercase tracking-[0.24em] text-slate-500 sm:block">Portfolio</span>
        <div className="flex flex-1 gap-0.5 overflow-x-auto sm:flex-none sm:gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`flex-1 whitespace-nowrap rounded-xl px-2 py-2.5 text-[10px] font-bold transition-all duration-300 sm:flex-none sm:rounded-full sm:px-5 sm:text-sm
                ${currentPage === item 
                  ? 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
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
