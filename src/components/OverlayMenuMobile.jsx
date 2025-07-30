// OverlayMenuMobile.js
import React, { useEffect, useState } from "react";
import {
  MobileBackdrop,
  MobileSidebar,
  MobileNavList,
  MobileNavItem,
  MobileCloseBtn,
  MobileFooter,
  MobileSocialIcons,
  LogoWrapper,
  DropdownWrapper,
} from "./OverlayMenuMobile.styles";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaSkype,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaHome,
} from "react-icons/fa";

export default function OverlayMenuMobile({ isOpen, onClose }) {
  const [navReady, setNavReady] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setNavReady(false);
      setTimeout(() => setNavReady(true), 100);
    } else {
      setNavReady(false);
      setBtnClicked(false);
    }
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClick = (e) => e.stopPropagation();
  const handleCloseClick = () => {
    setBtnClicked(true);
    setTimeout(() => onClose(), 200);
  };
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <MobileBackdrop isOpen={isOpen} onClick={onClose} />
      {isOpen && (
  <MobileCloseBtn onClick={handleCloseClick} isClicked={btnClicked} />
)}

      <MobileSidebar isOpen={isOpen} onClick={handleClick}>
        <LogoWrapper>
          <div className="logo">
            <FaHome size={20} />
          </div>
        </LogoWrapper>

        <MobileNavList>
          {["About", "Services"].map((item, i) => (
            <MobileNavItem key={item} animate={navReady} delay={i * 0.1}>
              {item}
            </MobileNavItem>
          ))}

          {[
            { label: "Blog", items: ["Blog", "Standard", "Video Player", "Audio Player", "Images Gallery", "Slider Gallery"] },
            { label: "Portfolio", items: ["Portfolio", "Single 1 Slider", "Single 2 Gallery", "Single 3 Full"] },
            { label: "Shop", items: ["All Products", "My account", "Cart", "Checkout"] },
          ].map((dropdown, i) => (
            <DropdownWrapper key={dropdown.label}>
              <div
  className={`nav-link ${openDropdown === dropdown.label ? "active" : ""}`}
  onClick={() => toggleDropdown(dropdown.label)}
>

                <span className="nav-link-inner">
                  {dropdown.label} <FaChevronDown size={14} />
                </span>
              </div>
              {openDropdown === dropdown.label && (
                <div className="dropdown">
                  {dropdown.items.map((subItem) => (
                    <a href="#" key={subItem}>{subItem}</a>
                  ))}
                </div>
              )}
            </DropdownWrapper>
          ))}

          <MobileNavItem animate={navReady} delay={0.4}>Contact</MobileNavItem>
            <MobileNavItem animate={navReady} delay={0.4}>Buy XTRA Theme</MobileNavItem>
        </MobileNavList>

        <MobileFooter>
          <MobileSocialIcons>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
            <FaSkype />
          </MobileSocialIcons>
          <div className="contact-info">
           
            <p>
              © Copyright 2025
            </p>
          </div>
          
        </MobileFooter>
      </MobileSidebar>
    </>
  );
}
