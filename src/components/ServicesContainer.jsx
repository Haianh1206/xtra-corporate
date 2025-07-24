import React from "react";
import styled from "styled-components";
import { ArrowRight, ChevronRight } from "lucide-react";
import serviceImage from "../assets/service-img.png";
import serviceIcon2 from "../assets/service-icon1.png";
import serviceIcon3 from "../assets/service-icon2.png";
import serviceIcon4 from "../assets/service-icon3.PNG";
import serviceIcon5 from "../assets/service-icon4.PNG";
import {
  ContainerWrapper,
  Container,
  Card,
  Icon,
  Label,
  Title,
  TitleRow,
  Arrow,
  CenteredArrow,
  ArrowExit,
  ArrowEnter,
  TextExit,
  TextEnter,
  InfoText,
  TitleGroup,
  InfoGroup,
  LargeTitle,
  HoverText
}from "./ServicesContainer.styles";
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
]


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
                    <Arrow $large>
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
