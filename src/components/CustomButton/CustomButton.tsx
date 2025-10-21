import React from 'react';
import rightArrowIcon from './assets/Right arrow icon 1.png';

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'navigation';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export default function CustomButton({
  children,
  className = '',
}: CustomButtonProps) {


  const buttonClasses = `font-bold transition-colors duration-200 flex items-center justify-center gap-2 rounded-lg bg-electric-blue
   hover:bg-blue-700 text-white px-6 py-3 text-base w-auto ${className}`;
  
  return (
    <button
      type="button"
      onClick={void 0}
      className={buttonClasses}
    >
      {children}
        <img 
          src={rightArrowIcon} 
          alt="Arrow" 
          className="w-4 h-4 object-contain"
        />
    </button>
  );
}
