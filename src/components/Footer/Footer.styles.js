// Footer.styles.js
import styled from "styled-components";
import FooterBg from "../../assets/abousection1.png";
import media from "../../styles/media";

const Container = styled.footer`
  background: linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${FooterBg}) no-repeat center/cover;
  color: white;
  padding: 40px 120px;
  font-size: 15px;
  ${media.x`
    padding: 40px 52px;
  `}
  ${media.md`
    padding: 40px 32px;
  `}
  ${media.sm`
    padding: 40px 32px 120px 32px;
   
  `}
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  ${media.md`
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  `}
`;

const SubscribeTitle = styled.p`
  font-size: 24px;
  font-weight: 300;

  span {
    font-weight: 700;
    display: inline;
    font-size: 24px;
    margin-left: 6px;
  }
  ${media.sm`
    text-align : center;
  `}
`;

const SubscribeForm = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  border-radius: 4px;
  overflow: hidden;
  width: 620px;
  margin-left: auto;
  transition: border 0.3s ease;

  &:focus-within {
    border-color: #003b85;
  }

  input {
    padding: 12px 16px;
    border: none;
    outline: none;
    flex: 1;
    font-size: 16px;
    background: transparent;
    color: white;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    &::placeholder {
      color: #ccc;
    }
  }
  ${media.x`
    width: 50%;
    flex-direction: row;

    input {
      width: 50%;
    }

    button {
      width: auto;
      align-self: flex-start;
    }
  `}

  ${media.md`
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    input {
      width: 100%;
    }

    button {
      width: auto;
      align-self: flex-start;
    }
  `}

  ${media.sm`
    border: none;
    width: 100%;

    input {
      border: 1px solid rgba(255, 255, 255, 0.5);
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }

    button {
      margin-top: 8px;
      width: auto;
      align-self: flex-start;
    }
  `}
`;

const JoinButton = styled.button`
  background: white;
  color: #002699;
  font-weight: 700;
  border: none;
  padding: 8px 16px;
  margin: 8px;
  height: 100%;
  cursor: pointer;
  transition: 0.3s ease;
  border-radius: 4px;
  &:hover {
    background: #002699;
    color: white;
  }
  ${media.sm`
  padding: 10px 16px;
  font-size: 14px;
  margin: 8px 0 0 8px;
  align-self: flex-start; /* 👈 đảm bảo không bị căn giữa */
  text-align: center;
  line-height: 16px;
`}
`;

const PurchaseButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px 24px;
  font-weight: 700;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 16px;
  &:hover {
    background: white;
    color: #003b85;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 50px;
  gap: 80px;
  ${media.x`
   
    gap: 0px;
  `}
  ${media.md`
    flex-direction: column;
    gap: 40px;
  `}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 180px;
  color: #ccc;
  flex: 1;
  strong {
    color: white;
    margin-bottom: 32px;
    margin-left: 4px;
  }
  ${media.x`
      min-width: 0px;
padding : 3px;
  `}
`;

const RadioLink = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: 0.1s ease;
  position: relative;
  left: 0;

  input {
    appearance: none;
    width: 12px;
    height: 12px;
    border: 2px solid #777;
    border-radius: 50%;
    position: relative;
    transition: 0.1s ease;
  }

  &:hover {
    left: 5px;
    color: white;
    input {
      border-color: white;
      background-color: white;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  font-size: 13px;
  flex-wrap: wrap;

  div {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
  }

  ${media.md`
    flex-direction: column;
    gap: 24px;
    align-items: center;
    text-align: center;
  `}'
  ${media.sm`
    width : 100px;
  `}
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 460px;

  ${media.md`
    margin-left: 0;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  `}
  ${media.sm`
    display : none;
    
  }
  `}
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 4px;
    color: white;
    font-size: 16px;
  }

  span i {
    display: inline-block;
    transition: transform 0.4s ease;
  }

  span:hover i {
    transform: rotateY(360deg);
  }

  span:nth-child(1):hover i {
    color: #060c7a;
  }
  span:nth-child(2):hover i {
    color: #37139a;
  }
  span:nth-child(3):hover i {
    color: #5750bc;
  }
  span:nth-child(4):hover i {
    color: #f44336;
  }
  span:nth-child(5):hover i {
    color: #0078d7;
  }

  span:nth-child(5)::before {
    content: "/";
    position: absolute;
    left: 28px;
    top: -12px;
    font-size: 36px;
    color: rgba(255, 255, 255, 0.1);
    line-height: 1;
    pointer-events: none;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  max-width: 500px;
  font-size: 16px;
  img {
    height: 60px;
  }
  p {
    color: #ccc;
    line-height: 1.8;
    margin-top: 10px;
    width: 390px;
  }
  ${media.x`
    max-width: 50%;
    p {
      width: 60%;
    }
  `}
  ${media.md`
    max-width: 100%;
    p {
      width: 100%;
    }
  `}
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  span {
    color: #ccc;
    position: relative;
    padding-left: 16px;
  }

  span:not(:first-child)::before {
    content: "/";
    position: absolute;
    left: -10px;
    top: -12px;
    font-size: 36px;
    color: rgba(255, 255, 255, 0.1);
    line-height: 1;
  }

  ${media.md`
    flex-direction: column;
    gap: 12px;
    span:not(:first-child)::before {
      
    }
    span {
      padding-left: 0;
    }
  `}
  ${media.sm`
    flex-direction: row;
     gap: 36px; 
      span:not(:first-child)::before {
    content: "/";
    position: absolute;
    left: -25px;
    top: -12px;
    font-size: 36px;
    color: rgba(255, 255, 255, 0.1);
    line-height: 1;
    
  }
  `}
`;

const ColumnGroup = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  ${media.x`
    gap: 0px;
  `}
  ${media.md`
    gap: 24px;
    justify-content: space-between;
    flex-direction : column;
  `}
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HoverIcons = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  z-index: 1000;
  .icon {
    position: relative;
    width: 40px;
    height: 40px;
    background-color: #01131c;
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  .icon:hover {
    background-color: #003b85;
    color: white;
  }
  .icon.chevron {
    font-size: 18px;
  }
  .icon.chevron .main-arrow {
    position: absolute;
    transition: all 0.4s ease;
    opacity: 1;
  }
  .icon.chevron .hover-arrow {
    position: absolute;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.4s ease;
  }
  .icon.chevron:hover .main-arrow {
    transform: translateY(-20px);
    opacity: 0;
  }
  .icon.chevron:hover .hover-arrow {
    transform: translateY(0);
    opacity: 1;
  }
  ${media.sm` 
    .icon:first-child {
      display: none; /* Hide FaEnvelope on mobile */
    }

    .icon.chevron {
    margin-bottom : 70px;
      display: flex; /* Ensure it's visible on mobile */
    }
  `}
`;

export {
  Container,
  TopRow,
  SubscribeTitle,
  SubscribeForm,
  JoinButton,
  PurchaseButton,
  Grid,
  Column,
  RadioLink,
  FooterBottom,
  Socials,
  FooterInfo,
  BottomLinks,
  ColumnGroup,
  RightGroup,
  HoverIcons,
};
