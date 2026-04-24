import { menudata } from "@/data/menuData";
import { testimonials } from "@/data/testimonials";
import { galleryData } from "@/data/galleryData";
import React from "react";
import HeroSection from "../components/HeroSection";
import Gallery from "../components/Gallery";
import TestimonialsComponent from "../components/TestimonialsComponent";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/contactSection";
import { contactInfo } from "@/data/contactInfo";
import { aboutInfo } from "@/data/aboutInfo";

const HomePage = () => {
  return (
    <>
      <HeroSection menudata={menudata} />
      <AboutSection aboutInfo={aboutInfo} />
      <Gallery sections={galleryData} />
      <TestimonialsComponent testimonials={testimonials} />
      <ContactSection contactInfo={contactInfo} />
    </>
  );
};

export default HomePage;
