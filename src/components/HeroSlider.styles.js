import styled, { keyframes, css } from "styled-components";

const slideInFromRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Styled Components
const ContainerWrapper = styled.div`
  position: relative;
  z-index: 1;

`;

const Wrapper = styled.div`
  overflow: hidden;
  background: #020d18;
  z-index: 20000;
      height: 120vh;

`;

const Slider = styled.div`
  position: relative;
  height: 70vh;
  margin: 0 136px;
  z-index: 20000;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(p) => p.bg}) center/cover no-repeat;
  opacity: ${({ active }) => (active ? 1 : 0)};
  z-index: ${({ active }) => (active ? 2 : 0)};
  animation: ${({ active, direction }) =>
    active
      ? css`
          ${direction === "next"
            ? slideInFromRight
            : slideInFromLeft} 0.8s ease forwards
        `
      : "none"};
  transition: opacity 0.8s ease;
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
`;

const InfoSection = styled.div`
  background: #020d18;
  color: white;
  padding: 60px 20px;
  display: flex;
  // justify-content: center;
  align-items: flex-start;
  gap: 60px;
  flex-wrap: wrap;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 220px;
  margin-left : 115px;
  margin-top: 65px;
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
  margin-top : 40px;
  &:last-of-type {
    margin-left: 45px; /* Giảm đi 20px so với mặc định */
  }
`;


const Number = styled.div`
  font-size: 80px;
  text-align: left;
  display: flex;
  align-items: center; /* giữ ký tự nhỏ cùng hàng */
  font-weight : 100;
`;

const SmallSuffix = styled.span`
  font-size: 40px;
  margin-left: 2px;
    margin-top: 36px;
color: rgba(255, 255, 255, 0.8);
`;


const Label = styled.div`
  font-size: 1.8rem;
  color: #ccc;
  margin-top: 5px;
  text-align: left;

`;


const Divider = styled.div`
  position: relative;
  height: 20px; // vùng hover mở rộng
  width: 200%;
  max-width: 300px;

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

const PrevSlide = styled(NextSlide)`
  left: -18%;
  right: auto;
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
  Divider
};
