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
    author: "John Smith",
    role: "CEO, TechStart",
    image: happyClient
  };

  return (
    <CustomSection className="bg-white py-20">
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
          
          {/* Testimonial Card - Less Wide */}
          <div className="bg-pale-lilac rounded-xl p-8 lg:p-12 max-w-4xl mx-auto">
            {/* Testimonial Content */}
            <div className="flex items-center space-x-8 lg:space-x-16">
              {/* Client Image - Takes ~1/3 of the space */}
              <div className="flex-shrink-0 w-1/3 flex justify-center">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.author} testimonial`}
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
                />
              </div>

              {/* Quote - Takes ~2/3 of the space */}
              <div className="flex-1 w-2/3">
                <div className="mb-4">
                  <img 
                    src={quoteAsset} 
                    alt="Quote mark" 
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
                <p className="font-proxima text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="font-proxima text-charcoal-gray font-semibold">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
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
