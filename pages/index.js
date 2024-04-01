import React from "react";
import Header from "./components/Header";
import HomeBanner from "./components/homebanner";
import ServicesSection from "./components/services-section";
import DoctorSlider from "./components/doctor-slider";
import OffersSlider from "./components/offers-slider";
import BlogSlider from "./components/blog-slider";
import DownloadSection from "./components/download-section";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <ServicesSection />
      <DoctorSlider />
      <OffersSlider />
      <BlogSlider />
      <DownloadSection />
      <Footer />
    </>
  );
}
