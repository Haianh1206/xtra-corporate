// OverlayMenuMobile.styles.js
import styled, { keyframes, css } from "styled-components";

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

const rotateClose = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const MobileBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.6);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease;
  z-index: 999;
`;

export const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-90%")};
  width: 85%;
  height: 100vh;
  background-color: #002699;
  transition: right 0.3s ease;
  z-index: 1000;
  filter: blur(0.3px);
  display: flex;
  flex-direction: column;

  color: white;
  overflow-y: auto;
`;

export const MobileCloseBtn = styled.button`
  position: fixed;
  top: 20px;
  left: 10px;
  background: transparent;
  border: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
  z-index: 1100;
  animation: ${({ isClicked }) =>
    isClicked &&
    css`
      ${rotateClose} 0.5s ease;
    `};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background: #fff;
    top: 13px;
    left: 2px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const LogoWrapper = styled.div`
  .logo {
    background: #000;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 18px;
  }
`;

export const MobileNavList = styled.ul`
  list-style: none;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
`;

export const MobileNavItem = styled.li`
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  opacity: 0;
  transform: translateX(20px);
  padding-left: 18px;
  font-weight: 500;
  animation: ${({ animate }) =>
    animate &&
    css`
      ${slideIn} 0.4s ease forwards;
    `};
  animation-delay: ${({ delay }) => delay}s;

  &:hover {
    color: #ddd;
  }
`;

export const DropdownWrapper = styled.div`
  overflow: hidden;
  transition: all 0.3s ease;

  .nav-link {
    font-size: 14px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    cursor: pointer;
    padding-left: 18px;

    .nav-link-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        margin-right: 10px;
        transition: transform 0.3s ease;
      }
    }

    &.active {
      background-color: #000;

      .nav-link-inner svg {
        transform: rotate(180deg); /* Quay mũi tên */
      }
    }
  }

  .dropdown {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transform: translateY(-8px);
    transition: all 0.5s ease;
    padding-left: 16px;

    display: flex;
    flex-direction: column;

    a {
      color: #fff;
      text-decoration: none;
      padding: 8px 0;
      margin-left: 12px;
      opacity: 0;
      transform: translateY(-8px);
      transition: all 0.3s ease;

      &:hover {
        color: #ddd;
      }
    }
  }

  &.open .dropdown {
    max-height: 500px; /* Đủ để hiện tất cả sub items */
    opacity: 1;
    transform: translateY(0);

    a {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const MobileFooter = styled.div`
  padding: 20px 0;
  color: white;

  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* 👈 căn giữa ngang */

  .contact-info {
    font-size: 14px;
    margin-top: 16px;
    text-align: center;

    p {
      margin-top: 30px;
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center; /* 👈 căn giữa icon và text */
    }
  }
`;

export const MobileSocialIcons = styled.div`
  display: flex;
  gap: 16px;
  font-size: 18px;
  text-align: center;

  svg {
    color: #fff;
    cursor: pointer;
    margin: 0 6px;
    &:hover {
      color: #000;
    }
  }
`;
