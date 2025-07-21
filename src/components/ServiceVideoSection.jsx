import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPlay } from "react-icons/fa";
import bgImage from "../assets/banner-img.png";
import financial from "../assets/Financial.png";
import Software from "../assets/Software.png";
import Industrial from "../assets/Industrial.png";

// Animation
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
`;

const Left = styled.div`
  flex: 1;
  background: linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${bgImage}) no-repeat center center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  background: #fff;
`;

const PlayButton = styled.div`
  width: 132px;
  height: 132px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;
  animation: ${bounce} 0.6s ease;

  svg {
    color: white;
    font-size: 28px;
    transition: all 0.3s ease;
  }

  &:hover {
    background: white;
    animation: ${bounce} 0.4s ease;

    svg {
      color: #0044cc;
    }
  }
`;

const Service = styled.div`
  margin: 60px 0 72px 0;
  margin-left: 120px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding-bottom: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #000000;
  &:hover {
    color: #0044cc;
    border-color: #0044cc;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #666666;
  line-height: 1.7;
`;

const IconColumn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const IconBox = styled.img`
  width: 70px;
  height: 70px;
  background: #fff;
  padding: 25px;
  border-radius: 4px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  object-fit: contain;
  transition: transform 0.3s ease;
  margin: 38px 0;
  &:hover {
    transform: scale(1.1);
  }
`;

const VideoText = styled.div`
  color: white;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  text-transform: uppercase;
`;

const VideoCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Modal styles
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
  cursor: pointer;
  user-select: none;
`;

const NavRight = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 48px;
  color: white;
  cursor: pointer;
  user-select: none;
`;

const PageNumber = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  font-size: 18px;
  color: white;
`;

const TopRightButtons = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  display: flex;
  gap: 12px;
`;

const ZoomButton = styled.div`
  color: white;
  font-size: 24px;
  cursor: pointer;
      margin-top : 24px;

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
    margin-top : 24px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default function ServiceVideoSection() {
  const [openVideo, setOpenVideo] = useState(false);
  const [currentPage, setCurrentPage] = useState(4);
  const [zoom, setZoom] = useState(1);

  const totalPages = 10;

  const images = [
    "https://via.placeholder.com/850x470?text=Page+1",
    "https://via.placeholder.com/850x470?text=Page+2",
    "https://via.placeholder.com/850x470?text=Page+3",
    "", // Page 4 is video
    "https://via.placeholder.com/850x470?text=Page+5",
    "https://via.placeholder.com/850x470?text=Page+6",
    "https://via.placeholder.com/850x470?text=Page+7",
    "https://via.placeholder.com/850x470?text=Page+8",
    "https://via.placeholder.com/850x470?text=Page+9",
    "https://via.placeholder.com/850x470?text=Page+10",
  ];

  const handleClick = () => {
    setOpenVideo(true);
    setCurrentPage(4); // mở modal với video
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleCloseModal = () => {
    setOpenVideo(false);
    setCurrentPage(4);
    setZoom(1);
  };

  return (
    <Section>
      <IconColumn>
        <IconBox src={financial} alt="Financial Icon" />
        <IconBox src={Software} alt="Software Icon" />
        <IconBox src={Industrial} alt="Industrial Icon" />
      </IconColumn>

      <Left>
        {!openVideo ? (
          <VideoCenter>
            <PlayButton onClick={handleClick}>
              <FaPlay />
            </PlayButton>
            <VideoText>
              ABOUT OUR <br />
              BUSINESS SOLUTIONS
            </VideoText>
          </VideoCenter>
        ) : null}
      </Left>

      <Right>
        <Service>
          <Title>Financial Services</Title>
          <Description>
            The editor reviews the content to ensure there are no process,
            <br />
            Once this is done, it moves to designer.
          </Description>
        </Service>
        <Service>
          <Title>Software Services</Title>
          <Description>
            The editor reviews the content to ensure there are no process,
            <br />
            Once this is done, it moves to designer.
          </Description>
        </Service>
        <Service>
          <Title>Industrial Services</Title>
          <Description>
            The editor reviews the content to ensure there are no process,
            <br />
            Once this is done, it moves to designer.
          </Description>
        </Service>
      </Right>

      {/* Modal Fullscreen */}
      {openVideo && (
        <ModalOverlay>
          <ModalContent style={{ transform: `scale(${zoom})` }}>
            {currentPage === 4 ? (
              <iframe
                width="850"
                height="470"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1
"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <img
                src={images[currentPage - 1]}
                width="850"
                height="470"
                alt={`Page ${currentPage}`}
              />
            )}
          </ModalContent>

          <NavLeft onClick={handlePrev}>&lt;</NavLeft>
          <NavRight onClick={handleNext}>&gt;</NavRight>

          <PageNumber>{`${currentPage}/${totalPages}`}</PageNumber>

          <TopRightButtons>
            <ZoomButton onClick={() => setZoom(zoom + 0.2)}>🔍+</ZoomButton>
            <ZoomButton onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}>
              🔍−
            </ZoomButton>
            <CloseButton onClick={handleCloseModal}>✖</CloseButton>
          </TopRightButtons>
        </ModalOverlay>
      )}
    </Section>
  );
}
