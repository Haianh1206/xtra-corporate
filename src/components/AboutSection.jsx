import React, { useState } from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import aboutsection1 from "../assets/abousection1.png";

// === Styled Components ===
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
export default function BusinessSection() {
  const [transformStyle, setTransformStyle] = useState(
    "rotateX(0deg) rotateY(0deg)"
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * -20; // Xoay ngược chiều con trỏ => kéo ra
    const rotateX = (y / rect.height - 0.5) * 20;

    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const resetTransform = () => {
    setTransformStyle("rotateX(0deg) rotateY(0deg)");
  };

  return (
    <Container>
      <LeftColumn>
        <Label>OUR STORY</Label>
        <VerticalLine />
      </LeftColumn>

      <MiddleColumn>
        <Title>
          SOMETHING KNOW <br />
          ABOUT <span>OUR BUSINESS</span>
        </Title>
        <Paragraph>
          <Highlight>XTRA Theme</Highlight> is a creative, responsive, live drag
          and drop and easy-to-use WordPress theme for any kind of websites. It
          allows you to create sites for a wide range of businesses and styles..
          The changing role of the traditional bank manager and accountant see
          these two segments requiring business advisory expertise and content.
          Strategy and Management is the key. Xtra only delivers content for the
          small business segment, and increasingly digital only delivery as
          search becomes the default for knowledge.
        </Paragraph>

        <FeatureList>
          <Feature>
            <ArrowRight size={20} /> Coherent in doing things
          </Feature>
          <Feature>
            <ArrowRight size={20} /> New and modern ideas
          </Feature>
          <Feature>
            <ArrowRight size={20} /> Work progress coordination
          </Feature>
          <Feature>
            <ArrowRight size={20} /> Accurate and friendly support
          </Feature>
        </FeatureList>

        <ButtonGroup>
          <Button primary>About Our Team</Button>
          <Button>Contact Us Now</Button>
        </ButtonGroup>
      </MiddleColumn>

      <RightColumn>
        <Frame onMouseMove={handleMouseMove} onMouseLeave={resetTransform}>
          <BorderDots className="bottom" />
          <BorderDots className="bottom2" />
          <BorderDots className="right" />
          <BorderDots className="right2" />
          <Image3D
            src={aboutsection1}
            alt="About Image"
            style={{ transform: transformStyle }}
          />
        </Frame>
      </RightColumn>
    </Container>
  );
}
