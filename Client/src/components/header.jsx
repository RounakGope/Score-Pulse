import React, { use } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigete=useNavigate();
  return (
    <header className="w-full bg-[#FF9F00] px-12 py-6 flex justify-between items-center shadow-lg shadow-orange-500/20">
      
      {/* Logo */}
      <div
      onClick={(e)=>{
        navigete('/');
      }}
       className="text-3xl text-black font-semibold tracking-wide cursor-pointer" >
        ScorePulse
      </div>

      {/* Navigation */}
      <nav className="flex gap-5">
        <NavButton label="MyClub" />
        <NavButton label="Community" />
        <NavButton label="MyAccount" />
      </nav>
    </header>
  );
};

// Reusable Button Component for cleaner code
const NavButton = ({ label }) => (
  <button className="bg-transparent border-2 border-black text-black text-lg font-medium px-6 py-2 rounded-xl hover:bg-black hover:text-[#FF9F00] transition-colors duration-200">
    {label}
  </button>
);

export default Header;