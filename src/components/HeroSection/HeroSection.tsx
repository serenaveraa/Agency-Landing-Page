import React from 'react';
import DecorativeUnderline from '../DecorativeUnderline/DecorativeUnderline';
import CustomButton from '../CustomButton/CustomButton';
import girlStudying from './assets/girl_studying.png';
import lilDots from './assets/lil_dots_behind_pic.png';

export default function HeroSection() {
  return (
    <section className="bg-blue-sky min-h-[623px] px-4 sm:px-8 lg:px-32 py-8 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 pr-0 lg:pr-[54px]">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-charcoal-gray">
              <div className="mb-1 sm:mb-2">Crafting</div>
              <div className="relative inline-block pb-1">
                Visual
                <DecorativeUnderline />
              </div>
              <div className="mt-1 sm:mt-2">Stories:</div>
              <div className="mt-1 sm:mt-2">Unleashing Creative Essence</div>
            </h1>
            
            <CustomButton 
              size="md" 
              fullWidth={false}
              className="w-full sm:w-auto"
            >
              Let's talk
            </CustomButton>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end items-end order-first lg:order-last">
            {/* Decorative dots - positioned as background elements */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-0">
              <img 
                src={lilDots} 
                alt="Decorative dots pattern" 
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
              />
            </div>
            
            {/* Main image */}
            <div className="relative z-10">
              <img 
                src={girlStudying} 
                alt="Woman studying design materials" 
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[531px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
