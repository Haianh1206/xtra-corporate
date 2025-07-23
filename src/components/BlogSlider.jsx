import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ArrowLeft, ArrowRight, Link } from "lucide-react";
import img1 from "../assets/slide1.png";
import img2 from "../assets/slide2.png";
import img3 from "../assets/slide3.png";
import img4 from "../assets/slide1.png"; // reuse

const slides = [
  { src: img1, title: "How to Be Ahead of Stock Changes", date: "1 June 2024  Tutorials, Uncategozied" },
  { src: img2, title: "Online Reputation And Management", date: "1 June 2024 Interview, News" },
  {
    src: img3,
    title: "Tips To Move Your Project More Forward",
    date: "1 June 2024 Tutorials, Uncategozied",
  },
  {
    src: img4,
    title: "Creative Ideas for Marketing Success",
    date: "1 June 2024 Tutorials, Uncategozied",
  },
];

const revealLink = keyframes`
  0% { width: 0; opacity: 0; }
  100% { width: 40px; opacity: 1; }
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 80px 130px;
  background: #ffffff;
`;

const SlideRow = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
`;

const SlideCard = styled.div`
  flex: 0 0 calc(33.3333% - 16px);
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  transform: scale(1);
  opacity: 1;
  z-index: 2;
`;

const ImageBox = styled.div`
  position: relative;
  overflow: visible;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 384px;
  height: 384px;
  object-fit: cover;
  display: block;
  border-radius: 2px;
  margin: 50px 20px 0 20px;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: transparent;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px; /* prevent blue overlay from bleeding out */
  overflow: hidden;
  width: 384px;
  left : 20px;

  ${SlideCard}:hover & {
    background: rgba(0, 123, 255, 0.1);
  }
`;

const HoverIcon = styled.div`
  background: white;
  height: 80px;
  padding: 0 22px;
  text-align: center;
  border-radius: 4px;
  color: #03406cff;
  opacity: 0;
  font-size: 48px;
  overflow: hidden;

  ${SlideCard}:hover & {
    animation: ${revealLink} 0.3s ease forwards;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 32px;
  margin-left : 20px;
  color: #000;
  transition: 0.3s ease;
  font-size : 24px;
  width : 300px;
  ${SlideCard}:hover & {
    color: #002699;

  }
`;

const DateLabel = styled.div`
  position: absolute;
  bottom: -12px;
  left: 8px;
  background: #ffffff;
  width: 370px;
  padding: 4px 12px 4px 16px;
  font-size: 13px;
  border-radius: 4px;
  height: 30px;
  display: flex;
  color: #002699B3;
  align-items: center;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const NavArrow = styled.div`
  position: absolute;
  top: 60%;
  ${(props) => (props.left ? "left: 40px" : "right: 40px")};
  z-index: 10;
  padding: 8px;
  cursor: pointer;
  color: #ccc;
  margin-left: 30px;
  margin-right: 30px;

  &:hover {
    color: #0070e0;
  }
`;

const PreviewSlide = styled.div`
  position: absolute;
  top: 290px;
  width: 14%;
  height: 350px;
  background: url(${(p) => p.bg}) center/cover no-repeat;
  transform: scale(0.9);
  opacity: 0.4;
  border-radius: 8px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.4s ease;
`;

const PreviewLeft = styled(PreviewSlide)`
  left: -8.5%;
  transform-origin: left center;
`;

const PreviewRight = styled(PreviewSlide)`
  right: -8.5%;
  transform-origin: right center;
`;

const HeaderBlock = styled.div`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const TopLine = styled.div`
  color: #aaaaaa;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 8px;
  margin-top: 10px;
`;

const TitleLine = styled.div`
  font-size: 38px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;

  span {
    color: #002699;
  }
`;

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
