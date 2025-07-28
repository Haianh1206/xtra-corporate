import styled from "styled-components";
import media from "../styles/media";

const Container = styled.section`
  background: #01131d;
  padding: 70px 120px 70px 130px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.md`
    flex-direction: column;
    padding: 60px 20px;
  `}
`;

const InfoBlock = styled.div`
  width: 300px;
  text-align: left;
  margin-right: 40px;
  margin-bottom: 100px;

  ${media.md`
    margin-right: 0;
    margin-bottom: 0px;
    text-align: center;
  `}
  
`;

const Title = styled.h2`
  font-weight: 700;
  margin-top: 56px;
  line-height: 1.3;

  span:first-child {
    font-size: 46px;
    display: block;
    margin-top : -22px;
  }

  span:last-child {
    font-size: 40px;
    display: block;
  }

  ${media.md`
    
    text-align: center;
  `}
`;

const Subtitle = styled.p`
  color: #bbb;
  font-size: 16px;
  margin-bottom: 20px;

  ${media.md`
    text-align: center;
    font-size: 14px;
  `}
    ${media.sm`
    margin-top:40px;
   margin-bottom: -40px;

  `}
`;

const Grid = styled.div`
  display: flex;

  ${media.md`
    flex-direction: column;
    align-items: center;
    gap: 40px;
  `}
   ${media.sm`
   
    gap: 0px;
  `}
`;

const Card = styled.div`
  background: transparent;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  transition: filter 0.4s ease;
  position: relative;

  ${media.md`
    width: 100%;
    max-width: 300px;
  `}

  &:hover img {
    filter: none;
  }
`;

const Avatar = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 2px;

  filter: grayscale(100%);
  transition: filter 0.4s ease;

  ${media.md`
    width: 100%;
    height: auto;
    max-width: 370px;
  `}
`;

const Name = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: -10px;
  margin-top: 12px;
  text-align: center;
  

`;

const Role = styled.p`
  color: #aaa;
  margin-bottom: 12px;
  text-align: center;
  margin-top: 20px;
  ${media.sm`
      margin-bottom: 0px;

  `}
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
  gap: 40px;
  height: 275px;

  ${media.md`
    height: auto;
    padding: 40px 20px;
  `}
  ${media.sm`
    height: auto;
    padding: 80px 20px;
    gap : 10px;
  `}
`;

const Logo = styled.img`
  max-height: 90px;
  object-fit: contain;
  opacity: 0.4;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
     ${media.md`
   max-height: 150px;
  `}
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
  Logo,
};
