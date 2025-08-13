import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaHome, FaShoppingCart, FaUser, FaThList } from "react-icons/fa";
import media from "../../styles/media";

const NavbarWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 68px;
  background-color: #001a33;
  display: none;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  z-index: 999;
  width: 100vw;
  border-top: ${(props) => (props.showBorder ? "1px solid #fff" : "none")};
  border-bottom: ${(props) =>
    props.showBorder ? "1px solid rgba(255, 255, 255, 0.2)" : "none"};

  ${media.md`
    display: flex;
  `}
`;

const NavItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  text-align: center;
  height: 100%;

  svg {
    font-size: 24px;
    margin-bottom: 4px;
  }

  &:hover {
    color: #00c3ff;
  }

  &:first-child {
    background-color: #0070f3;
    color: white;
  }
`;

const MobileNavbar = () => {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      setShowBorder(atBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarWrapper showBorder={showBorder}>
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
