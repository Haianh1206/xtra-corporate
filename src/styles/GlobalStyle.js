// styles.js hoặc GlobalStyles.js
import styled, { createGlobalStyle } from "styled-components";

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

// ICON COMPONENTS
const IconWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;

  &:hover .tooltip {
    opacity: 1;
    transform: scale(1);
  }
`;

const Tooltip = styled.span`
  position: absolute;
  top: 140%;
  background: #002a96;
  color: white;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  line-height: 1;
  height: 32px;
  width: 92px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Animation zoom out */
  transform: scale(0.8);
  transition: opacity 0.3s ease, transform 0.3s ease;
`;
export const SocialIcon = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;

  &:hover .tooltip {
    opacity: 1;
    transform: scale(1);
  }
`;
const IconWithTooltip = ({ icon, label, bgColor, className }) => {
  return (
    <IconWrapper className={className} $bg={bgColor}>
      {icon}
      <Tooltip className="tooltip">{label}</Tooltip>
    </IconWrapper>
  );
};
const SocialIconWithLabel = ({ icon, label, bg, hoverColor, className }) => (
  <SocialIcon $bg={bg} $hover={hoverColor} className={className}>
    {icon}
    <Tooltip className="tooltip">{label}</Tooltip>
  </SocialIcon>
);

export default GlobalStyle;
export { IconWrapper, Tooltip, IconWithTooltip, SocialIconWithLabel };
