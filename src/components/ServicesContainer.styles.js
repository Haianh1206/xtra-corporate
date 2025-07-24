import styled, { css } from "styled-components";
import media from "../styles/media";

// 1. Responsive styles
const ResponsiveStyle = css`
  ${media.lg`
    .container {
      flex-direction: column;
      align-items: center;
    }

    .card {
      width: 100% !important;
      height: auto;
    }
  `}

  ${media.md`
    .card:nth-child(n+2):nth-child(-n+5) .arrow-exit {
      display: none;
    }

    .card {
      align-items: center;
      text-align: center;
    }

    .icon,
    .label,
    .title,
    .title-group,
    .info-group,
    .text-exit,
    .text-enter {
      margin-left: 0 !important;
      text-align: center;
    }

    .arrow-enter,
    .arrow-exit,
    .hover-text {
      display: none;
    }
  `}
`;

// 2. Styled components
const ContainerWrapper = styled.div`
  margin-top: -81px;
  padding: 0 120px 100px 120px;
  background: #f9f9f9;
  min-height: auto;
`;

const Container = styled.div.attrs({ className: "container" })`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  ${ResponsiveStyle}
`;

const Card = styled.div.attrs({ className: "card" })`
  position: relative;
  overflow: hidden;
  background: ${({ $serviceImage }) =>
    $serviceImage
      ? `linear-gradient(rgba(1, 46, 88, 0.8), rgba(0, 39, 76, 0.8)), url(${$serviceImage}) center/cover no-repeat`
      : "white"};
  width: ${({ $highlight }) => ($highlight ? "344px" : "350px")};
  height: ${({ $highlight }) => ($highlight ? "208px" : "220px")};
  padding: 24px;
  border: ${({ $highlight }) => ($highlight ? "6px solid #002A96" : "none")};
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
      $highlight ? "none" : "1px solid #002a96"};
  }

  * {
    position: relative;
    z-index: 1;
  }
`;

const Icon = styled.div.attrs({ className: "icon" })`
  font-size: 32px;
  margin-left: 12px;
  margin-top: 8px;
`;

const Label = styled.div.attrs({ className: "label" })`
  font-size: 16px;
  color: #666666;
  text-transform: uppercase;
  margin-left: 20px;
`;

const Title = styled.div.attrs({ className: "title" })`
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
    width: ${({ $large }) => ($large ? "40px" : "24px")};
    height: ${({ $large }) => ($large ? "40px" : "24px")};
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

const ArrowExit = styled.div.attrs({ className: "arrow-exit" })`
  transition: all 0.6s ease;
  color: #bbb;
  transform: translateX(0);
  opacity: 1;
  z-index: 1;

  ${Card}:hover & {
    transform: translateX(300px);
    opacity: 0;
  }
`;

const ArrowEnter = styled.div.attrs({ className: "arrow-enter" })`
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

const TextExit = styled.div.attrs({ className: "text-exit" })`
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

const TextEnter = styled.div.attrs({ className: "text-enter" })`
  position: absolute;
  top: 76px;
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

const TitleGroup = styled.div.attrs({ className: "title-group" })`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoGroup = styled.div.attrs({ className: "info-group" })`
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

const HoverText = styled.div.attrs({ className: "hover-text" })`
  position: absolute;
  left: 65px;
  top: 44px;
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
  transition: opacity 0.3s ease 1s;

  ${Card}:hover & {
    opacity: 1;
  }
`;

// 3. Export
export {
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
  HoverText,
};
