import AboutUs from "@/components/shadcn-studio/blocks/about-us-page-01/about-us-page-01";
import ContactUs from "@/components/shadcn-studio/blocks/contact-us-page-01/contact-us-page-01";
import Gallery from "@/components/shadcn-studio/blocks/gallery-component-01/gallery-component-01";
import HeroSection from "@/components/shadcn-studio/blocks/hero-section-41/hero-section-41";
import TestimonialsComponent from "@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01";
import { aboutStats } from "@/data/aboutStatus";
import { contactInfo } from "@/data/contactInfo";
import { menudata } from "@/data/menuData";
import { testimonials } from "@/data/testimonials";
import { galleryData } from "@/data/galleryData";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection menudata={menudata} />
      <AboutUs stats={aboutStats} />
      <Gallery sections={galleryData} />
      <TestimonialsComponent testimonials={testimonials} />
      <ContactUs contactInfo={contactInfo} />
    </>
  );
};

export default HomePage;
