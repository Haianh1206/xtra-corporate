import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import React, { useState } from "react";
import ServicesContainer from "./components/ServicesContainer/ServicesContainer";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

import HeroSlider from "./components/HeroSlider/HeroSlider";
import AboutSection from "./components/AboutSection/AboutSection";
import SetYourGoals from "./components/SetYourGoals/SetYourGoals";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import ServiceVideoSection from "./components/ServiceVideoSection/ServiceVideoSection";
import BlogSlider from "./components/BlogSlider/BlogSlider";
import OurTeamSection from "./components/OurTeamSection/OurTeamSection";
import Footer from "./components/Footer/Footer";
import CustomChatIcon from "./components/CustomChatIcon/CustomChatIcon";
import FloatingMenu from "./components/FloatingMenu/FloatingMenu";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";

function App() {
  const [refreshKey, setRefreshKey] = useState(Date.now());

  const handleHomeClick = () => {
    setRefreshKey(Date.now());
  };

  return (
    <>
      <GlobalStyle />
      <Header onHomeClick={handleHomeClick} />
      <Banner key={refreshKey} />
      {/* <ContentPlaceholder></ContentPlaceholder> */}
      <ServicesContainer />
      <HeroSlider />
      <AboutSection />
      <SetYourGoals />
      <WorkProcess />
      <ServiceVideoSection />
      <BlogSlider />
      <OurTeamSection />
      <Footer />
      <CustomChatIcon />
      <FloatingMenu />
      <CookieBanner />
      <MobileNavbar />
    </>
  );
}
export default App;
