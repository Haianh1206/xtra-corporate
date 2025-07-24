import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPlay } from "react-icons/fa";
import financial from "../assets/Financial.png";
import Software from "../assets/Software.png";
import Industrial from "../assets/Industrial.png";

// Animation
import {
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
}from "./ServiceVideoSection.styles";


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
