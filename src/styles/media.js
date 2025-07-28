// src/styles/media.js
import { css } from "styled-components";

const sizes = {
  sm: 576,    // mobile
  md: 768,    // tablet
  lg: 992,   
   xl: 1200,
   xxl : 1800, // desktop
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
