// BlogSlider.styles.js
import styled, { keyframes } from "styled-components";
import img1 from "../assets/slide1.png";
import img2 from "../assets/slide2.png";
import img3 from "../assets/slide3.png";
import img4 from "../assets/slide1.png";
import media from "../styles/media";
import { Clock, Folder } from "lucide-react";

const slides = [
  {
    src: img1,
    title: "How to Be Ahead of Stock Changes",
    date: "1 June 2024",
    category: "Tutorials, Uncategozied",
  },
  {
    src: img2,
    title: "Online Reputation And Management",
    date: "1 June 2024",
    category: "Interview, News",
  },
  {
    src: img3,
    title: "Tips To Move Your Project More Forward",
    date: "1 June 2024",
    category: "Tutorials, Uncategozied",
  },
  {
    src: img4,
    title: "Creative Ideas for Marketing Success",
    date: "1 June 2024",
    category: "Tutorials, Uncategozied",
  },
];


const revealLink = keyframes`
  0% { width: 0; opacity: 0; }
  100% { width: 40px; opacity: 1; }
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0px 130px 160px 130px;
  background: #ffffff;

  ${media.lg`padding: 60px 60px;`}
  ${media.md`padding: 40px 24px;`}
  ${media.sm`padding: 24px 16px 36px 16px;`}
`;

const SlideRow = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;

  ${media.md`
    flex-direction: column;
    align-items: center;
  `}
`;

const SlideCard = styled.div`
  flex: 0 0 calc(33.3333% - 16px);
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  ${media.md`
    flex: 0 0 100%;
    width: 100%;
  `}

  &:nth-child(n + 2) {
    ${media.sm`
      display: none;
      margin-left : 20px;
    `}
  }
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

  ${media.lg`
    width: 300px;
    height: 300px;
  `}

  ${media.md`
    width: 100%;
    height: auto;
    margin: 24px auto 0 auto;
  `}
   ${media.sm`
    width: 80%;
    height: auto;
    margin: 24px auto 0 auto;
  `}
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: transparent;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  width: 384px;
  left: 20px;

  ${SlideCard}:hover & {
    background: rgba(0, 123, 255, 0.1);
  }

  ${media.md`
    width: 100%;
    left: 0;
  `}
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
  margin-left: 20px;
  color: #000;
  transition: 0.3s ease;
  font-size: 24px;
  width: 380px;
  ${SlideCard}:hover & {
    color: #002699;
  }

  ${media.md`
    text-align: center;
  `}
   ${media.sm`
    width : 200px;
    margin-left: 70px;

  `}
`;

const DateLabel = styled.div`
  position: absolute;
  bottom: -12px;
  left: 8px;
  background: #ffffff;
  width: 300px;
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  color: #002699B3;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  gap: 4px;

  ${media.md`
    width: 100%;
    left: 20px;
     flex-direction: column;
  `}
  ${media.sm`
    width: 70%;
    left: 20px;
  `}
  span{
  color : #002699B3;
  font-size : 14px;
  }
`;


const NavArrow = styled.div`
  position: absolute;
  top: 60%;
  ${(props) => (props.left ? "left: 70px" : "right: 70px")};
  z-index: 10;
  padding: 8px;
  cursor: pointer;
  color: #ccc;

  &:hover {
    color: #0070e0;
  }

  ${media.md`
    top: 92%;
  `}
  ${media.sm`
    top : 57%;
    ${(props) => (props.left ? "left: 0px" : "right: 0px")};
  
  `}
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

  ${media.md`
    display: none;
  `}
`;

const PreviewLeft = styled(PreviewSlide)`
  left: -8.5%;
  transform-origin: left center;
  top : 27%;
`;

const PreviewRight = styled(PreviewSlide)`
  right: -8.5%;
  transform-origin: right center;
  top : 27%;
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
    font-weight: inherit;
    font-size: inherit;
    display: inline;
  }
`;

export {
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
};
