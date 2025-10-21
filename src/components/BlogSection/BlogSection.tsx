import React from 'react';
import DecorativeUnderline from '../DecorativeUnderline/DecorativeUnderline';
import CustomButton from '../CustomButton/CustomButton';

// Import new blog images
import blog1Image from './assets/Blog1.png';
import blog2Image from './assets/blog2.png';
import blog3Image from './assets/blog3.png';
import { CustomSection } from '../CustomSections/CustomSection';

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Basic rule of running web agency business",
      image: blog1Image,
      alt: "Two people high-fiving over a laptop on a desk"
    },
    {
      title: "Understanding different types of Marketing data",
      image: blog2Image,
      alt: "A man drawing a mind map with a marker on a glass board"
    },
    {
      title: "Understanding the users need to grow your business",
      image: blog3Image,
      alt: "A hand writing the word AUDIENCE on a whiteboard"
    }
  ];

  return (
    <CustomSection className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-gray mb-4 sm:mb-6">
            Stay <span className="relative inline-block pb-2">updated<DecorativeUnderline /></span> with blogs
          </h2>
        </div>

        {/* Desktop: Show all 3 cards */}
        <div className="hidden lg:flex justify-center gap-[30px] mb-8 sm:mb-12 ">
          {blogPosts.map((post, index) => (
            <article key={index} className="w-[370px] h-[366px] rounded-xl shadow-sm hover:shadow-lg 
            transition-shadow duration-300 overflow-hidden bg-blue-sky pb-[20px]">
              <div className="w-full overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-[30px] py-6 h-[166px] flex flex-col justify-between">
                <h3 className="text-charcoal-gray mb-4 font-proxima text-2xl leading-[140%] tracking-normal">
                  {post.title}
                </h3>
                <a 
                  href="#" 
                  className="text-electric-blue hover:text-blue-700 transition-colors"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Tablet: Show 2 cards */}
        <div className="hidden md:flex lg:hidden justify-center gap-[30px] mb-8 sm:mb-12">
          {blogPosts.slice(0, 2).map((post, index) => (
            <article key={index} className="w-[314px] h-[354px] rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-blue-sky">
              <div className="w-full h-[200px] overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-[30px] py-6 h-[166px] flex flex-col justify-between">
                <h3 className="text-charcoal-gray mb-4 font-proxima text-2xl leading-[140%] tracking-normal">
                  {post.title}
                </h3>
                <a 
                  href="#" 
                  className="text-electric-blue hover:text-blue-700 transition-colors"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile: Show 2 cards stacked */}
        <div className="flex md:hidden flex-col items-center gap-[30px] mb-8 sm:mb-12">
          {blogPosts.slice(0, 2).map((post, index) => (
            <article key={index} className="w-full max-w-[335px] h-[366px] rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-blue-sky">
              <div className="w-full h-[200px] overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-[30px] py-6 h-[166px] pb-[20px] flex flex-col justify-between">
                <h3 className="text-charcoal-gray mb-4 font-proxima text-2xl leading-[140%] tracking-normal">
                  {post.title}
                </h3>
                <a 
                  href="#" 
                  className="text-electric-blue hover:text-blue-700 transition-colors"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <CustomButton size="lg">
            View all
          </CustomButton>
        </div>
      </div>
    </CustomSection>
  );
}
