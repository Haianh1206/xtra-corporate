import styled, { keyframes } from "styled-components";
import bgImage from "../assets/banner-img.png";
import media from "../styles/media";

const bounce = keyframes`
  0% { transform: scale(0.9); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Section = styled.section`
  display: flex;
  height: 100vh;
  position: relative;
  font-family: "Roboto", sans-serif;

  ${media.lg`
    flex-direction: column;
    height: auto;
  `}
`;

const Left = styled.div`
  flex: 1;
  background: linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${bgImage}) no-repeat center center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
height: 630px;

  ${media.lg`
    width: 100%;
    height: 300px;
  `}

  ${media.md`
    height: 450px;
    padding: 16px 0;
    background-position: top;
  `}
`;

const Right = styled.div`
  flex: 1;
  background: #fff;

  ${media.lg`
    padding: 24px;
  `}

  ${media.md`
    padding: 12px;
  `}
   ${media.sm`
    display: none;
  `}
`;

const PlayButton = styled.div`
  width: 132px;
  height: 132px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  animation: ${bounce} 0.6s ease;
border: 2px solid rgba(255, 255, 255, 0.1);
  svg {
    color: white;
    font-size: 28px;
  }

  &:hover {
    background: white;
    svg {
      color: #0044cc;
    }
  }

  ${media.lg`
    width: 100px;
    height: 100px;
  `}

  ${media.md`
    width: 80px;
    height: 80px;
    svg {
      font-size: 24px;
    }
  `}
`;

const Service = styled.div`
  margin: 78px 0 72px 0;
  margin-left: 120px;

  ${media.lg`
    margin: 40px 20px;
  `}

  ${media.md`
    margin: 32px 12px;
  `}
   ${media.sm`
    margin: 0;
  `}
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${media.lg`
    font-size: 24px;
  `}

  ${media.md`
    font-size: 28px;
  `}
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #666;

  ${media.lg`
    font-size: 22px;
  `}

  ${media.md`
    font-size: 18px;
    margin : 0;
  `}
`;

const IconColumn = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 68px;

  ${media.lg`
    position: static;
    transform: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin: 24px 0;
  `}

  ${media.md`
    gap: 12px;
    margin: 16px 0;
    display :none;
  `}
  
`;

const IconBox = styled.img`
  width: 120px;
  height: 120px;
  padding: 25px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
  }

  ${media.lg`
    width: 60px;
    height: 60px;
    padding: 20px;
  `}

  ${media.md`
    width: 48px;
    height: 48px;
    padding: 12px;
  `}
`;

const VideoText = styled.div`
  color: white;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  ${media.md`
    font-size: 14px;
  `}
`;

const VideoCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow: hidden;
`;

const ModalContent = styled.div`
  transition: transform 0.3s ease;
`;

const NavLeft = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 48px;
  color: white;

  ${media.lg`
    font-size: 36px;
    left: 12px;
  `}

  ${media.md`
    font-size: 28px;
  `}
`;

const NavRight = styled(NavLeft)`
  left: auto;
  right: 20px;

  ${media.lg`
    right: 12px;
  `}
`;

const PageNumber = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  font-size: 18px;
  color: white;

  ${media.md`
    font-size: 14px;
    left: 12px;
    bottom: 12px;
  `}
`;

const TopRightButtons = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  display: flex;
  gap: 12px;

  ${media.md`
    right: 12px;
    top: 12px;
    gap: 8px;
  `}
`;

const ZoomButton = styled.div`
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-top: 24px;
`;

const CloseButton = styled.div`
  color: white;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  transition: background 0.3s ease;
  margin-top: 24px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
const MobileLayout = styled.div`
  display: none;

  ${media.sm`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 24px;
  `}

  ${media.md`
    display: flex;
    padding: 16px;
    gap: 24px;
  `}
`;

const Item = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  ${media.md`
    flex-direction: row;
    align-items: center;
  `}
   ${media.sm`
    flex-direction: column;
    align-items: center;
    text-align : center;
    margin-top : 32px;
  `}
`;

export {
  bounce,
  Section,
  Left,
  Right,
  PlayButton,
  Service,
  Title,
  Description,
  IconColumn,
  IconBox,
  VideoText,
  VideoCenter,
  ModalOverlay,
  ModalContent,
  NavLeft,
  NavRight,
  PageNumber,
  TopRightButtons,
  ZoomButton,
  CloseButton,
  MobileLayout,
  Item,
};
