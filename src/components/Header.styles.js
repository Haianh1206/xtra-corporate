import styled from "styled-components";
import media from "../styles/media";
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
${media.sm`
    display: none;
  `}
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

  ${media.lg`
    margin: 54px 40px 0;
  `}
  
  ${media.md`
    margin: 48px 20px 0;
  `}
  
  ${media.sm`
    margin: 40px 12px 0;
  `}
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
${media.md`
    display: none;
  `}
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
  

  ${media.md`
    padding: 10px 16px;
  `}

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

  .logo {
    height: 65px;
    max-width: 150px;

    ${media.sm`
      height: 50px;
      max-width: 120px;
    `}
  }

  .right {
    display: flex;
    align-items: center;
    gap: 30px;

    ${media.md`
      display: none;
    `}

    nav {
      display: flex;
      gap: 25px;

      ${media.md`
        gap: 18px;
      `}

      .nav-link.shop,
      .nav-link.contact {
        ${media.md`
          display: none;
        `}
      }

      .dot-menu {
       

        ${media.md`
          display: flex;
          align-items: center;
        `}
      }
    }
  }

  .nav-link-inner {
    display: flex;
    align-items: center;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 6px;
    position: relative;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;

    svg {
      font-size: 20px;
      margin-top: 6px;
      margin-left: 4px;
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

      a:nth-child(1) { animation-delay: 0.05s; }
      a:nth-child(2) { animation-delay: 0.1s; }
      a:nth-child(3) { animation-delay: 0.15s; }
      a:nth-child(4) { animation-delay: 0.2s; }
      a:nth-child(5) { animation-delay: 0.25s; }
      a:nth-child(6) { animation-delay: 0.3s; }
    }

    &:hover .dropdown {
      display: flex;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 20px;

    ${media.sm`
      display: none;
    `}

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
`;

export default NavBar;

export { Wrapper, TopBar, ContentContainer, SocialBar, NavBar };