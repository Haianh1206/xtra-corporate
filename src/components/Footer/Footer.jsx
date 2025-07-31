// FooterSection.jsx

import { useState, useEffect } from "react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaSkype,
  FaEnvelope,
  FaChevronUp,
} from "react-icons/fa";

import XtraLogo from "../../assets/xtra-logo.png";

import {
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
} from "./Footer.styles";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function FooterSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTop(scrollY > window.innerHeight); // chỉ hiện khi scroll > 1 màn hình
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
        <div>
          &copy; Copyright 2025. All Rights Reserved - XtraTheme Pty Ltd.
        </div>

        <Socials>
          <span>
            <i>
              <FaFacebookF />
            </i>
          </span>
          <span>
            <i>
              <FaLinkedinIn />
            </i>
          </span>
          <span>
            <i>
              <FaTwitter />
            </i>
          </span>
          <span>
            <i>
              <FaYoutube />
            </i>
          </span>
          <span>
            <i>
              <FaSkype />
            </i>
          </span>
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
            {showScrollTop && (
              <div className="icon chevron" onClick={scrollToTop}>
                <FaChevronUp className="main-arrow" />
                <FaChevronUp className="hover-arrow" />
              </div>
            )}
          </HoverIcons>
        </RightGroup>
      </FooterBottom>
    </Container>
  );
}
