// styles.js hoặc GlobalStyles.js
import styled, { createGlobalStyle, keyframes } from "styled-components";

const zoomIn = keyframes`
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
// GLOBAL STYLE
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: #fff;
    color: #333;
    overflow-x: hidden;
    width: 100%;
    font-family: 'Arial', sans-serif;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
`;
const SocialIconWrapper = styled.div`
  position: relative;
  display: inline-block;

  cursor: pointer;

  svg {
    color: white;
    font-size: 16px;
    transition: transform 0.5s ease;
  }

  &:hover svg {
    transform: rotateY(360deg);
    color: ${({ bg }) => bg};
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -32px;
    top: 140%;
    transform: translateY(0) scale(1);
    background: #002a96;
    color: white;
    padding: 0px 18px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    line-height: 1;
    height: 32px;
  }

  &:hover .label {
    opacity: 1;
    animation: ${zoomIn} 0.3s ease forwards;
  }
`;
// ICON COMPONENTS

export default GlobalStyle;
export { SocialIconWrapper };
