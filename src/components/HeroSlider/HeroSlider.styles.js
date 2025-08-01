import styled, { keyframes, css } from "styled-components";
import media from "../../styles/media";

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0.5;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0.5;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const ContainerWrapper = styled.div`
  position: relative;
  z-index: 1;
  ${media.sm``}
`;

const Wrapper = styled.div`
  overflow: hidden;
  background: #020d18;
  z-index: 20000;
  min-height: 100vh;
  padding: 40px 0;
  ${media.x`
    min-height: 60vh;
  `}
`;

const Slider = styled.div`
  position: relative;
  height: 70vh;
  margin: 0 136px;
  z-index: 20000;

  ${media.md`
    margin: 0 40px;
    height: 18vh;
  `}
  ${media.sm`
    margin: 0 20px;
    height: 18vh;
  `}
  ${media.x`
    margin: 0 20px;
    height: 28vh;
  `}
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(p) => p.bg}) center/cover no-repeat;
  z-index: ${({ isLeaving }) => (isLeaving ? 1 : 2)};
  opacity: 1;

  animation: ${({ isEntering, isLeaving, direction }) =>
    isEntering
      ? css`
          ${direction === "next" ? slideInFromRight : slideInFromLeft} 1s ease
        `
      : isLeaving
      ? css`
          ${direction === "next" ? slideInFromLeft : slideInFromRight} 1s ease
        `
      : "none"};

  animation-fill-mode: forwards;
  transition: opacity 0.6s ease;
`;

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  transform: translateX(${(props) => props.index * -100}%);
`;

const SlideItem = styled.div`
  flex: 0 0 100%;
  height: 100%;
  position: relative;
  background: url(${(p) => p.bg}) center/cover no-repeat;
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const NextSlide = styled.div`
  position: absolute;
  top: 0;
  right: -18%;
  width: 14%;
  height: 100%;
  background: url(${(p) => p.bg}) center/cover no-repeat;
  opacity: 1;
  transform: scale(0.9);
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.4s ease;
  ${media.md`
    display: none;
  `}
`;

const PrevSlide = styled(NextSlide)`
  left: -18%;
  right: auto;
  ${media.md`
    display: none;
  `}
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 40%;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.3;
  ${media.md`
    width: 80%;
    font-size: 1rem;
  `}
  ${media.sm`
    width: 90%;
    font-size: 0.9rem;
    left: 5%;
    bottom: 10%;
  `}
`;

const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  left: ${({ $left }) => ($left ? "20px" : "auto")};
  right: ${({ $left }) => ($left ? "auto" : "20px")};
  transform: translateY(-50%);
  background: none;
  color: #aaa;
  border: none;
  font-size: 2.4rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  margin-left: -80px;
  margin-right: -80px;

  &:hover {
    color: white;
  }
  ${media.x`
    display: none;
  `}
`;

const InfoSection = styled.div`
  background: #020d18;
  color: white;
  padding: 60px 20px;
  display: flex;
  align-items: flex-start;
  gap: 60px;
  flex-wrap: wrap;
  ${media.md`
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
  `}
  ${media.x`
    gap: 20px;
  `}
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 220px;
  margin-left: 115px;
  margin-top: 65px;
  ${media.x`
    margin-left: 26px;
    align-items: center;
    text-align: center;
  `}
`;

const Trust = styled.div`
  color: #ccc;
  letter-spacing: 1px;
  font-size: 1rem;
  margin-bottom: 24px;
`;

const HeadingLine = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.2;
`;

const HeadingLine2 = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  line-height: 1.2;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 40px;
  ${media.md`
    margin-left: 0;
    align-items: center;
    margin-top: 10px;
  `}
`;

const Number = styled.div`
  font-size: 80px;
  text-align: left;
  display: flex;
  align-items: center;

  font-weight: 100;
  ${media.md`
    font-size: 70px;
    justify-content: center;
  `}
  ${media.sm`
    font-size: 80px;
    justify-content: center;
  `}
`;
const CountWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const SmallSuffix = styled.span`
  font-size: 40px;
  margin-left: 2px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.8);
  ${media.md`
    font-size: 28px;
    margin-top: 20px;
  `}
  ${media.sm`
    font-size: 40px;
    margin-top: 30px;
    margin-left: 10px;
  `}
`;

const Label = styled.div`
  font-size: 1.8rem;
  color: #ccc;
  margin-top: 5px;
  text-align: left;
  ${media.x`
    font-size: 1.4rem;
    text-align: center;
  `}
`;

const Divider = styled.div`
  position: relative;
  height: 20px;
  width: 120%;
  max-width: 300px;
  ${media.sm`
    width: 200%;
  `}
  ${media.x`
    width: 105%;
  `}
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-50%);
    transition: background 0.3s ease;
  }
  &:hover::before {
    background: rgba(255, 255, 255, 1);
  }
`;

export {
  ContainerWrapper,
  Wrapper,
  Slider,
  Slide,
  NextSlide,
  PrevSlide,
  OverlayText,
  NavBtn,
  InfoSection,
  TextBlock,
  Trust,
  HeadingLine,
  HeadingLine2,
  Stat,
  Number,
  SmallSuffix,
  Label,
  Divider,
  SlideItem,
  SliderWrapper,
  SlideImage,
  CountWrapper,
};
