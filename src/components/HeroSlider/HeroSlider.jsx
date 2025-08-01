import { useState, useEffect, useRef } from "react";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  SliderWrapper,
  SlideItem,
  SlideImage,
  CountWrapper,
} from "./HeroSlider.styles";

const slides = [
  { src: slide1, text: "Start today and get result tomorrow" },
  { src: slide2, text: "Your trusted business partner" },
  { src: slide3, text: "Solutions that deliver results" },
];

function easeInQuad(t) {
  return t * t;
}

function CountUpNumber({ target, duration = 2000, suffix = "", delay = 0 }) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now() + delay;
    const endTime = startTime + duration;
    let animationFrame;

    const animate = (now) => {
      if (now < startTime) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }
      const rawProgress = Math.min((now - startTime) / duration, 1);
      const easedProgress = easeInQuad(rawProgress);
      setCount(Math.floor(easedProgress * target));
      if (rawProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, delay, duration, target]);

  return (
    <Number ref={ref}>
      {count}
      {suffix}
    </Number>
  );
}

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState("next");
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);
  const prevIdx = (idx - 1 + slides.length) % slides.length;
  const nextIdx = (idx + 1) % slides.length;
  const leavingIdx = direction === "next" ? prevIdx : nextIdx;

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
      sliderEl.removeEventListener(
        "mouseleave",
        () => (isDragging.current = false)
      );
    };
  }, []);

  return (
    <ContainerWrapper>
      <Wrapper>
        <Slider ref={sliderRef}>
          <SliderWrapper index={idx}>
            {slides.map((slide, i) => (
              <SlideItem key={i}>
                <SlideImage src={slide.src} alt={`Slide ${i}`} />
                <OverlayText>{slide.text}</OverlayText>
              </SlideItem>
            ))}
          </SliderWrapper>
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
            <CountWrapper>
              <CountUpNumber target={41} delay={0} />
              <SmallSuffix>+</SmallSuffix>
            </CountWrapper>

            <Divider />
            <Label>Years of Experience</Label>
          </Stat>

          <Stat>
            <CountWrapper>
              <CountUpNumber target={21} delay={500} />
              <SmallSuffix>k</SmallSuffix>
            </CountWrapper>

            <Divider />
            <Label>Cases Completed</Label>
          </Stat>

          <Stat>
            <CountWrapper>
              <CountUpNumber target={80} delay={1000} />
              <SmallSuffix>k</SmallSuffix>
            </CountWrapper>

            <Divider />
            <Label>Satisfied Customers</Label>
          </Stat>
        </InfoSection>
      </Wrapper>
    </ContainerWrapper>
  );
}
