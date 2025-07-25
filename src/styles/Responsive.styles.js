// src/styles/Responsive.styles.js
import { css } from "styled-components";
import media from "./media";

// Responsive cho Container
export const containerResponsive = css`
  ${media.lg`
    flex-direction: column;
    align-items: center;
  `}
`;

// Responsive cho Card
export const cardResponsive = css`
  ${media.lg`
    width: 100% !important;
    height: auto;
  `}
  ${media.md`
    align-items: center;
    text-align: center;
  `}
`;

// Responsive cho Icon, Label, Title...
export const centerTextResponsive = css`
  ${media.md`
    margin-left: 0 !important;
    text-align: center;
  `}
`;

// Hide elements on tablet
export const hideOnTablet = css`
  ${media.md`
    display: none !important;
  `}
`;

// ArrowExit conditionally hidden based on nth-child in layout logic
export const arrowExitConditional = css`
  ${media.md`
    display: none !important;
  `}
`;
