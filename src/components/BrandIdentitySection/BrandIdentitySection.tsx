import React from 'react';
import DecorativeUnderline from '../DecorativeUnderline/DecorativeUnderline';
import CustomButton from '../CustomButton/CustomButton';
import groupProject from './assets/group_project.png';
import { CustomSection } from '../CustomSections/CustomSection';

export default function BrandIdentitySection() {
  return (
    <CustomSection className="bg-white h-270 sm:h-268 sm:px-8 py-12 sm:py-16 lg:h-220 lg:pb-20 lg:pt-40">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-gray mb-4 sm:mb-6">
            Elevate Your <span className="relative inline-block pb-2">Brand Identity<DecorativeUnderline thickness="thin" /></span>
          </h2>
          <p className="font-proxima text-base sm:text-lg lg:text-[20px] leading-[160%] tracking-[0px] text-charcoal-gray font-normal text-center max-w-3xl mx-auto">
            Unlock the true potential of your brand. Our passionate team of creative experts is committed to 
            delivering innovative and tailor-made solutions that elevate your brand to new heights.
          </p>
        </div>

        {/* Bottom Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">

          {/* Left Column - Circular Image */}
          <div className="flex justify-center lg:justify-start order-first lg:order-first">
            <div className="relative">
              <img 
                src={groupProject} 
                alt="Team collaboration" 
                className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[411px] h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-proxima text-base sm:text-lg lg:text-[20px] leading-[170%] tracking-[0px] text-[#4F5863] font-normal text-pale-gray">
              We believe that a strong brand is the cornerstone of every successful business. Our approach 
              combines strategic thinking with creative excellence to deliver solutions that not only look beautiful 
              but also drive meaningful results.
            </p>
            <p className="font-proxima text-base sm:text-lg lg:text-[20px] leading-[170%] text-[#4F5863] font-normal text-pale-gray">
              With our extensive experience and deep understanding of brand strategy, design, and storytelling, 
              we help businesses create compelling narratives that resonate with their target audience and stand out in 
              competitive markets.
            </p>
            <div className="pt-2 sm:pt-4">
              <CustomButton className="w-full sm:w-auto">
                Learn More
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
}
