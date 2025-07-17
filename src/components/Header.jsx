import styled from "styled-components";
import xtraLogo from "../assets/xtra-logo.png";
import envatoLogo from "../assets/envato-logo.png";

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

const Wrapper = styled.header`
  width: 100%;
   position: absolute;
  margin-top : 16px;

  z-index: 3000;
`;

const TopBar = styled.div`
  background: #222;
  color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3000;
  height: 34px;

  .envato {
    display: flex;
    align-items: center;

    img {
      height: 22px;
    }
  }

  .message {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 500;
    white-space: nowrap;
    font-size: 16px;
    strong {
      font-weight: 700;
      color: #fff;
    }
  }

  .download-btn {
    background-color: #8bc34a;
    color: #262626;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: #7cb342;
    }
  }
`;

const ContentContainer = styled.div`
  margin: 54px 120px 0;
`;

const SocialBar = styled.div`
  background: transparent;
  color: #ccc;
  font-size: 14px;
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  svg {
    color: #fff;
    margin-right: 15px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.5s ease, color 0.1s ease;

    &:hover {
      transform: rotateY(360deg);
    }
  }

  svg:nth-child(1):hover {
    color: #060c7a;
  }
  svg:nth-child(2):hover {
    color: #37139a;
  }
  svg:nth-child(3):hover {
    color: #5750bc;
  }
  svg:nth-child(4):hover {
    color: #f44336;
  }
  svg:nth-child(5):hover {
    color: #0078d7;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: hidden;
  }

  .info span {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .info span:hover {
    color: #ffffff;
  }

  .highlight {
    font-weight: 700;
    color: #fff;
  }
`;

const NavBar = styled.div`
  background: transparent;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @keyframes dropdownFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dropdown {
    /* đã có styles sẵn, giờ thêm animation */
    animation: dropdownFadeIn 0.3s ease forwards;
  }

  .dropdown a {
    opacity: 0;
    transform: translateY(-10px);
    animation: dropdownFadeIn 0.3s ease forwards;
    animation-delay: 0.1s;
  }

  .dropdown a:nth-child(2) {
    animation-delay: 0.1s;
  }
  .dropdown a:nth-child(3) {
    animation-delay: 0.14s;
  }
  .dropdown a:nth-child(4) {
    animation-delay: 0.18s;
  }
  .dropdown a:nth-child(5) {
    animation-delay: 0.22s;
  }
  .dropdown a:nth-child(6) {
    animation-delay: 0.26s;
  }

  .logo {
    height: 65px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 30px;

    nav {
      display: flex;
      gap: 25px;

      a {
        display: flex;
        align-items: center;
        gap: 6px;
        position: relative;
        text-decoration: none;
        color: #fff;
        font-weight: 500;

        svg {
          font-size: 20px;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 100%;
          height: 2px;
          background-color: white;
          transition: transform 0.3s ease;
          transform-origin: center;
        }

        &.active::after,
        &:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        &.has-dropdown {
          position: relative;

          .hover-bridge {
            position: absolute;
            top: 25px;
            left: 0;
            width: 100%;
            height: 10px;
            background: transparent;
            z-index: 1;
          }

          .dropdown {
            display: none;
            position: absolute;
            top: 35px;
            left: 0;
            background: #fff;
            padding: 10px 0;
            min-width: 200px;
            flex-direction: column;
            border-radius: 4px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;

            a {
              padding: 10px 20px;
              color: #555;
              text-decoration: none;
              transition: all 0.3s ease;

              &:hover {
                background: transparent;
                color: #0d6efd;
                transform: translateX(5px);
              }
            }
          }

          &:hover .dropdown {
            display: flex;
          }
        }
      }
    }

    .icons {
      display: flex;
      align-items: center;
      gap: 20px;

      svg {
        color: #fff;
        font-size: 20px;
        cursor: pointer;

        &:hover {
          color: #0d6efd;
        }
      }

      .cart-icon {
        position: relative;

        .cart {
          position: relative;

          .cart-trigger {
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .cart-count {
            position: absolute;
            top: -20px;
            right: -10px;
            background-color: #fff; /* hoặc #fff nếu bạn muốn nền trắng */
            color: #333;
            font-size: 12px;
            padding: 0px;
            border: 1px solid rgba(255, 255, 255, 0.5); /* viền trắng mờ */
            border-radius: 4px; /* hình vuông bo nhẹ */
            font-weight: bold;
            min-width: 20px;
            min-height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .cart-dropdown {
            display: none;
            position: absolute;
            top: 40px;
            right: -20px;
            width: 360px;
            height: 183px;
            background: #fff;
            padding: 5px;
            border-radius: 6px;
            text-align: center;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            flex-direction: column;
            animation: dropdownFadeIn 0.3s ease forwards;
            z-index: 2000;

            &::before {
              content: "";
              position: absolute;
              top: -10px;
              left: 92%;
              transform: translateX(-50%);
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
            }

            .cart-inner {
              border: 1px solid rgba(0, 0, 0, 0.1);
              border-radius: 4px;
              padding: 16px;
              margin: 16px;
              height: calc(100% - 32px);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transform: translateY(-10px);
              animation: dropdownFadeIn 0.4s ease forwards;
              svg {
                margin-bottom: 10px;
              }

              p {
                color: #666;
                font-size: 14px;
                margin: 0;
              }
            }
          }

          &:hover .cart-dropdown {
            display: flex;
          }
        }
      }
    }
  }
`;

export { Wrapper, TopBar, ContentContainer, SocialBar, NavBar };

export default function Header({ onHomeClick }) {
  return (
    <Wrapper>
      <TopBar>
        <div className="envato">
          <img src={envatoLogo} alt="Envato" />
        </div>
        <div className="message">
          Limited time offer, <strong>Buy XTRA WordPress theme only $49</strong>
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
              <FaPhoneAlt /> Have questions? Call now{" "}
              <span className="highlight">+1 (818) 23 45 678</span>
            </span>
            <span>
              <FaEnvelope /> Need help? Contact us via email
            </span>
          </div>
        </SocialBar>

        <NavBar>
          <img className="logo" src={xtraLogo} alt="Xtra Logo" />

          <div className="right">
            <nav>
              <a  onClick={onHomeClick} className="active" href="#">
                <FaHome />
              </a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">FAQ’s</a>
              <a className="has-dropdown" href="#">
                Blog <FaChevronDown size={14} />
                <div className="hover-bridge"></div>
                <div className="dropdown">
                  <a href="#">Blog</a>
                  <a href="#">Standard</a>
                  <a href="#">Video Player</a>
                  <a href="#">Audio Player</a>
                  <a href="#">Images Gallery</a>
                  <a href="#">Slider Gallery</a>
                </div>
              </a>
              <a className="has-dropdown" href="#">
                Portfolio <FaChevronDown size={14} />
                <div className="hover-bridge"></div>
                <div className="dropdown">
                  <a href="#">Portfolio</a>
                  <a href="#">Single 1 Slider</a>
                  <a href="#">Single 2 Gallery</a>
                  <a href="#">Single 3 Full</a>
                </div>
              </a>
              <a className="has-dropdown" href="#">
                Shop
                <FaChevronDown size={14} />
                <div className="hover-bridge"></div>
                <div className="dropdown">
                  <a href="#">All Products</a>
                  <a href="#">My account</a>
                  <a href="#">Cart</a>
                  <a href="#">Checkout</a>
                </div>
              </a>

              <a href="#">Contact</a>
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

              <FaBars />
            </div>
          </div>
        </NavBar>
      </ContentContainer>
    </Wrapper>
  );
}
