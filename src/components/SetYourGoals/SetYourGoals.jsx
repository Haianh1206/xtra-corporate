// DefineYourGoals.jsx
import { useState } from "react";
import { MessageCircle, CheckCircle, Users, ShoppingCart } from "lucide-react";

import goalImage from "../../assets/goal-img.png"; // Ảnh chính

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
} from "./SetYourGoals.styles";

// const goalOptions = {
//   define: {
//     title: "DEFINE YOUR GOALS",
//     sub: "IT NEEDS DIRECTION",
//     desc: `What is the purpose of the process? Why was it created? How will you
//     know if it is successful? A sales process might seem to be very
//     different from the finance process...`,
//     image: goalImage,
//   },
//   plan: {
//     title: "PLAN YOUR PROCESS",
//     sub: "BLUEPRINT FOR SUCCESS",
//     desc: `A plan helps map out the steps, define responsibilities and set the goals clearly...`,
//     image: goalImage, // bạn có thể thay ảnh khác nếu muốn
//   },
//   assign: {
//     title: "ASSIGN STAKEHOLDERS",
//     sub: "ROLES MATTER",
//     desc: `Each member needs a clear role to ensure that the process flows efficiently and transparently...`,
//     image: goalImage,
//   },
//   process: {
//     title: "PROCESS IMPLEMENT",
//     sub: "EXECUTION PHASE",
//     desc: `Time to execute. Track performance, gather data, and improve continuously.`,
//     image: goalImage,
//   },
// };

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
