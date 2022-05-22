import React from "react";
import AboutCaliphTools from "./AboutCaliphTools";
import BusinessSummary from "./BusinessSummary";
import Carousel from "./Carousel";
import Tools from "./Tools";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <AboutCaliphTools></AboutCaliphTools>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <WhyChooseUs></WhyChooseUs>
      <h1>Caliph Tools Manufacturer</h1>
    </div>
  );
};

export default Home;
