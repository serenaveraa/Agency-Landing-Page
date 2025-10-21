import React from 'react';
import DecorativeUnderline from '../DecorativeUnderline/DecorativeUnderline';
import CustomButton from '../CustomButton/CustomButton';

// Import all the assets
import logoDesignBkg from './assets/logo_design_bkg.png';
import logoDesignIcon from './assets/Logo design icon 1.png';
import developmentBkg from './assets/development_bck.png';
import developmentIcon from './assets/development-icon.png';
import uxuiBkg from './assets/uxui_bck.png';
import uxuiIcon from './assets/uxui-logo.png';
import digitalMrkBkg from './assets/digital_mrk_bck.png';
import digitalMrkIcon from './assets/digital-mkt-icon.png';
import contentWritingBkg from './assets/content_writing_bck.png';
import contentWritingIcon from './assets/content-wiritng-logo.png';
import emailMrkBkg from './assets/email_mrk_bck.png';
import emailMrkIcon from './assets/email-mrk-logo.png';
import motionDesignBkg from './assets/motion_design_bck.png';
import motionDesignIcon from './assets/motion-desing-logo.png';
import printDesignBkg from './assets/print_design_bck.png';
import printDesignIcon from './assets/print-design-logo.png';
import { CustomSection } from '../CustomSections/CustomSection';

export default function ServicesSection() {
  const services = [
    {
      title: "Logo design",
      background: logoDesignBkg,
      icon: logoDesignIcon,
      link: "Request a quote →"
    },
    {
      title: "Development",
      background: developmentBkg,
      icon: developmentIcon,
      link: "Request a quote →"
    },
    {
      title: "Ui/Ux Design",
      background: uxuiBkg,
      icon: uxuiIcon,
      link: "Request a quote →"
    },
    {
      title: "Digital Marketing",
      background: digitalMrkBkg,
      icon: digitalMrkIcon,
      link: "Request a quote →"
    },
    {
      title: "Content Writing",
      background: contentWritingBkg,
      icon: contentWritingIcon,
      link: "Request a quote →"
    },
    {
      title: "Email Marketing",
      background: emailMrkBkg,
      icon: emailMrkIcon,
      link: "Request a quote →"
    },
    {
      title: "Motion Design",
      background: motionDesignBkg,
      icon: motionDesignIcon,
      link: "Request a quote →"
    },
    {
      title: "Print Design",
      background: printDesignBkg,
      icon: printDesignIcon,
      link: "Request a quote →"
    }
  ];

  return (
    <CustomSection className="bg-blue-sky py-18 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-proxima font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-gray mb-4 sm:mb-6">
            Our <span className="relative inline-block pb-2">Services<DecorativeUnderline /></span>
          </h2>
        </div>

        {/* 8 Service Cards in 2x4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              {/* Background Image */}
              <div 
                className="relative h-64 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${service.background})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <img 
                      src={service.icon} 
                      alt={`${service.title} icon`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  
                  {/* Title and Link */}
                  <div className="text-center">
                    <h3 className="font-proxima text-white font-bold text-lg mb-4">{service.title}</h3>
                    <a 
                      href="#" 
                      className="font-proxima text-white text-sm font-medium hover:text-electric-blue transition-colors duration-200"
                    >
                      {service.link}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Button */}
        <div className="text-center">
          <CustomButton size="lg" className="font-proxima">
            Request a Quote
          </CustomButton>
        </div>
      </div>
    </CustomSection>
  );
}
