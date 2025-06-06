
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Timeline from '../components/Timeline';
import Stories from '../components/Stories';
import Solutions from '../components/Solutions';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Timeline />
      <Stories />
      <Solutions />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
