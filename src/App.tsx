import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import BrandIdentitySection from './components/BrandIdentitySection/BrandIdentitySection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import ContactSection from './components/ContactSection/ContactSection';
import BlogSection from './components/BlogSection/BlogSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BrandIdentitySection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
