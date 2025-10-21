import React from 'react';
import DecorativeUnderline from '../DecorativeUnderline/DecorativeUnderline';
import groupProject from './assets/group_project.png';
import { CustomSection } from '../CustomSections/CustomSection';

export default function BrandIdentitySection() {
  return (
    <CustomSection className="bg-white h-270 sm:h-268 sm:px-8 py-12 sm:py-16 lg:h-220 lg:pb-20 lg:pt-40 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="text-center pb-7 sm:pb-10 lg:pb-15">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-charcoal-gray mb-4 sm:mb-6">
            Elevate Your <span className="relative inline-block pb-2">Brand Identity<DecorativeUnderline thickness="thin" /></span>
          </h2>
          <p className="font-proxima text-base sm:text-lg lg:text-[20px] leading-[160%] text-charcoal-gray font-normal text-center max-w-5xl mx-auto">
            Unlock the true potential of your brand. Our passionate team of creative experts is committed to 
            delivering innovative and tailor-made solutions that elevate your brand to new heights.
          </p>
        </div>

        {/* Bottom Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Left Column - Circular Image */}
          <div className="flex justify-center order-first lg:order-first lg:pl-8 lg:pr-14 sm:pb-10 pb-7">
            <div className="relative">
              <img 
                src={groupProject} 
                alt="Team collaboration" 
                className="w-full max-w-[335px] h-[311px] sm:max-w-[342px] sm:h-[317px] lg:max-w-[411px] lg:h-[381px] h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-4 sm:space-y-6 font-proxima text-base text-[#4F5863] 
          sm:text-lg lg:text-[20px] leading-[170%] font-normal leading-[170%] tracking-[0px] lg:text-left sm:text-left text-center">
            <p>
              We believe that a strong brand is the cornerstone of every successful business. Our approach 
              combines strategic thinking with creative excellence to deliver solutions that not only look beautiful 
              but also drive meaningful results.
            </p>
            <p>
              With our extensive experience and deep understanding of brand strategy, design, and storytelling, 
              we collaborate closely with our clients to craft brand experiences that resonate with their target audience. 
              Our goal is to create brands that not only capture attention but also foster trust, loyalty, and recognition.
            </p>
          </div>

        </div>
      </div>
    </CustomSection>
  );
}
