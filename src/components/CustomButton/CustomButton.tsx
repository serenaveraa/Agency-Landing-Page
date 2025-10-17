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
  showArrow?: boolean;
}

export default function CustomButton({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  showArrow = true
}: CustomButtonProps) {
  const baseClasses = "font-bold transition-colors duration-200 flex items-center justify-center gap-2 rounded-lg";
  
  const variantClasses = {
    primary: "bg-electric-blue hover:bg-blue-700 text-white",
    secondary: "bg-white hover:bg-gray-100 text-electric-blue border border-electric-blue",
    navigation: "hover:opacity-80 transition-opacity"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg",
    lg: "px-8 py-4 text-lg"
  };
  
  const widthClass = fullWidth ? "w-full" : "w-auto";
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
      {showArrow && variant !== 'navigation' && (
        <img 
          src={rightArrowIcon} 
          alt="Arrow" 
          className="w-4 h-4 object-contain"
        />
      )}
    </button>
  );
}
