import styled, { keyframes, css } from "styled-components";
import media from "../../styles/media";
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
  z-index: 9;
  ${media.sm`
    display: none;
  `}
  ${media.x`
    top : 14%;
  `}
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
  top: 12%;
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
export { Container, MenuWrapper, IconButton, Tooltip };
