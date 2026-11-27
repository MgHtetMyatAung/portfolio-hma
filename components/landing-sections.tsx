import React from "react";
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import WorkSection from "./sections/works-section";
import ServiceSection from "./sections/services-section";

export default function LandingSections() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServiceSection />
    </>
  );
}
