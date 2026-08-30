
import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
  { label: 'Skills', path: '/skills' },
  { label: 'Travel', path: '/travel' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-2 z-20 rounded-2xl border border-white/10 bg-slate-950/70 p-1 shadow-xl shadow-black/20 backdrop-blur-xl sm:top-4 sm:rounded-full sm:p-1.5">
      <div className="flex items-center justify-end gap-1">
        <div className="flex flex-1 gap-0.5 overflow-x-auto sm:flex-none sm:gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `flex-1 whitespace-nowrap rounded-xl px-2 py-2.5 text-center text-[10px] font-bold transition-all duration-300 sm:flex-none sm:rounded-full sm:px-5 sm:text-sm
                ${isActive
                  ? 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
