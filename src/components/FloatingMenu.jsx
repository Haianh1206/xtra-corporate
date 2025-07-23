// FloatingMenu.jsx
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import {
  FaDownload,
  FaRegCommentDots,
  FaRegHeart,
  FaRegEdit,
  FaRegStickyNote,
  FaRegFileVideo,
  FaYoutube,
} from "react-icons/fa";

// Hiệu ứng trượt từ phải sang
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 24%;
  right: 0;
  z-index: 9999;
`;

const MenuWrapper = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 4px 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconButton = styled.div`
  position: relative;
  font-size: 18px;
  color: #333;
  padding: 6px;
  margin: 4px 0;
  cursor: pointer;
  transition: transform 0.2s ease;

  ${({ delay }) =>
    delay &&
    css`
      animation: ${slideIn} 0.4s ease forwards;
      animation-delay: ${delay}s;
      opacity: 0;
    `}

  &:hover {
    color: #000;
  }

  &:hover .tooltip {
    display: block;
    animation: ${fadeInLeft} 0.3s ease forwards;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  right: 100%;
  top : 12%;
  margin-right: 10px;
  background: white;
  color: black;
  padding: 6px 10px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  display: none;
      

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export default function FloatingMenu() {
  const [hovered, setHovered] = useState(false);

  return (
    <Container>
      <MenuWrapper
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <IconButton>
          <FaDownload />
          <Tooltip className="tooltip">Download XTRA Theme</Tooltip>
        </IconButton>
        {hovered && (
          <>
            <IconButton delay={0.05}>
              <FaYoutube />
              <Tooltip className="tooltip">Video Tutorials</Tooltip>
            </IconButton>
            <IconButton delay={0.1}>
              <FaRegStickyNote />
              <Tooltip className="tooltip">Theme Documentation</Tooltip>
            </IconButton>
            <IconButton delay={0.15}>
              <FaRegCommentDots />
              <Tooltip className="tooltip">Help & Support</Tooltip>
            </IconButton>
            <IconButton delay={0.2}>
              <FaRegEdit />
              <Tooltip className="tooltip">Demos Edit Guide</Tooltip>
            </IconButton>
            <IconButton delay={0.25}>
              <FaRegHeart />
              <Tooltip className="tooltip">Customers Showcase</Tooltip>
            </IconButton>
          </>
        )}
      </MenuWrapper>
    </Container>
  );
}
