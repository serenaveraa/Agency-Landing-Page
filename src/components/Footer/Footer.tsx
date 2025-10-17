import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

// Import footer assets
import companyLogo from './assets/company_logo.png';
import locationIcon from './assets/location.png';
import phoneIcon from './assets/call.png';
import emailIcon from './assets/sms.png';
import socialIcon1 from './assets/Social icon 1.png';
import socialIcon2 from './assets/Social icon 2.png';
import socialIcon3 from './assets/Social icon 3.png';
import socialIcon4 from './assets/Social icon 4.png';

export default function Footer() {
  return (
    <footer className="bg-dark-blue w-full">
      <div className="px-4 sm:px-8 lg:px-32 py-12 sm:py-16">
        {/* Desktop: 4 columns */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Logo & Social Media */}
          <div>
            <div className="mb-9">
              <img 
                src={companyLogo} 
                alt="Company Logo" 
                className="w-[70px] h-[70px]"
              />
            </div>
            <div className="flex gap-[18px]">
              <img src={socialIcon1} alt="Social Media" className="w-6 h-6" />
              <img src={socialIcon2} alt="Social Media" className="w-6 h-6" />
              <img src={socialIcon3} alt="Social Media" className="w-6 h-6" />
              <img src={socialIcon4} alt="Social Media" className="w-6 h-6" />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-proxima font-bold text-xl leading-[100%] tracking-normal mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <span>66 Road Broklyn Street, 600</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
                <span>(509) 562-1912</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <img src={emailIcon} alt="Email" className="w-5 h-5" />
                <span>contact@creativedesign.com</span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white font-proxima font-bold text-xl leading-[100%] tracking-normal mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">About</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Our Team</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Shop</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Career</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-white font-proxima font-bold text-xl leading-[100%] tracking-normal mb-6">
              Subscribe to our Newsletter
            </h3>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email here"
                className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue"
              />
              <p className="text-sm text-gray-400">
                By subscribing you agree to our Terms & Conditions
              </p>
              <CustomButton 
                size="md" 
                fullWidth={true}
              >
                Subscribe
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Tablet: 2x2 grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 mb-8 sm:mb-12">
          {/* Logo & Social Media */}
          <div>
            <div className="mb-9">
              <img 
                src={companyLogo} 
                alt="Company Logo" 
                className="w-[62px] h-[62px]"
              />
            </div>
            <div className="flex gap-[18px]">
              <img src={socialIcon1} alt="Social Media" className="w-6 h-6" />
              <img src={socialIcon2} alt="Social Media" className="w-6 h-6" />
              <img src={socialIcon3} alt="Social Media" className="w-6 h-6" />
              <img src={socialIcon4} alt="Social Media" className="w-6 h-6" />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-proxima font-bold text-xl leading-[100%] tracking-normal mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <span>66 Road Broklyn Street, 600</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
                <span>(509) 562-1912</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <img src={emailIcon} alt="Email" className="w-5 h-5" />
                <span>contact@creativedesign.com</span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white font-proxima font-bold text-xl leading-[100%] tracking-normal mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">About</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Our Team</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Shop</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Career</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-white font-proxima font-bold text-xl leading-[100%] tracking-normal mb-6">
              Subscribe to our Newsletter
            </h3>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email here"
                className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue"
              />
              <p className="text-sm text-gray-400">
                By subscribing you agree to our Terms & Conditions
              </p>
              <CustomButton 
                size="md" 
                fullWidth={true}
              >
                Subscribe
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Mobile: All vertical */}
        <div className="flex md:hidden flex-col gap-8 mb-8 sm:mb-12">
          {/* Logo & Social Media */}
          <div>
            <div className="mb-9">
              <img 
                src={companyLogo} 
                alt="Company Logo" 
                className="w-[62px] h-[62px]"
              />
            </div>
            <div className="flex gap-[18px]">
              <img src={socialIcon1} alt="Social Media" className="w-6 h-6" />
              <img src={socialIcon2} alt="Social Media" className="w-6 h-6" />
              <img src={socialIcon3} alt="Social Media" className="w-6 h-6" />
              <img src={socialIcon4} alt="Social Media" className="w-6 h-6" />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-proxima font-bold text-xl leading-[100%] tracking-normal mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <span>66 Road Broklyn Street, 600</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
                <span>(509) 562-1912</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <img src={emailIcon} alt="Email" className="w-5 h-5" />
                <span>contact@creativedesign.com</span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white font-proxima font-bold text-xl leading-[100%] tracking-normal mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">About</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Our Team</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Shop</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Career</a></li>
              <li><a href="#" className="text-white hover:text-electric-blue transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-white font-proxima font-bold text-xl leading-[100%] tracking-normal mb-6">
              Subscribe to our Newsletter
            </h3>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email here"
                className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue"
              />
              <p className="text-sm text-gray-400">
                By subscribing you agree to our Terms & Conditions
              </p>
              <CustomButton 
                size="md" 
                fullWidth={true}
              >
                Subscribe
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2023 Creative Design Agency, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
