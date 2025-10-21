import React from 'react';
import DecorativeUnderline from '../DecorativeUnderline/DecorativeUnderline';
import CustomButton from '../CustomButton/CustomButton';
import girlStudying from './assets/girl_studying.png';
import lilDots from './assets/lil_dots_behind_pic.png';
import { CustomSection } from '../CustomSections/CustomSection';

export default function HeroSection() {
  return (
    <CustomSection className="bg-blue-sky overflow-visible h-123 lg:h-156 sm:h-84">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ───────────── TEXT SIDE ───────────── */}
          <div className="space-y-6 sm:space-y-8 order-1">
            <div className="w-84 h-18 md:w-88 h-38 lg:w-140 h-206">
              <h1 className="font-bold text-[24px] sm:text-[32px] lg:text-[54px] leading-tight text-charcoal-gray">
                Crafting{' '}
                <span className="relative inline-block">
                  Visual <DecorativeUnderline />
                </span>{' '}
                Stories: Unleashing Creative Essence
              </h1>
            </div>

            <CustomButton className="w-full sm:w-auto">
              Let's talk
            </CustomButton>
          </div>

          {/* ───────────── IMAGE SIDE ───────────── */}
          <div className="relative flex justify-center md:justify-end items-end order-2 md:order-last">
            {/* Decorative dots */}
            <div className="absolute top-2 md:top-4 left-1 lg:left-12 z-0 pt-6 md:pt-8 lg:pt-12">
              <img
                src={lilDots}
                alt="Decorative dots pattern"
                className="w-[92.5px] h-[92.5px] md:w-[92.5px] md:h-[92.5px] lg:w-[123.6px] lg:h-[123.6px]"
              />
            </div>

            {/* Main image */}
            <div className="relative z-10 pt-3 md:pt-8 lg:pt-7">
              <img
                src={girlStudying}
                alt="Woman studying design materials"
                className="w-full h-auto object-cover translate-y-10 lg:translate-y-16 w-71.5 h-73 md:w-70 h-71 lg:w-133 h-144"
              />
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
}
