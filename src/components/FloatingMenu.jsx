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

import {
  Container,
  MenuWrapper,
  IconButton,
  Tooltip,
}from "./FloatingMenu.styles";



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
