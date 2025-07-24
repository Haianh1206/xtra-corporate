import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaMoon } from "react-icons/fa";

const CookieBannerWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  left: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 20px;
  z-index: 9999;
  max-width: 420px;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: #002a96;
`;

const Text = styled.p`
  flex: 1;
  font-size: 14px;
  color: #333;
  margin: 0;
`;

const AcceptButton = styled.button`
  background-color: #002a96;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: #001c6a;
  }
`;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <CookieBannerWrapper>
      <IconWrapper><FaMoon /></IconWrapper>
      <Text>This website uses cookies to improve user experience.</Text>
      <AcceptButton onClick={handleAccept}>
        Accept and close
      </AcceptButton>
    </CookieBannerWrapper>
  );
}
