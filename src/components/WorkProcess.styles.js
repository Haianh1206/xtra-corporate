import styled from "styled-components";
import { CheckCircle } from "lucide-react";
import media from "../styles/media";

const Section = styled.section`
  padding: 140px 130px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  background-color: #ffffff;
  height: 130vh;

  ${media.lg`
    padding: 60px 40px;
    height: auto;
    flex-direction: column;
    gap: 32px;
  `}

  ${media.md`
            padding: 100px 8px 100px 8px;
    gap: 24px;
  `}
`;

const Left = styled.div`
  flex: 1;
  min-width: 300px;

  ${media.lg`
    width: 100%;
    text-align : center;
  `}
`;

const Right = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  min-width: 300px;

  ${media.lg`
    width: 100%;
  `}

  ${media.md`
    grid-template-columns: 1fr;
    gap: 24px;
  `}
`;
const H5 = styled.h5`
font-size: 18px;
color: #aaa;
font-weight: 500;
margin-bottom: 10px;
`
const Heading = styled.h2`
  font-size: 38px;
  font-weight: 900;

  span {
    color: #002699;
     font-weight: inherit;
    font-size: inherit;
    display: inline;
  }

  ${media.md`
    font-size: 28px;
    margin : 0;
  `}
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 2;
  color: #666;
  margin: 46px 0;

  ${media.md`
    font-size: 16px;
  `}
`;

const StepList = styled.ul`
  list-style: none;
  margin-top: 70px;
  padding: 0;

  ${media.md`
    margin-top: 40px;
  `}
`;

const StepItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 30px;

  svg {
    transition: all 0.3s ease;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border-radius: 50%;
   
    color: green;
    opacity: 0.7;
  }

  &:hover svg {
    background-color: #1a73e8;
    color: #fff;
    opacity: 1;
    transform: scale(1.8);
    
  }

  ${media.md`
    font-size: 15px;
  `}
`;

const Icon = styled(CheckCircle)`
  color: green;
  transition: all 0.3s ease;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const Box = styled.div`
  background: #fff;
  padding: 24px;
  position: relative;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 265px;
  width: 290px;

  &:hover {
    border-color: #1a73e8;
  }

  &:nth-child(2),
  &:nth-child(4) {
    top: 80px;

    ${media.lg`
      top: 0;
    `}
  }

  ${media.lg`
    height: auto;
    width: 100%;
        text-align : center;
        padding :0;

  `}
`;

const Roman = styled.div`
  position: absolute;
  top: -20px;
  left: 16px;
  font-size: 130px;
  font-weight: 700;
  color: #000;
  opacity: 0.1;
  z-index: 0;
  pointer-events: none;

  ${media.md`
    font-size: 130px;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  `}
`;


const BoxTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  position: relative;
  z-index: 1;
  margin-top: 60px;
  margin-left: 13px;

  span {
    color: #888;
    font-weight: 600;
    margin-right: 8px;
     font-weight: inherit;
    font-size: inherit;
    display: inline;
  }

  ${media.md`
    font-size: 24px;
    margin-top: 80px;
    margin-left: 0;
    text-align: center;
  `}
`;


const BoxDesc = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 24px;
  margin-left: 12px;
  position: relative;
  z-index: 1;
  line-height: 30px;

  ${media.md`
    font-size: 14px;
    margin-top: 40px;
    margin-left: 0;
    text-align: center;
    line-height: 26px;
    /* Không giới hạn dòng */
  `}
`;



export {
  Section,
  Left,
  Right,
  Heading,
  Paragraph,
  StepList,
  StepItem,
  Icon,
  Box,
  Roman,
  BoxTitle,
  BoxDesc,
  H5,
};
