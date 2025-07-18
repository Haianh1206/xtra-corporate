import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import React, { useState } from 'react';
import ServicesContainer from "./components/ServicesContainer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import bannerImage from "./assets/banner-img.png";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";

const Wrapper = styled.div`
  background:
    linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${bannerImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  
  color: white;
`;
const PageWrapper = styled.div`
  position: relative;
  background: #f9f9f9;
`;

const FixedSliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const PushedContent = styled.div`
  margin-top: 70vh; // hoặc đúng chiều cao của HeroSlider
`;

function App() {
  const [refreshKey, setRefreshKey] = useState(Date.now());

  const handleHomeClick = () => {
    setRefreshKey(Date.now());
  };

  return (
    <>
      <Header onHomeClick={handleHomeClick} />
      <Banner key={refreshKey} />
     {/* <ContentPlaceholder></ContentPlaceholder> */}
       <ServicesContainer />
       <HeroSlider/>
       <AboutSection/>
    </>
  );
}
export default App;

