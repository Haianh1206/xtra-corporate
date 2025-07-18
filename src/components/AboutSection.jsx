import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';

const Container = styled.div`
  display: flex;
  padding: 80px 120px;
  background: #fff;
  gap: 48px;
  height : 80vh;
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
  height: 100%;
  background: #ccc;
  position: absolute;
  top: 32px;
  left: 40%;
`;

const MiddleColumn = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: #000;
  margin-top: 0;
  margin-bottom: 24px;

  span {
    color: #003cff;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
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

  svg {
    margin-right: 10px;
    border-radius: 50%;
    padding: 5px;
    transition: all 0.3s ease;
    color: #003cff;
  }

  &:hover {
    transform: translateX(4px);
    color: #003cff;

    svg {
      background: #003cff;
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
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  border: 2px solid #003cff;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ primary }) =>
    primary
      ? `
    background: #fff;
    color: #003cff;

    &:hover {
      background: #003cff;
      color: #fff;
    }
  `
      : `
    background: #003cff;
    color: #fff;

    &:hover {
      background: #fff;
      color: #003cff;
    }
  `}
`;

const RightColumn = styled.div`
  width: 33.33%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

export default function BusinessSection() {
  return (
    <Container>
      <LeftColumn>
        <Label>OUR STORY</Label>
        <VerticalLine />
      </LeftColumn>

      <MiddleColumn>
        <Title>
          SOMETHING KNOW ABOUT<br />
          <span>OUR BUSINESS</span>
        </Title>
        <Paragraph>
          <strong>XTRA</strong> only delivers content for the small business segment, and increasingly digital only
          delivery as search becomes the default for knowledge. The changing role of the traditional bank manager
          and accountant see these two segments requiring business advisory expertise and content. Strategy and
          Management is the key. Xtra only delivers content for the small business segment, and increasingly digital
          only delivery as search becomes the default for knowledge.
        </Paragraph>

        <FeatureList>
          <Feature><ArrowRight size={20} /> Coherent in doing things</Feature>
          <Feature><ArrowRight size={20} /> New and modern ideas</Feature>
          <Feature><ArrowRight size={20} /> Work progress and coordination</Feature>
          <Feature><ArrowRight size={20} /> Accurate and friendly support</Feature>
        </FeatureList>

        <ButtonGroup>
          <Button primary>About Our Team</Button>
          <Button>Contact Us Now</Button>
        </ButtonGroup>
      </MiddleColumn>

      <RightColumn>
        <Image src="/your-image.jpg" alt="About Image" />
      </RightColumn>
    </Container>
  );
}
