import React from "react";
import styled from "styled-components";

import {
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
  Highlight,
} from "./WorkProcess.styles";

export default function WorkProcess() {
  return (
    <Section>
      <Left>
        <H5>WORK PROCESS</H5>
        <Heading>
          HOW IT <span>WORKS</span>?
        </Heading>
        <Paragraph>
          As an example, let’s take the content marketing process. It’s a
          process you’ll find in every <b>Marketing Department</b> out there.
          The issue is, it can be rather hectic and chaotic unless the process.
          There will be writers, designers, <Highlight>SEO</Highlight>
          experts, and web designers, all working together to create a single
          piece of content. The first draft is written and reviewed to create
          the final draft.
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
