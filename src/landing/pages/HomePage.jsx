import { menudata } from "@/data/menuData";
import { testimonials } from "@/data/testimonials";
import { galleryData } from "@/data/galleryData";
import React from "react";
import HeroSection from "../components/HeroSection";
import Gallery from "../components/Gallery";
import TestimonialsComponent from "../components/TestimonialsComponent";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import { contactInfo } from "@/data/contactInfo";
import { aboutInfo } from "@/data/aboutInfo";
import OrderSection from "../components/OrderSection";
import MenuSection from "../components/MenuSection";

const HomePage = () => {
  return (
    <>
      <HeroSection menudata={menudata} />
      {/* <MenuSection /> */}
      <OrderSection />
      <TestimonialsComponent testimonials={testimonials} />
      <Gallery sections={galleryData} />
      <AboutSection aboutInfo={aboutInfo} />
      <ContactSection contactInfo={contactInfo} />
    </>
  );
};

export default HomePage;
