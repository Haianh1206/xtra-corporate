// FooterSection.jsx
import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaSkype,
  FaEnvelope,
  FaChevronUp,
} from "react-icons/fa";

import FooterBg from "../assets/abousection1.png";
import XtraLogo from "../assets/xtra-logo.png";

const Container = styled.footer`
  background: linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${FooterBg}) no-repeat center/cover;
  color: white;
  padding: 40px 120px;
  font-size: 15px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const SubscribeTitle = styled.p`
  font-size: 24px;
  font-weight: 300;
  span {
    font-weight: 700;
  }
`;

const SubscribeForm = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5); /* trắng mờ */
  background: transparent;
  border-radius: 4px;
  overflow: hidden;
  width: 620px;
  margin-left: auto; /* đẩy sang phải */
  transition: border 0.3s ease;

  &:focus-within {
    border-color: #003b85; /* xanh dương khi focus vào input */
  }

  input {
    padding: 12px 16px;
    border: none;
    outline: none;
    flex: 1;
    font-size: 16px;
    background: transparent;
    color: white;

    &::placeholder {
      color: #ccc;
    }
  }
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

  /* Hover hiệu ứng: đẩy chữ, đổi màu, và tô radio như được chọn */
  &:hover {
    left: 5px;
    color: white;

    input {
      border-color: white;
      background-color: white; /* mô phỏng như đã chọn */
      /* viền giả màu nền */
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
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 500px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 4px;
    color: white;
    font-size: 16px;
  }

  /* Chỉ icon xoay, không xoay cả span */
  span i {
    display: inline-block;
    transition: transform 0.4s ease;
  }

  span:hover i {
    transform: rotateY(360deg);
  }

  /* Mỗi mạng xã hội màu hover khác nhau */
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

  /* Gạch chéo mờ chỉ riêng icon thứ 5 */
  span:nth-child(5)::before {
    content: "/";
    position: absolute;
    left: 40px;
    top: -12px;
    font-size: 36px;
    color: rgba(255, 255, 255, 0.1);
    line-height: 1;
    pointer-events: none;
  }
`;


const FooterInfo = styled.div`
  display: flex;
  flex-direction: column; /* sửa chỗ này */
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
    font-size: 36px; /* Tăng độ dài và rõ */
    color: rgba(255, 255, 255, 0.1); /* Trắng mờ */
    line-height: 1;
  }
`;

const ColumnGroup = styled.div`
  display: flex;
  gap: 30px; /* khoảng cách giữa các cột */
  flex-wrap: wrap;
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
`;
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};



export default function FooterSection() {
  return (
    <Container>
      <TopRow>
        <SubscribeTitle>
          SUBSCRIBE TO OUR <span>NEWSLETTER</span>
        </SubscribeTitle>
        <SubscribeForm>
          <input placeholder="Enter your email address please ..." />
          <JoinButton>JOIN NOW</JoinButton>
        </SubscribeForm>
      </TopRow>

      <Grid>
        <FooterInfo>
          <img src={XtraLogo} alt="XTRA logo" />
          <p>
            XTRA WordPress theme is the last theme you will ever have to buy for
            your business. More powerful and easy to use than any other themes
            on the market with incredible features and friendly support.
          </p>
          <PurchaseButton>Purchase XtraTheme</PurchaseButton>
        </FooterInfo>
        <ColumnGroup>
          <Column>
            <strong>USEFUL LINKS</strong>
            <RadioLink>
              <input type="radio" /> Purchase now
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Support
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Documentation
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Custom Services
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Marketplaces
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Codevz Website
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Portfolio Reviews
            </RadioLink>
          </Column>

          <Column>
            <strong>SHORTCUTS</strong>
            <RadioLink>
              <input type="radio" /> About Us
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Services
            </RadioLink>
            <RadioLink>
              <input type="radio" /> News & Updates
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Our Projects
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Contact Us
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Creative Career Tips
            </RadioLink>
          </Column>

          <Column>
            <strong>CONTACT US</strong>
            <RadioLink>
              <input type="radio" /> General enquiries
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Schedule a callback
            </RadioLink>
            <RadioLink>
              <input type="radio" /> General FAQ's
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Get in Touch
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Xtra Popular Events
            </RadioLink>
            <RadioLink>
              <input type="radio" /> Xtra Reviews
            </RadioLink>
          </Column>
        </ColumnGroup>
      </Grid>

     <FooterBottom>
  <div>&copy; Copyright 2025. All Rights Reserved - XtraTheme.</div>

  <Socials>
  <span><i><FaFacebookF /></i></span>
  <span><i><FaLinkedinIn /></i></span>
  <span><i><FaTwitter /></i></span>
  <span><i><FaYoutube /></i></span>
  <span><i><FaSkype /></i></span>
</Socials>

  <RightGroup>
    <BottomLinks>
      <span>Advertisement</span>
      <span>Privacy Policy</span>
    </BottomLinks>

    <HoverIcons>
  <div className="icon">
    <FaEnvelope />
  </div>
  <div className="icon chevron" onClick={scrollToTop}>
    <FaChevronUp className="main-arrow" />
    <FaChevronUp className="hover-arrow" />
  </div>
</HoverIcons>

  </RightGroup>
</FooterBottom>


    </Container>
  );
}
