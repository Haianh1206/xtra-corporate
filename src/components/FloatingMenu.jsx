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
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

const IconButton = styled.div`
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
`;


export default function FloatingMenu() {
  const [hovered, setHovered] = useState(false);

  return (
    <Container>
      <MenuWrapper
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        hovered={hovered}
      >
        <IconButton><FaDownload /></IconButton>
        {hovered && (
          <>
            <IconButton delay={0.05}><FaRegFileVideo /></IconButton>
            <IconButton delay={0.1}><FaRegStickyNote /></IconButton>
            <IconButton delay={0.15}><FaRegCommentDots /></IconButton>
            <IconButton delay={0.2}><FaRegEdit /></IconButton>
            <IconButton delay={0.25}><FaRegHeart /></IconButton>
          </>
        )}
      </MenuWrapper>
    </Container>
  );
}
