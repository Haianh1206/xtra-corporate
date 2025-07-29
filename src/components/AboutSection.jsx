import React, { useState } from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import aboutsection1 from "../assets/abousection1.png";

// === Styled Components ===
import {
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
  Highlight,
} from "./AboutSection.styles";
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
          <Highlight>XTRA Theme</Highlight> only delivers content for the small
          business segment, and increasingly digital only delivery as search
          becomes the default for knowledge. The changing role of the
          traditional bank manager and accountant see these two segments
          requiring business advisory expertise and content. Strategy and
          Management is the key. Xtra only delivers content for the small
          business segment, and increasingly digital only delivery as search
          becomes the default for knowledge.
        </Paragraph>

        <FeatureList>
          <Feature>
            <ArrowRight size={40} /> Coherent in doing things
          </Feature>
          <Feature>
            <ArrowRight size={40} /> New and modern ideas
          </Feature>
          <Feature>
            <ArrowRight size={40} /> Work progress coordination
          </Feature>
          <Feature>
            <ArrowRight size={40} /> Accurate and friendly support
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
