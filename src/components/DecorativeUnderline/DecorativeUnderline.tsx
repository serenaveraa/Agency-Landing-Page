import React from 'react';
import underlineSvg from './assets/Text underline cont.svg';
import underlineThinSvg from './assets/Text underline thin.svg';

interface DecorativeUnderlineProps {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  thickness?: 'thin' | 'normal';
}

export default function DecorativeUnderline({ 
  className = "",
  thickness = 'normal'
}: DecorativeUnderlineProps) {
  const svgSrc = thickness === 'thin' ? underlineThinSvg : underlineSvg;
  
  return (
    <img 
      src={svgSrc} 
      alt="Decorative underline" 
      className={`absolute -bottom-1 left-0 w-full text-electric-blue pt-5 ${className}`}
    />
  );
}
