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
  margin-top: 16px;
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
  margin-left: auto;
  background-color: #82b440;
  font-size: 14px;
  padding: 5px 20px;
  line-height: 1.5;
  color: #000;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 0;

  /* Đổ bóng ngược lên trên */
  box-shadow: 0 -4px 8px rgba(111, 154, 55, 0.3);
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
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      transition: none !important;
      color: rgba(255, 255, 255, 0.5) !important; /* cố định màu icon */
    }

    &:hover {
      color: #ffffff;
    }

    &:hover svg {
      color: rgba(
        255,
        255,
        255,
        0.5
      ) !important; /* ngăn icon đổi màu khi hover */
    }
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
.nav-link-inner {
  display: flex;
  align-items: center;
  
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
      padding: 5px 20px;
      color: #555;
      text-decoration: none;
      opacity: 0;
      font-size: 16px;
      transform: translateY(-10px);
      animation: dropdownFadeIn 0.3s ease forwards;
      animation-delay: 0s;

      .link-inner {
        display: inline-block;
        transform: translateX(0);
        transition: color 0.3s ease, transform 0.3s ease;
      }

      &:hover .link-inner {
        color: #0d6efd;
        transform: translateX(4px);
      }
    }

    a:nth-child(1) {
      animation-delay: 0.05s;
    }
    a:nth-child(2) {
      animation-delay: 0.1s;
    }
    a:nth-child(3) {
      animation-delay: 0.15s;
    }
    a:nth-child(4) {
      animation-delay: 0.2s;
    }
    a:nth-child(5) {
      animation-delay: 0.25s;
    }
    a:nth-child(6) {
      animation-delay: 0.3s;
    }
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

      .nav-link {
        display: flex;
        align-items: center;
        gap: 6px;
        position: relative;
        text-decoration: none;
        color: #fff;
        font-weight: 500;

        svg {
          font-size: 20px;
          margin-top : 6px;
          margin-left : 2px;
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
      }

      .has-dropdown {
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
        }

        &:hover .dropdown {
          display: flex;
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
          color: #fff !important;
        }
      }

      .cart-icon {
        position: relative;

        .cart {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 16px;
            right: 0;
            width: 100%;
            height: 30px;
            background: transparent;
            z-index: 1;
          }
          .cart-trigger {
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .cart-count {
            position: absolute;
            top: -20px;
            right: -10px;
            background-color: #fff;
            color: #333;
            font-size: 12px;
            padding: 0px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 4px;
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
            border-radius: 4px;
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

        <NavBar>
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
              <FaBars />
            </div>
          </div>
        </NavBar>
      </ContentContainer>
    </Wrapper>
  );
}
