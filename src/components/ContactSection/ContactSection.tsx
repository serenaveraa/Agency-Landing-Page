import React from 'react';
import DecorativeUnderline from '../DecorativeUnderline/DecorativeUnderline';
import CustomButton from '../CustomButton/CustomButton';

// Import contact assets
import addressIcon from './assets/adress_icon.png';
import contactIcon from './assets/contact_icon.png';
import emailIcon from './assets/email_icon.png';

export default function ContactSection() {
  return (
    <>
      {/* Title Section - White Background */}
      <section className="bg-white py-8 sm:py-8 lg:py-8 px-4 sm:px-8 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="font-proxima font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-gray mb-4 sm:mb-6">
            <span className="relative inline-block pb-2">Contact <DecorativeUnderline /> </span> us today
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section - Blue Background */}
      <section className="bg-blue-sky py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <img 
                    src={addressIcon} 
                    alt="Address icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-proxima font-bold text-charcoal-gray mb-1">Office Address:</div>
                  <div className="font-proxima text-gray-600">66 Road Broklyn Street, 600</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <img 
                    src={contactIcon} 
                    alt="Contact icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-proxima font-bold text-charcoal-gray mb-1">Contact No:</div>
                  <div className="font-proxima text-gray-600">(509) 562-1912</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 mt-1">
                  <img 
                    src={emailIcon} 
                    alt="Email icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-proxima font-bold text-charcoal-gray mb-1">Email:</div>
                  <div className="font-proxima text-gray-600">contact@creativedesign.com</div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="font-proxima block text-gray-700 font-semibold mb-2">Name*</label>
                  <input 
                    type="text" 
                    className="font-proxima w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue"
                    placeholder="Your name here"
                  />
                </div>
                
                <div>
                  <label className="font-proxima block text-gray-700 font-semibold mb-2">Email*</label>
                  <input 
                    type="email" 
                    className="font-proxima w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue"
                    placeholder="Your email here"
                  />
                </div>
                
                <div>
                  <label className="font-proxima block text-gray-700 font-semibold mb-2">Company name</label>
                  <input 
                    type="text" 
                    className="font-proxima w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue"
                    placeholder="Company name"
                  />
                </div>
                
                <div>
                  <label className="font-proxima block text-gray-700 font-semibold mb-2">Phone no*</label>
                  <input 
                    type="tel" 
                    className="font-proxima w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue"
                    placeholder="Phone no"
                  />
                </div>
                
                <CustomButton 
                  type="submit"
                  size="lg"
                  fullWidth={true}
                  className="font-proxima"
                >
                  Submit
                </CustomButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
