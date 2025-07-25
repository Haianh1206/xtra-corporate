import React from "react";
import styled from "styled-components";
import { FaHome, FaShoppingCart, FaUser, FaThList } from "react-icons/fa";
import media from "../styles/media"; // <-- Đảm bảo bạn đã có media.js

const NavbarWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #001a33;
  display: none;

  justify-content: space-evenly;
  align-items: center;
  padding: 0;  // ❗ Xóa padding để tránh tràn
  z-index: 9999;
  width: 100vw; // ❗ Thêm width rõ ràng

  ${media.md`
    display: flex;
  `}
`;


const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 16px;

  svg {
    font-size: 24px;
    margin-bottom: 4px;
  }

  &:hover {
    color: #00c3ff;
  }
`;

const MobileNavbar = () => {
  return (
    <NavbarWrapper>
      <NavItem>
        <FaHome />
        Home
      </NavItem>
      <NavItem>
        <FaThList />
        Services
      </NavItem>
      <NavItem>
        <FaShoppingCart />
        Shop
      </NavItem>
      <NavItem>
        <FaUser />
        Contact
      </NavItem>
    </NavbarWrapper>
  );
};

export default MobileNavbar;
