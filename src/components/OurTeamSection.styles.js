import styled from "styled-components";

const Container = styled.section`
  background: #01131d;
  padding: 100px 120px 100px 130px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoBlock = styled.div`
  width: 300px;
  text-align: left;
  margin-right: 80px;
  margin-bottom: 100px;
`;

const Title = styled.h2`
  font-weight: 700;
  margin-top: 56px;
  line-height: 1.3;

  span:first-child {
    font-size: 46px;
    display: block;
  }

  span:last-child {
    font-size: 40px;
    display: block;
  }
`;

const Subtitle = styled.p`
  color: #bbb;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: flex;
`;

const Card = styled.div`
  background: transparent;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  transition: filter 0.4s ease;
  position: relative;

  &:hover img {
    filter: none;
  }
`;

const Avatar = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 8px;

  filter: grayscale(100%);
  transition: filter 0.4s ease;
`;

const Name = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: -10px;
  margin-top: 12px;
`;

const Role = styled.p`
  color: #aaa;
  margin-bottom: 12px;
`;

const Socials = styled.div`
  position: absolute;
  top: 40%;
  left: 23px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 10;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #002a96;
    color: white;
    font-size: 18px;
    margin: 0;
    transition: background 0.3s ease;
  }
  .facebook:hover {
    background: #3b5998;
  }

  .twitter:hover {
    background: #1da1f2;
  }

  .instagram:hover {
    background: #e1306c;
  }

  .dribbble:hover {
    background: #ea4c89;
  }

  .twitch:hover {
    background: #9146ff;
  }

  span:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  span:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  svg {
    transition: transform 0.5s ease;
  }

  span:hover svg {
    transform: rotateY(360deg);
  }
`;
const LogoSection = styled.section`
  background: #fff;
  padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px; /* hàng: 40px, cột: 30px */
  height : 275px;
`;


const Logo = styled.img`
  max-height: 90px; /* tăng kích thước */
  object-fit: contain;
  opacity: 0.4;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;
export {
  Container,
  InfoBlock,
  Title,
  Subtitle,
  Grid,
  Card,
  Avatar,
  Name,
  Role,
  Socials,
  LogoSection,
  Logo
};