import styled, { keyframes, css } from "styled-components";
import media from "../styles/media";
import {
  centerTextResponsive,
  containerResponsive,
} from "../styles/Responsive.styles";

// Animations
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
    opacity: 1;
    transform: translateX(0px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0px);
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
  height: 120vh; // Mặc định trên desktop
  padding: 160px 40px;
  background: linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  overflow: hidden;

  ${(props) =>
  props.direction === "left"
    ? css`
        animation: ${slideLeft} 0.5s ease-in-out forwards;
      `
    : css`
        animation: ${slideRight} 0.5s ease-in-out forwards;
      `};


  ${media.xl`
    height: auto;
    min-height: 60vh;
    padding: 120px 34px;
  `}

  ${media.lg`
    height: auto;
    min-height: 50vh;
    padding: 100px 24px;
  `}

  ${media.md`
    height: auto;
    min-height: 42vh;
    padding: 80px 16px;
  `}

  ${media.sm`
    min-height: 36vh;
    padding: 0px 12px 36px 12px;
  `}
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

  ${media.md`
    margin-top: 160px;
  `}
   ${media.md`
  align-items: center;
  `}
  
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 36px;
  white-space: nowrap;
  margin-top: 20px;

  ${media.md`
    font-size: 32px;
    white-space: normal;
      margin-top: 0px;
  margin-bottom: 16px;
  `}
 ${media.sm`
      margin-top: -10px;
  `}
  ${centerTextResponsive}
`;

const Description = styled.p`
  font-size: 20px;
  color: #eee;
  margin-bottom: 60px;

  ${centerTextResponsive}

  ${media.md`
    font-size: 18px;
  `}
   ${media.sm`
  margin-bottom: 30px;
  
  `}
`;

const ActionsRow = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ align }) => (align === "left" ? "row" : "column")};

  ${media.md`
    flex-direction: column;
    gap: 12px;
   ;
  `}
`;

const Button = styled.button`
  padding: 18px 44px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 2px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
font-size : 16px;
  &:hover {
    background: #fff;
    color: #0d6efd;
  }
  ${media.sm`
  padding: 8px 20px;
  display: block;
    margin: 0 auto;
  `}
`;

const SubText = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  display: block;
  ${media.sm`
    display: none;
  `}
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #222;
  border: none;
  color: #fff;
  font-size: 24px;
  padding: 6px 10px 4px 10px;
  cursor: pointer;
  z-index: 2;
  border-radius: 8%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  transition: opacity 0.5s ease;

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

  ${media.x`
    display: none;
  `}
`;


export {
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
};
