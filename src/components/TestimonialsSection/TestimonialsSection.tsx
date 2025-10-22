import React from 'react';
import DecorativeUnderline from '../DecorativeUnderline/DecorativeUnderline';

// Import testimonial assets
import happyClient from './assets/happy_client.png';
import quoteAsset from './assets/commas.png';
import leftSliderBtn from './assets/Slider btn lft 1.png';
import rightSliderBtn from './assets/Slider btn rgt 1.png';
import { CustomSection } from '../CustomSections/CustomSection';

export default function TestimonialsSection() {
  const testimonial = {
    text: "Their design process is really unique. They collaborated with us on our project. The communication was simple and transparent. They have a talented team of designer who understands the insights very clearly and continues to push their efforts.",
    image: happyClient
  };

  return (
    <CustomSection className="bg-white py-20 h-247 sm:h-275 lg:h-238 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-proxima font-bold text-4xl lg:text-5xl text-charcoal-gray mb-6">
            Happy <span className="relative inline-block pb-2"> stories <DecorativeUnderline /></span> of our clients
          </h2>
        </div>

        {/* Single Testimonial with External Navigation */}
        <div className="relative flex items-center justify-center">
          {/* Left Navigation Arrow */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:opacity-80 transition-opacity z-10"
          >
            <img 
              src={leftSliderBtn} 
              alt="Previous testimonial" 
              className="w-12 h-12 object-contain"
            />
          </button>
          
          {/* Testimonial Card */}
          <div className="bg-pale-lilac rounded-xl p-8 lg:p-12 max-w-4xl mx-auto w-83 h-165 md:w-120 md:h-171 lg:w-242 lg:h-95">
            {/* Testimonial Content */}
            <div className="flex items-center space-x-8 lg:space-x-16">
              {/* Client Image  */}
              <div className="flex-shrink-0 flex justify-center">
                <img 
                  src={testimonial.image}
                  alt="Client testimonial"
                  className="h-60 sm:h-73 object-cover"
                />
              </div>

              {/* Quote */}
              <div className="flex-1 text-cat-gray">
                <div className="mb-4">
                  <img 
                    src={quoteAsset} 
                    alt="Quote mark" 
                    className="w-9 h-8 object-contain"
                  />
                </div>
                <p className="font-proxima text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="font-proxima text-charcoal-gray font-semibold">
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Navigation Arrow */}
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:opacity-80 transition-opacity z-10"
          >
            <img 
              src={rightSliderBtn} 
              alt="Next testimonial" 
              className="w-12 h-12 object-contain"
            />
          </button>
        </div>
      </div>
    </CustomSection>
  );
}
