import React, { useState, useEffect, useRef } from "react";
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
  Divider,
} from "./HeroSlider.styles";
const slides = [
  { src: slide1, text: "Start today and get result tomorrow" },
  { src: slide2, text: "Your trusted business partner" },
  { src: slide3, text: "Solutions that deliver results" },
];

// Main Component
export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState("next");
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
const isDragging = useRef(false);
  useEffect(() => {
    const isMobile = window.innerWidth <= 1025;

    if (isMobile) return;

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
  useEffect(() => {
  const sliderEl = sliderRef.current;
  if (!sliderEl) return;

  // --- Touch events ---
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) handleSlide("next");
      else handleSlide("prev");
    }
  };

  // --- Mouse events ---
  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - mouseStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) handleSlide("next");
      else handleSlide("prev");
    }
    isDragging.current = false;
  };

  sliderEl.addEventListener("touchstart", handleTouchStart);
  sliderEl.addEventListener("touchend", handleTouchEnd);

  sliderEl.addEventListener("mousedown", handleMouseDown);
  sliderEl.addEventListener("mouseup", handleMouseUp);
  sliderEl.addEventListener("mouseleave", () => (isDragging.current = false));

  return () => {
    sliderEl.removeEventListener("touchstart", handleTouchStart);
    sliderEl.removeEventListener("touchend", handleTouchEnd);
    sliderEl.removeEventListener("mousedown", handleMouseDown);
    sliderEl.removeEventListener("mouseup", handleMouseUp);
    sliderEl.removeEventListener("mouseleave", () => (isDragging.current = false));
  };
}, []);

  return (
    <ContainerWrapper>
      <Wrapper>
        <Slider ref={sliderRef}>
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
