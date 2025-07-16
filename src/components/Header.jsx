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
  FaChevronDown
} from "react-icons/fa";

const Wrapper = styled.header`
  width: 100%;
  position: relative;
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
  height: 54px;

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
  margin-left: 120px;
  margin-right: 120px;
`;

const SocialBar = styled.div`
  background: transparent;
  color: #ccc;
  font-size: 14px;
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 54px;

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
    color: #060c7aff;
  }
  svg:nth-child(2):hover {
    color: #37139aff;
  }
  svg:nth-child(3):hover {
    color: #5750bcff;
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
    gap: 40px; /* tăng khoảng cách giữa 2 mục */
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: hidden;
  }

  .info span {
    color: rgba(255, 255, 255, 0.5); /* mờ */
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .info span:hover {
    color: #ffffff; /* sáng */
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
  box-shadow: none;

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
      transition: color 0.3s ease;

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
         &.active::after {
  transform: translateX(-50%) scaleX(1);
      }

      &:hover::after {
        transform: translateX(-50%) scaleX(1);
      }

      &:hover {
        color: #fff; /* Không cần xanh dương nữa */
      }

      /* dropdown support */
      &.has-dropdown {
        position: relative;
      }

      .dropdown {
        display: none;
        position: absolute;
        top: 35px;
        left: 0;
        background: #111;
        padding: 10px 0;
        min-width: 150px;
        flex-direction: column;
        border-radius: 4px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        z-index: 1000;

        a {
          padding: 10px 20px;
          color: #ccc;
          white-space: nowrap;
          text-decoration: none;

          &:hover {
            background: #222;
            color: #fff;
          }
        }
      }

      &.has-dropdown:hover .dropdown,
&.has-dropdown .dropdown:hover {
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
      }
    }
  }
}

    nav {
      display: flex;
      gap: 25px;

      a {
        display: flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        color: #fff;
        font-weight: 500;
        svg {
          font-size: 20px;
        }
        &:hover {
          color: #0d6efd;
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
    }
      .cart-icon {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 50%;
  font-weight: bold;
}

  }
`;

export default function Header() {
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
              <a className="active" href="#">
                <FaHome />
              </a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">FAQ’s</a>
              <a className="has-dropdown" href="#">
                Blog <FaChevronDown size={14} />
                <div className="dropdown">
                  <a href="#">Blog List</a>
                  <a href="#">Video Player</a>
                </div>
              </a>
              <a href="#">Portfolio <FaChevronDown size={14} /></a>
              <a href="#">Shop<FaChevronDown size={14} /></a>
              <a href="#">Contact</a>
            </nav>

            <div className="icons">
              <FaSearch />
              <div className="cart-icon">
  <FaShoppingCart />
  <span className="cart-count">0</span>
</div>
              <FaBars />
            </div>
          </div>
        </NavBar>
      </ContentContainer>
    </Wrapper>
  );
}
