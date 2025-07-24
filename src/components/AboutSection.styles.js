import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 80px;
  background: #fff;
  gap: 48px;
  height: 80vh;
`;

const LeftColumn = styled.div`
  width: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.div`
  font-weight: bold;
  color: #888;
  margin-bottom: 16px;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 85%;
  background: #ccc;
  position: absolute;
  top: 32px;
  left: 40%;
`;

const MiddleColumn = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 38px;
  font-weight: bold;
  color: #000;
  margin-top: -16px;
  margin-bottom: 24px;

  span {
    color: #002699;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 40px;
  margin-bottom: 40px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;

  svg {
    margin-right: 10px;
    border-radius: 50%;
    padding: 5px;
    transition: all 0.3s ease;
    color: #002699;
  }

  &:hover {
    transform: translateX(4px);
    color: #002699;

    svg {
      background: #002699;
      color: #fff;
      transform: scale(1.15);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled.button`
  padding: 16px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  border: 2px solid #003cff;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ primary }) =>
    primary
      ? `
   background: #002699;
    color: #fff;

    &:hover {
      background: #fff;
      color: #002699;
    }
  `
      : `
    
     background: #fff;
    color: #002699;
    margin-left : 28px;

    &:hover {
     
       background: #002699;
      color: #fff;
    }
  `}
`;

const RightColumn = styled.div`
  width: 33.33%;
`;

// ==== Image 3D + Viền Dots ====

const Frame = styled.div`
  position: relative;
  width: 330px;
  height: 535px;
  perspective: 1000px;
`;

const BorderDots = styled.div`
  position: absolute;
  pointer-events: none;

  &.bottom,
  &.bottom2 {
    width: 90%;
    height: 12px;
    background-image: radial-gradient(black 1px, transparent 1px);
    background-size: 6px 6px;
    background-repeat: repeat-x;
    right: -5px;
  }

  &.bottom {
    bottom: -10px;
  }

  &.bottom2 {
    bottom: -28px;
  }

  &.right,
  &.right2 {
    height: 97%;
    width: 8px;
    background-image: radial-gradient(black 1px, transparent 1px);
    background-size: 6px 6px;
    background-repeat: repeat-y;
    top: 36px;
    margin-left: 20px;
  }

  &.right {
    right: -14px;
  }

  &.right2 {
    right: -34px;
  }
`;

const Image3D = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.03s ease;
  transform-style: preserve-3d;
`;
const Highlight = styled.strong`
  color: #002699;
  padding: 1px 7px 2px;
  background: rgba(167, 167, 167, 0.15);
  border-radius: 2px;
`;
export {
  Container,
  LeftColumn,
  Label,
  VerticalLine,
  MiddleColumn,
  Title,
  Paragraph,
  FeatureList,
  Feature,
  ButtonGroup,
  Button,
  RightColumn,
  Frame,
  BorderDots,
  Image3D,
  Highlight
};