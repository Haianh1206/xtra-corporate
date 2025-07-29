import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bannerImage from "../assets/banner-img.png";
import bannerImage2 from "../assets/banner-img2.png";

import {
  slideIn,
  zoomOutIn,
  slideLeft,
  slideRight,
  AnimatedItem,
  BannerSection,
  TextContent,
  Title,
  Description,
  ActionsRow,
  Button,
  SubText,
  NavButton,
} from "./Banner.styles";

// Hook kiểm tra mobile/tablet
const useDevice = () => {
  const [device, setDevice] = useState({ isMobile: false, isTablet: false });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDevice({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1025,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};


export default function Banner() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
const { isMobile, isTablet } = useDevice();
  const banners = [
    {
      image: bannerImage,
      title: "We Plan, We Execute, You Celebrate",
      description:
        "We Are Advertising Technology Experts That Drive Business Results.",
      align: "center",
      button: "Start Your New Project",
      moreInfo: "Read More About Plans",
    },
    {
      image: bannerImage2,
      title: "Protect Your Own Business",
      description: "Need a Consultant for Your Business? Contact us Today.",
      align: "left",
      button: "Contact Us Now",
      moreInfo: "Check out our packages",
    },
  ];

 useEffect(() => {
  if (isMobile || isTablet) return;

  const timer = setInterval(() => {
    setIndex((prev) => (prev + 1) % banners.length);
  }, 10000);
  return () => clearInterval(timer);
}, [isMobile, isTablet]);

  const handlePrev = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % banners.length);
  };

const current = isMobile || isTablet ? banners[1] : banners[index]; 

  return (
    <BannerSection bg={current.image} direction={direction}>
      {!isMobile && (
        <>
          <NavButton left onClick={handlePrev}>
            <FaChevronLeft />
          </NavButton>
          <NavButton right onClick={handleNext}>
            <FaChevronRight />
          </NavButton>
        </>
      )}

      <TextContent align={current.align} key={index}>
        <AnimatedItem delay="0.1s">
          <Title>{current.title}</Title>
        </AnimatedItem>
        <AnimatedItem delay="0.3s">
          <Description>{current.description}</Description>
        </AnimatedItem>
        <AnimatedItem delay="0.5s">
          <ActionsRow align={current.align}>
            <Button>{current.button}</Button>
            <SubText>{current.moreInfo}</SubText>
          </ActionsRow>
        </AnimatedItem>
      </TextContent>
    </BannerSection>
  );
}
