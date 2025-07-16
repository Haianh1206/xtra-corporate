import styled from "styled-components";
import bannerImage from "../assets/banner-img.png"; // hình minh họa nhỏ bên phải
 // ảnh nền chính (bạn cần có ảnh này)

const BannerSection = styled.section`
  padding: 160px 40px 100px;
  background: 
    linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)),
    url(${bannerImage});
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 120px 20px 80px;
    text-align: center;
    align-items: center;
  }
`;

const TextContent = styled.div`
  max-width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 195px;
max-width: 800px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`;
const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;


const SubText = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
`;
const Title = styled.h1`
  font-size: 56px;
  line-height: 1.2;
  font-weight: 800;
  margin-bottom: 20px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 36px;
    white-space: normal; 
  }
`;


const Description = styled.p`
  font-size: 20px;
  color: #eee;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 14px 28px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 6px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #0d6efd;
  }
`;




export default function Banner() {
  return (
    <BannerSection>
  <TextContent>
    <Title>Protetc Your All Business</Title>
    <Description>
      Need a Consultant for Your Bussiness Contact us Today.
    </Description>
    <ActionsRow>
      <Button>Contact Us Now</Button>
      <SubText>Check out our packages</SubText>
    </ActionsRow>
  </TextContent>
</BannerSection>

  );
}


