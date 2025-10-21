import React from 'react';
import companyLogo from './assets/company_logo.png';
import hamburgerIcon from './assets/hamburger.svg';

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[100px] sm:h-[130px] px-4 sm:px-8 lg:px-32">
      {/* Logo */}
      <img 
        src={companyLogo} 
        alt="Company Logo" 
        width={70}
        height={70}
        className="object-contain"
      />

      {/* Hamburger menu */}
      <button>
        <img 
          src={hamburgerIcon} 
          alt="Menu" 
          className="w-[30px] h-[30px]"
        />
      </button>
    </header>
  );
}
