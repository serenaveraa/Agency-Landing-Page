import React from 'react';
import rightArrowIcon from '../CustomButton/assets/Right arrow icon 1.png';

export default function ServiceCard({
  background = '',
  icon = '',
  title = '',
  link = '',
}: {
  background: string;
  icon: string;
  title: string;
  link: string;
}) {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer
                 w-[158px] h-[161px] sm:w-[314px] sm:h-[320px] lg:w-[270px] lg:h-[320px]">
      {/* Background Image */}
      <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat flex flex-col justify-end"
        style={{ backgroundImage: `url(${background})` }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300"></div>

        {/* Content (icon + title + link) */}
        <div className="relative z-10 p-6 pl-2 sm:pl-7 ">
          {/* Icon + Title in one line */}
          <div className="flex items-center mb-2 sm:pr-4 pb-2 sm:pb-5">
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-6 h-6 sm:w-9 sm:h-9 object-contain"
            />
            <h3 className="font-proxima text-white font-bold text-4 ml-2 sm:text-5 sm:ml-3">
              {title}
            </h3>
          </div>

          {/* Link below */}
          <button
  className="font-proxima sm:font-medium font-bold text-white text-sm hover:underline transition-colors duration-200 flex items-center gap-2"
>
  <span>{link}</span>
  <img 
    src={rightArrowIcon} 
    alt="Arrow" 
    className="w-4 h-4 object-contain"
  />
</button>

        </div>
      </div>
    </div>
  );
}
