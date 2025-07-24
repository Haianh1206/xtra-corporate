import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import { ArrowLeft, ArrowRight } from "lucide-react";


// Animations
import {
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
}from "./HeroSlider.styles";
const slides = [
  { src: slide1, text: "Start today and get result tomorrow" },
  { src: slide2, text: "Your trusted business partner" },
  { src: slide3, text: "Solutions that deliver results" },
];

// Main Component
export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const t = setInterval(() => {
      setDirection("next");
      setIdx((i) => (i + 1) % slides.length);
    }, 8000);
    return () => clearInterval(t);
  }, []);

  const handleSlide = (dir) => {
    setDirection(dir);
    setIdx((i) => {
      if (dir === "next") return (i + 1) % slides.length;
      else return (i - 1 + slides.length) % slides.length;
    });
  };

  return (
    <ContainerWrapper>
      <Wrapper>
        <Slider>
          {slides.map((s, i) => (
            <Slide key={i} bg={s.src} active={i === idx} direction={direction}>
              {i === idx && <OverlayText>{s.text}</OverlayText>}
            </Slide>
          ))}
          <PrevSlide
            bg={slides[(idx - 1 + slides.length) % slides.length].src}
            onClick={() => handleSlide("prev")}
          />

          {/* Ảnh preview nhỏ */}
          <NextSlide
            bg={slides[(idx + 1) % slides.length].src}
            onClick={() => handleSlide("next")}
          />

          <NavBtn $left onClick={() => handleSlide("prev")}>
            <ArrowLeft size={32} />
          </NavBtn>
          <NavBtn onClick={() => handleSlide("next")}>
            <ArrowRight size={32} />
          </NavBtn>
        </Slider>

        <InfoSection>
  <TextBlock>
    <Trust>TRUST US</Trust>
    <HeadingLine>WE ARE</HeadingLine>
    <HeadingLine2>AUTHENTIC</HeadingLine2>
  </TextBlock>

 
  <Stat>
  <Number>
    41<SmallSuffix>+</SmallSuffix>
  </Number>
  <Divider />
  <Label>Years of Experience</Label>
</Stat>

<Stat>
  <Number>
    21<SmallSuffix>k</SmallSuffix>
  </Number>
  <Divider />
  <Label>Cases Completed</Label>
</Stat>

<Stat>
  <Number>
    80<SmallSuffix>k</SmallSuffix>
  </Number>
  <Divider />
  <Label>Satisfied Customers</Label>
</Stat>



</InfoSection>

      </Wrapper>
    </ContainerWrapper>
  );
}
