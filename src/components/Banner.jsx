import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bannerImage from "../assets/banner-img.png";
import bannerImage2 from "../assets/banner-img2.png"; // thêm banner mới

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const zoomOutIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedItem = styled.div`
  opacity: 0;
  animation: ${zoomOutIn} 0.6s ease forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const BannerSection = styled.section`
  min-height: 90vh;
  padding: 160px 40px;
  background: linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  overflow: hidden;
  animation: ${(props) =>
  props.direction === "left"
    ? css`${slideLeft} 0.6s ease-in-out`
    : css`${slideRight} 0.6s ease-in-out`};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.align === "left" ? "flex-start" : "center")};
  text-align: ${(props) => (props.align === "left" ? "left" : "center")};
  max-width: 960px;
  margin: 0 auto;
  margin-top: 240px;
  > * {
    animation: ${zoomOutIn} 0.6s ease forwards;
    opacity: 0;
  }

  > *:nth-child(1) {
    animation-delay: 0.1s;
  }
  > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  > *:nth-child(3) {
    animation-delay: 0.5s;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  white-space: nowrap; // 👈 Ngăn không cho xuống dòng

  @media (max-width: 768px) {
    font-size: 36px;
    white-space: normal; // Cho phép xuống dòng ở mobile
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: #eee;
  margin-bottom: 30px;
`;

const ActionsRow = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
flex-direction: ${({ align }) => (align === "left" ? "row" : "column")};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Button = styled.button`
  padding: 14px 28px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 6px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #0d6efd;
  }
`;

const SubText = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
   display: block;
 
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #000;
  border: none;
  color: #fff;
  font-size: 24px;
  padding: 6px 10px 4px 10px;
  cursor: pointer;
  z-index: 2;
  border-radius: 8%;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  ${(props) =>
    props.left &&
    css`
      left: 20px;
    `}
  ${(props) =>
    props.right &&
    css`
      right: 20px;
    `}
`;

export default function Banner() {
  const [index, setIndex] = useState(0);

  const banners = [
    {
      image: bannerImage,
      title: "We Plan, We Execute, You Celebrate",
      description:
        "We Are Advertising Technology Experts That Drive Business Results.",
      align: "center",
      button: "Start You New Project",
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
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const [direction, setDirection] = useState("right");

const handlePrev = () => {
  setDirection("left");
  setIndex((prev) => (prev - 1 + banners.length) % banners.length);
};

const handleNext = () => {
  setDirection("right");
  setIndex((prev) => (prev + 1) % banners.length);
};


  const current = banners[index];

  return (
    <BannerSection bg={current.image} direction={direction} >
      <NavButton left onClick={handlePrev}>
        <FaChevronLeft />
      </NavButton>
      <NavButton right onClick={handleNext}>
        <FaChevronRight />
      </NavButton>

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
