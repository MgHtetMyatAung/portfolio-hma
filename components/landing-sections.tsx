import React from "react";
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import WorkSection from "./sections/works-section";
import ServiceSection from "./sections/services-section";
import Header from "./layouts/header";

export default function LandingSections() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServiceSection />
    </>
  );
}
