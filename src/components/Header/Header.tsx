import React from 'react';
import companyLogo from './assets/company_logo.png';
import hamburgerIcon from './assets/hamburger.svg';

export default function Header() {
  return (
    <header className="flex items-center h-[100px] sm:h-[130px] px-4 sm:px-8 lg:px-32">
      <img 
        src={companyLogo} 
        alt="Company Logo" 
        width={70}
        height={70}
        className="w-[70px] h-[70px]"
      />
      <div className="w-[1100px]"></div>
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
