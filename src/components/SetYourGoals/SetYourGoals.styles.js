import styled from "styled-components";
import bgImage from "../../assets/banner-img2.png";
import { MessageCircle } from "lucide-react";
import media from "../../styles/media"; // responsive mixin

const Section = styled.section`
  position: relative;
  background: linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${bgImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 70px 100px;
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.x`
    padding: 40px 0px 180px 40px;
    height: auto;
  `}
  ${media.md`
    padding: 80px 20px;
    height: auto;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  z-index: 2;

  ${media.md`
  
    flex-direction: column !important;
    gap: 40px;
  `}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    border-radius: 4px;
    width: 580px;
    height: 380px;

    ${media.md`
      width: 100%;
      max-width: 100%;
      height: auto;
    `}
    ${media.x`
      width: 100%;
      max-width: 100%;
      height: 270px;
    `}
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 0 40px;
  position: relative;
  ${media.x`
    margin-top : 70px;
  `}
  ${media.md`
    padding: 0;
    text-align: center;
    margin-top : 20px;
  `}
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 800;
  position: relative;
  z-index: 2;
  top: -20px;
  margin-bottom: 0;

  ${media.sm`
    font-size: 38px;
    top: 30px;
    
  `}
  ${media.x`
    top: 50px;
        font-size: 36px;

  `}
`;

const Subheading = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #bbb;
  margin: 8px 0 80px 0;
  ${media.x`
    font-size: 18px;
   margin-top : 60px;
  `}
  ${media.md`
    font-size: 16px;
    margin-bottom: 40px;
  `}
   ${media.sm`
    margin-top: 52px;
  `}
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 2;
  color: #fff;
  margin-top: 65px;
  ${media.x`
    margin-top: 40px;
    font-size: 18px;
  `}
  ${media.md`
    margin-top: 40px;
    font-size: 16px;
  `}
`;

const Tabs = styled.div`
  position: absolute;
  bottom: -120px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  gap: 40px;
  z-index: 10;
  ${media.x`
     bottom: -163px;
gap: 0px;
  `}
  ${media.md`
    position: static;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  `}
  
  ${media.sm`
   display: none;
  `}
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  color: ${(props) => (props.active ? "#fff" : "#888")};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 40px;

  svg {
    stroke: ${(props) => (props.active ? "#fff" : "#888")};
    width: 36px;
    height: 36px;
  }

  &:hover {
    color: #fff;

    svg {
      stroke: #fff;
    }
  }

  ${media.md`
    margin-right: 0;
  `}
`;

const BackgroundIcon = styled(MessageCircle)`
  position: absolute;
  top: -60px;
  left: 30px;
  width: 140px;
  height: 140px;
  opacity: 0.07;
  stroke: #ffffff;
  z-index: 1;

  ${media.sm`
    left: 100px;
  `}
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  font-weight: 700;

  ${media.md`
    justify-content: center;
  `}
`;

const Underline = styled.div`
  position: absolute;
  bottom: -17px;
  left: 18%;
  transform: translateX(-50%);
  height: 8px;
  width: 250px;
  background-color: white;
  z-index: 5;
  ${media.x`
left: 12.5%;
width: 180px;
  `}
  ${media.md`
    display: none;
  `}
`;

export {
  Section,
  Content,
  Left,
  Right,
  Heading,
  Subheading,
  Description,
  Tabs,
  Tab,
  BackgroundIcon,
  TabContent,
  Underline,
};
