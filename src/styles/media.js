// src/styles/media.js
import { css } from "styled-components";

const sizes = {
  s: 480,
  sm: 800, // mobile
  md: 800,
  lg: 992,
  x: 1024, // tablet
  xl: 1024,
  xxl: 1800, // desktop
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
