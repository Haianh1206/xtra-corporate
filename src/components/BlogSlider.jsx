import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ArrowLeft, ArrowRight, Link } from "lucide-react";
 // reuse

import {
  slides,
  revealLink,
  Container,
  SlideRow,
  SlideCard,
  ImageBox,
  Image,
  Overlay,
  HoverIcon,
  Title,
  DateLabel,
  NavArrow,
  PreviewLeft,
  PreviewRight,
  HeaderBlock,
  TopLine,
  TitleLine,
}from "./BlogSlider.styles";


export default function BlogSlider() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const getSlides = () => {
    return [
      slides[index % total],
      slides[(index + 1) % total],
      slides[(index + 2) % total],
    ];
  };

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const prevSlide = slides[(index - 1 + total) % total];
  const nextSlide = slides[(index + 3) % total];

  return (
    <Container>
      <HeaderBlock>
        <TopLine>LATEST UPDATES AND NEWS</TopLine>
        <TitleLine>
          FROM THE <span>BLOG</span>
        </TitleLine>
      </HeaderBlock>

      <NavArrow left onClick={prev}>
        <ArrowLeft size={28} />
      </NavArrow>

      <NavArrow onClick={next}>
        <ArrowRight size={28} />
      </NavArrow>

      <PreviewLeft bg={prevSlide.src} onClick={prev} />
      <PreviewRight bg={nextSlide.src} onClick={next} />

      <SlideRow>
        {getSlides().map((slide, i) => (
          <SlideCard key={i}>
            <ImageBox>
              <Image src={slide.src} alt={slide.title} />
              <Overlay>
                <HoverIcon>
                  <Link size={20} />
                </HoverIcon>
              </Overlay>
              <DateLabel>{slide.date}</DateLabel>
            </ImageBox>
            <Title>{slide.title}</Title>
          </SlideCard>
        ))}
      </SlideRow>
    </Container>
  );
}
