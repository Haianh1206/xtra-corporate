// DefineYourGoals.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { MessageCircle, CheckCircle, Users, ShoppingCart } from "lucide-react";
import bgImage from "../assets/banner-img2.png"; // Ảnh nền xanh
import goalImage from "../assets/goal-img.png"; // Ảnh chính

import {
  Section,
  Content,
  Left,
  Right,
  Heading,
  Subheading,
  Description,
  Tabs,
  Tab,
  BackgroundIcon,
  TabContent,
  Underline,
}from "./SetYourGoals.styles";


export default function DefineYourGoals() {
  const [activeTab, setActiveTab] = useState("define");

  return (
    <Section>
      <Content>
        <Left>
          <img src={goalImage} alt="Define Goals" />
        </Left>
        <Right>
          <BackgroundIcon />
          <Heading>DEFINE YOUR GOALS</Heading>
          <Subheading>IT NEEDS DIRECTION</Subheading>
          <Description>
            What is the purpose of the process? Why was it created? How will you
            know if it is successful? A sales process might seem to be very
            different from the finance process, but there are certain steps that
            are universally common to all business processes. Xtra only delivers
            content for the small business segment.
          </Description>
        </Right>
        <Tabs>
          <Tab
            active={activeTab === "define"}
            onClick={() => setActiveTab("define")}
          >
            <div>
              <TabContent>
                <MessageCircle />
                <span>Define Your Goals</span>
              </TabContent>
              {activeTab === "define" && <Underline />}
            </div>
          </Tab>

          <Tab
            active={activeTab === "plan"}
            onClick={() => setActiveTab("plan")}
          >
            <div>
              <TabContent>
                <CheckCircle />
                <span>Plan Your Process</span>
              </TabContent>
              {activeTab === "plan" && <Underline />}
            </div>
          </Tab>

          <Tab
            active={activeTab === "assign"}
            onClick={() => setActiveTab("assign")}
          >
            <div>
              <TabContent>
                <Users />
                <span>Assign Stakeholders</span>
              </TabContent>
              {activeTab === "assign" && <Underline />}
            </div>
          </Tab>

          <Tab
            active={activeTab === "process"}
            onClick={() => setActiveTab("process")}
          >
            <div>
              <TabContent>
                <ShoppingCart />
                <span>Process Implement</span>
              </TabContent>
            </div>
          </Tab>
        </Tabs>
      </Content>
              {activeTab === "process" && <Underline />}
    </Section>
  );
}
