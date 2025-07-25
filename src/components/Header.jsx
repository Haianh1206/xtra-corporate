import styled from "styled-components";
import xtraLogo from "../assets/xtra-logo.png";
import envatoLogo from "../assets/envato-logo.png";
import OverlayMenu from "./OverlayMenu";
import { useState, useEffect } from "react";
import media from "../styles/media";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaSkype,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaChevronDown,
} from "react-icons/fa";

import {
  Wrapper,
  TopBar,
  ContentContainer,
  SocialBar,
  NavBar,
} from "./Header.styles";

export default function Header({ onHomeClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Wrapper>
      <TopBar>
        <div className="envato">
          <img src={envatoLogo} alt="Envato" />
        </div>
        <div className="message">
          Limited time offer, Buy XTRA WordPress theme only $49
        </div>
        <button className="download-btn">Download XTRA Theme</button>
      </TopBar>

      <ContentContainer>
        <SocialBar>
          <div>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
            <FaSkype />
          </div>
          <div className="info">
            <span>
              <FaPhoneAlt /> Have questions? Call now +1 (818) 23 45 678
            </span>
            <span>
              <FaEnvelope /> Need help? Contact us via email
            </span>
          </div>
        </SocialBar>

        <NavBar >
         
          <img className="logo" src={xtraLogo} alt="Xtra Logo" />

          <div className="right">
            <nav>
              <a onClick={onHomeClick} className="nav-link active" href="#">
                <FaHome />
              </a>
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Services
              </a>
              <a className="nav-link" href="#">
                FAQ’s
              </a>

              <div className="nav-link has-dropdown">
               <span className="nav-link-inner">
  Blog <FaChevronDown size={14} />
</span>
                <div className="hover-bridge"></div>
                <div className="dropdown">
                  <a href="#">
                    <span className="link-inner">Blog</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Standard</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Video Player</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Audio Player</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Images Gallery</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Slider Gallery</span>
                  </a>
                </div>
              </div>

              <div className="nav-link has-dropdown">
                <span className="nav-link-inner">
  Blog <FaChevronDown size={14} />
</span>
                <div className="hover-bridge"></div>
                <div className="dropdown">
                  <a href="#">
                    <span className="link-inner">Portfolio</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Single 1 Slider</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Single 2 Gallery</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Single 3 Full</span>
                  </a>
                </div>
              </div>

              <div className="nav-link has-dropdown">
                <span className="nav-link-inner">
  Blog <FaChevronDown size={14} />
</span>
                <div className="hover-bridge"></div>
                <div className="dropdown">
                  <a href="#">
                    <span className="link-inner">All Products</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">My account</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Cart</span>
                  </a>
                  <a href="#">
                    <span className="link-inner">Checkout</span>
                  </a>
                </div>
              </div>

              <a className="nav-link" href="#">
                Contact
              </a>
            </nav>

            <div className="icons">
              <FaSearch />
              <div className="cart-icon">
                <div className="cart">
                  <div className="cart-trigger">
                    <FaShoppingCart />
                    <span className="cart-count">0</span>
                  </div>
                  <div className="cart-dropdown">
                    <div className="cart-inner">
                      <FaShoppingCart size={36} color="#888" />
                      <p>No products in the cart</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dot-menu">
    <FaBars onClick={() => setMenuOpen(true)} />
  </div>
              
            </div>
          </div>
        </NavBar>
      </ContentContainer>
          <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

    </Wrapper>
    
  );
}
