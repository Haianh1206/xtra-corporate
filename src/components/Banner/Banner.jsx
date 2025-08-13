import { useEffect, useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bannerImage from "../../assets/banner-img.png";
import bannerImage2 from "../../assets/banner-img2.png";

import {
  AnimatedItem,
  BannerSection,
  TextContent,
  Title,
  Description,
  ActionsRow,
  Button,
  SubText,
  NavButton,
  SliderWrapper,
  SlideItem,
} from "./Banner.styles";

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
  const [showNav, setShowNav] = useState(false);
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
    if (!showNav) return;
    const timeout = setTimeout(() => setShowNav(false), 5000);
    return () => clearTimeout(timeout);
  }, [showNav]);
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
    <BannerSection onClick={() => setShowNav(true)}>
      <>
        <NavButton left visible={showNav} onClick={handlePrev}>
          <FaChevronLeft />
        </NavButton>
        <NavButton right visible={showNav} onClick={handleNext}>
          <FaChevronRight />
        </NavButton>
      </>

      <SliderWrapper index={index}>
        {banners.map((b, i) => (
          <SlideItem key={i}>
            <BannerSection bg={b.image}>
              <TextContent align={b.align} key={index}>
                <AnimatedItem delay="0.1s">
                  <Title>{b.title}</Title>
                </AnimatedItem>
                <AnimatedItem delay="0.3s">
                  <Description>{b.description}</Description>
                </AnimatedItem>
                <AnimatedItem delay="0.5s">
                  <ActionsRow align={b.align}>
                    <Button>{b.button}</Button>
                    <SubText>{b.moreInfo}</SubText>
                  </ActionsRow>
                </AnimatedItem>
              </TextContent>
            </BannerSection>
          </SlideItem>
        ))}
      </SliderWrapper>
    </BannerSection>
  );
}
