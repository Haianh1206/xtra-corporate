import React from "react";
import styled from "styled-components";
import { CheckCircle } from "lucide-react";

const Section = styled.section`
  padding: 100px 130px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  background-color: #ffffff;
  height : 90vh;
`;

const Left = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Right = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  min-width: 300px;
`;

const Heading = styled.h2`
  font-size: 38px;
  font-weight: 900;

  span {
    color: #002699;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 2;
  color: #666;
  margin: 20px 0;
`;

const StepList = styled.ul`
  list-style: none;
  margin-top : 70px;
  padding: 0;
`;

const StepItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;

  svg {
    transition: all 0.3s ease;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border-radius: 50%;
    padding: 10px;
    color: green;
    opacity: 0.7;
  }

  &:hover svg {
    background-color: #1a73e8;
    color: #fff;
    opacity: 1;
    transform: scale(1.1);
    
  }
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
  height: 260px; /* đảm bảo đều chiều cao */
  width: 245px;
  &:hover {
    border-color: #1a73e8;
  }

  &:nth-child(2),
  &:nth-child(4) {
    top: 80px; /* lệch xuống mà vẫn giữ chiều cao đều */
  }
 
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
  }
`;

const BoxDesc = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 54px;
  margin-left: 12px;
  position: relative;
  z-index: 1;
  line-height: 30px;
`;

export default function WorkProcess() {
  return (
    <Section>
      <Left>
        <h5 style={{ fontSize: "18px", color: "#aaa", fontWeight: 500 }}>
          WORK PROCESS
        </h5>
        <Heading>
          HOW IT <span>WORKS</span>?
        </Heading>
        <Paragraph>
          As an example, let’s take the content marketing process. It’s a
          process you’ll find in every <b>Marketing Department</b> out there.
          The issue is, it can be rather hectic and chaotic unless the process.
          There will be writers, designers, xtra experts, and web designers, all
          working together to create a single piece of content. The first draft
          is written and reviewed to create the final draft.
        </Paragraph>

        <StepList>
          <StepItem>
            <Icon />
            Create a new idea for client project
          </StepItem>
          <StepItem>
            <Icon />
            Start designing wire frame in Photoshop
          </StepItem>
          <StepItem>
            <Icon />
            Development and coding overall project
          </StepItem>
          <StepItem>
            <Icon />
            Test and execute final project on online server
          </StepItem>
        </StepList>
      </Left>

      <Right>
        <Box>
          <Roman>I</Roman>
          <BoxTitle>
            <span>01.</span>IDEA
          </BoxTitle>
          <BoxDesc>
            Based on client needs,
            <br />
            We will provide some
            <br />
            good solutions
          </BoxDesc>
        </Box>
        <Box>
          <Roman>II</Roman>
          <BoxTitle>
            <span>02.</span>DESIGN
          </BoxTitle>
          <BoxDesc>
            Based on client needs,
            <br />
            We will provide some
            <br />
            good solutions
          </BoxDesc>
        </Box>
        <Box>
          <Roman>III</Roman>
          <BoxTitle>
            <span>03.</span>CREATE
          </BoxTitle>
          <BoxDesc>
            Based on client needs,
            <br />
            We will provide some
            <br />
            good solutions
          </BoxDesc>
        </Box>
        <Box>
          <Roman>IV</Roman>
          <BoxTitle>
            <span>04.</span>EXECUTE
          </BoxTitle>
          <BoxDesc>
            Based on client needs,
            <br />
            We will provide some
            <br />
            good solutions
          </BoxDesc>
        </Box>
      </Right>
    </Section>
  );
}
