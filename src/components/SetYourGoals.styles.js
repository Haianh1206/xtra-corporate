import styled from "styled-components";
import bgImage from "../assets/banner-img2.png"; // Ảnh nền xanh
import { MessageCircle, CheckCircle, Users, ShoppingCart } from "lucide-react";

const Section = styled.section`
  position: relative;
  background: linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${bgImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 70px 140px;
  height: 77vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    border-radius: 4px;
    width: 580px;
    height: 380px;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 0 40px;
  position: relative;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 800;
  position: relative;
  z-index: 2;
  top : -20px;
    margin-bottom : 0;
`;

const Subheading = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #bbb;
  margin: 8px 0 80px 0;
  
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 2;
  color: #fff;
  margin-top: 65px;
`;

const Tabs = styled.div`
  position: absolute;
  bottom: -140px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  gap: 40px;
  z-index: 10;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end; /* Căn đáy thay vì giữa */
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
`;
const TabContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  font-weight : 700;
`;

const Underline = styled.div`
  position: absolute;
  bottom: -17px; /* Sát mép đáy */
  left: 16.4%;
  transform: translateX(-50%);
  height: 8px;
  width: 250px;
  background-color: white;
  z-index: 5;
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
