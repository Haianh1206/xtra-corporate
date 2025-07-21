import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import React, { useState } from 'react';
import ServicesContainer from "./components/ServicesContainer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import bannerImage from "./assets/banner-img.png";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import SetYourGoals from "./components/SetYourGoals";
import WorkProcess from "./components/WorkProcess";
import ServiceVideoSection from "./components/ServiceVideoSection";





function App() {
  const [refreshKey, setRefreshKey] = useState(Date.now());

  const handleHomeClick = () => {
    setRefreshKey(Date.now());
  };

  return (
    <>
    {/* <GlobalStyle/> */}
      <Header onHomeClick={handleHomeClick} />
      <Banner key={refreshKey} />
     {/* <ContentPlaceholder></ContentPlaceholder> */}
       <ServicesContainer />
       <HeroSlider/>
       <AboutSection/>
       <SetYourGoals/>
       <WorkProcess/>
       <ServiceVideoSection/>
    </>
  );
}
export default App;

