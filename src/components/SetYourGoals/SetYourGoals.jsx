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

const goalOptions = {
  define: {
    title: "DEFINE YOUR GOALS",
    sub: "IT NEEDS DIRECTION",
    desc: `What is the purpose of the process? Why was it created? How will you
            know if it is successful? A sales process might seem to be very
            different from the finance process, but there are certain steps that
            are universally common to all business processes. Xtra only delivers
            content for the small business segment.`,
    image: goalImage,
  },
  plan: {
    title: "PLAN & MAP YOUR PROCESS",
    sub: "THINK OUT OF THE BOX",
    desc: `What are the strategies needed to achieve the goals? This is the broad road map for the process. A sales process might seem to be very different from a finance process, but there are certain steps that are universally common to all business processes.`,
    image: goalImage, // bạn có thể thay ảnh khác nếu muốn
  },
  assign: {
    title: "SET REQUIRED ACTIONS",
    sub: "SET ACTIONS & ASSIGN STAKEHOLDERS",
    desc: `Identify the individual tasks your teams and machines need to do in order to execute the plan. What is the purpose of the process? Why was it created? How will you know if it is successful? Machines need to do in order to execute the new plan.`,
    image: goalImage,
  },
  process: {
    title: "IMPLEMENT THE PROCESS",
    sub: "RUN IN THE LIVE ENVIRONMENT",
    desc: `Start running the process in a live environment. Properly communicate and train all stakeholders. A sales process might seem to be very different from a finance process, but there are certain steps that are universally common to all business processes.`,
    image: goalImage,
  },
};

export default function DefineYourGoals() {
  const [activeTab, setActiveTab] = useState("define");
  const currentGoal = goalOptions[activeTab]; // 👈 lấy nội dung tương ứng tab đang chọn
  const isReversed = activeTab === "plan" || activeTab === "process";

  return (
    <Section>
      <Content key={activeTab} isReversed={isReversed} className="fade-zoom">
        <Left>
          <img src={currentGoal.image} alt={currentGoal.title} />
        </Left>
        <Right>
          <BackgroundIcon />
          <Heading>{currentGoal.title}</Heading>
          <Subheading>{currentGoal.sub}</Subheading>
          <Description>{currentGoal.desc}</Description>
        </Right>

        <Tabs>
          <Tab
            active={activeTab === "define"}
            onClick={() => setActiveTab("define")}
            id="define"
          >
            <TabContent>
              <MessageCircle />
              <span>Define Your Goals</span>
            </TabContent>
          </Tab>

          <Tab
            active={activeTab === "plan"}
            onClick={() => setActiveTab("plan")}
            id="plan"
          >
            <TabContent>
              <CheckCircle />
              <span>Plan Your Process</span>
            </TabContent>
          </Tab>

          <Tab
            active={activeTab === "assign"}
            onClick={() => setActiveTab("assign")}
            id="assign"
          >
            <TabContent>
              <Users />
              <span>Assign Stakeholders</span>
            </TabContent>
          </Tab>

          <Tab
            active={activeTab === "process"}
            onClick={() => setActiveTab("process")}
            id="process"
          >
            <TabContent>
              <ShoppingCart />
              <span>Process Implement</span>
            </TabContent>
          </Tab>

          {/* 👉 Underline duy nhất */}
          <Underline
            tabIndex={["define", "plan", "assign", "process"].indexOf(
              activeTab
            )}
          />
          {/* <Underline activeTab={activeTab} /> */}
        </Tabs>
      </Content>
    </Section>
  );
}
