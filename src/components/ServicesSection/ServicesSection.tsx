import React from 'react';
import DecorativeUnderline from '../DecorativeUnderline/DecorativeUnderline';
import CustomButton from '../CustomButton/CustomButton';
import { CustomSection } from '../CustomSections/CustomSection';
import ServiceCard from './ServiceCard';

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

export default function ServicesSection() {
  const services = [
    { title: 'Logo design', background: logoDesignBkg, icon: logoDesignIcon },
    { title: 'Development', background: developmentBkg, icon: developmentIcon },
    { title: 'UI/UX Design', background: uxuiBkg, icon: uxuiIcon },
    { title: 'Digital Marketing', background: digitalMrkBkg, icon: digitalMrkIcon },
    { title: 'Content Writing', background: contentWritingBkg, icon: contentWritingIcon },
    { title: 'Email Marketing', background: emailMrkBkg, icon: emailMrkIcon },
    { title: 'Motion Design', background: motionDesignBkg, icon: motionDesignIcon },
    { title: 'Print Design', background: printDesignBkg, icon: printDesignIcon },
  ];

  return (
    <CustomSection className="bg-blue-sky h-160 py-18 sm:h-250 sm:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto justify-center">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-proxima font-bold text-6 sm:text-4xl lg:text-5xl text-charcoal-gray mb-4 sm:mb-6">
            Our <span className="relative inline-block pb-2">Services<DecorativeUnderline /></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-12 sm:grid-cols-2 sm:grid-rows-2 sm:gap-y-10 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12 justify-items-center">
           {services.map((service, i) => (
              <div
                key={i}
                className={`${i >= 4 ? 'hidden lg:block' : ''}`}
              >
                <ServiceCard {...service} link="Request a quote" />
              </div>
            ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center lg:pt-15">
          <CustomButton size="lg" className="">
            <span className="block sm:hidden">View more</span>
            <span className="hidden sm:block">Request a Quote</span>
          </CustomButton>
        </div>


      </div>
    </CustomSection>
  );
}
