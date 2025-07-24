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
import BlogSlider from "./components/BlogSlider";
import OurTeamSection from "./components/OurTeamSection";
import Footer from "./components/Footer";
import CustomChatIcon from "./components/CustomChatIcon";
import FloatingMenu from "./components/FloatingMenu";
import CookieBanner from "./components/CookieBanner";





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
       <BlogSlider/>
       <OurTeamSection/>
       <Footer/>
       <CustomChatIcon/>
       <FloatingMenu/>
       <CookieBanner/>
    </>
  );
}
export default App;

