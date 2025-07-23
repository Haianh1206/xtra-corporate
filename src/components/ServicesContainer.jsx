import React from "react";
import styled from "styled-components";
import { ArrowRight, ChevronRight } from "lucide-react";
import serviceImage from "../assets/service-img.png";
import serviceIcon2 from "../assets/service-icon1.png";
import serviceIcon3 from "../assets/service-icon2.png";
import serviceIcon4 from "../assets/service-icon3.PNG";
import serviceIcon5 from "../assets/service-icon4.PNG";

const services = [
  {
    title: "WHAT WE CAN DO?",
    label: "OUR SERVICES",
    type: "intro",
  },
  {
    icon: serviceIcon2,
    label: "FINANCIAL FUNCTIONS",
    title: "ACCOUNTING SERVICES",
    hoverText: "Network",
  },
  {
    icon: serviceIcon3,
    label: "MATERIALS DISTRIBUTION",
    title: "PURCHASING SERVICES",
    hoverText: "Objective",
  },
  {
    icon: serviceIcon4,
    label: "SAFEGUARD ASSETS",
    title: "INTERNAL CONTROLS",
    hoverText: "Creative",
  },
  {
    icon: serviceIcon5,
    label: "ONLINE PURCHASING",
    title: "E-COMMERCE ORDERING",
    hoverText: "Banknote",
  },
  {
    label: "",
    highlight: true,
    type: "cta",
    info: "Looking for a New Service?",
  },
];

const ContainerWrapper = styled.div`
  margin-top: -81px;
  padding: 0 120px 0px 120px;
  background: #f9f9f9;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ $serviceImage }) =>
    $serviceImage
      ? `linear-gradient(rgba(1, 46, 88, 0.8), rgba(0, 39, 76, 0.8)), url(${$serviceImage}) center/cover no-repeat`
      : "white"};

  width: ${({ $highlight }) =>
    $highlight ? "344px" : "350px"}; // Card 6 giảm 6px
  height: {({ $highlight }) =>
    $highlight ? "208px" : "220px"};
  padding: 24px;

  border: ${({ $highlight }) =>
    $highlight ? "6px solid #002A96" : "none"}; // Chỉ card 6 có border
  outline: none;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    outline: ${({ $highlight }) =>
      $highlight
        ? "none"
        : "1px solid #002a96"}; // Các card thường hover có outline
  }

  * {
    position: relative;
    z-index: 1;
  }
`;

const Icon = styled.div`
  font-size: 32px;
  margin-left: 12px;
  margin-top: 8px;
`;

const Label = styled.div`
  font-size: 16px;
  color: #666666;
  text-transform: uppercase;
    margin-left: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  transition: color 0.3s ease;
  margin-left: 20px;
  .hoverable:hover & {
    color: #002a96;
  }
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const Arrow = styled.div`
  color: #bbb;

  svg {
    width: ${(props) => (props.$large ? "40px" : "24px")};
    height: ${(props) => (props.$large ? "40px" : "24px")};
  }
`;

const CenteredArrow = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const ArrowExit = styled.div`
  transition: all 0.6s ease;
  color: #bbb;
  transform: translateX(0);
  opacity: 1;
  z-index: 1;

  ${Card}:hover & {
    transform: translateX(300px); /* Di chuyển khỏi card */
    opacity: 0;
  }
`;

const ArrowEnter = styled.div`
  position: absolute;
  top: 0;
  transform: translateX(-300px);
  opacity: 0;
  color: #002a96;
  transition: all 0.6s ease;
  z-index: 2;

  ${Card}:hover & {
    transform: translateX(0);
    opacity: 1;
  }
`;

const TextExit = styled.div`
  color: #999;
  font-size: 16px;
  opacity: 1;
  transition: all 0.6s ease;
  transform: translateX(0);
  z-index: 1;

  ${Card}:hover & {
    transform: translateX(300px);
    opacity: 0;
  }
`;

const TextEnter = styled.div`
  position: absolute;
  top: 76px; /* vị trí tương tự text cũ */
  font-size: 16px;
  color: #002a96;
  opacity: 0;
  transform: translateX(-300px);
  transition: all 0.6s ease;
  z-index: 2;

  ${Card}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const InfoText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #002a96;
  text-align: center;
  max-width: 220px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
  &.text-enter {
    opacity: 1;
    transform: translateY(0);
  }
`;
const TitleGroup = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoGroup = styled.div`
  margin-top: ${({ $shift }) => ($shift ? "30px" : "0")};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LargeTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: white;
  line-height: 1.1;
  text-transform: uppercase;
`;
const HoverText = styled.div`
  position: absolute;
  left: 65px;
  top: 44px; /* ngay dưới icon (icon cao 84px) */
  background: black;
  color: #fff;
  font-size: 12px;
  height: 24px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease 1s; /* 2s delay */

  ${Card}:hover & {
    opacity: 1;
  }
`;

export default function ServicesContainer() {
  return (
    <ContainerWrapper>
      <Container>
        {services.map((item, idx) => (
          <Card
            key={idx}
            $highlight={item.highlight}
            $serviceImage={idx === 0 ? serviceImage : null}
            className={idx >= 1 && idx <= 4 ? "hoverable" : ""}
          >
            {idx >= 1 && idx <= 4 && (
              <>
                <Icon>
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt="service icon"
                      width={84}
                      height={84}
                    />
                  )}
                  {item.hoverText && <HoverText>{item.hoverText}</HoverText>}
                </Icon>
                <InfoGroup $shift>
                  <Label>{item.label}</Label>
                  <TitleRow>
                    <Title>{item.title}</Title>
                    <Arrow $large={idx >= 1 && idx <= 4}>
                      <ArrowRight />
                    </Arrow>
                  </TitleRow>
                </InfoGroup>
              </>
            )}

            {idx === 0 && (
              <TitleGroup>
                <div style={{ marginLeft: "20px" }}>
                  <Label>{item.label}</Label>
                  <LargeTitle>
                    WHAT
                    <br />
                    WE CAN
                    <br />
                    DO?
                  </LargeTitle>
                </div>
              </TitleGroup>
            )}

            {idx === 5 && (
              <CenteredArrow>
                <ArrowExit className="arrow-exit">
                  <ChevronRight size={64} />
                </ArrowExit>
                <ArrowEnter className="arrow-enter">
                  <ChevronRight size={64} />
                </ArrowEnter>
                <TextExit className="text-exit">
                  Looking for a New Service?
                </TextExit>
                <TextEnter className="text-enter">Request a quote!</TextEnter>
              </CenteredArrow>
            )}
          </Card>
        ))}
      </Container>
    </ContainerWrapper>
  );
}
