import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { MessageCircle, CheckCircle, Users, ShoppingCart } from "lucide-react";

import goalImage from "../../assets/goal-img.png";

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
  FadeZoomWrap,
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
    image: goalImage,
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
  const currentGoal = goalOptions[activeTab];
  const isReversed = activeTab === "plan" || activeTab === "process";

  const tabRefs = useRef({});
  const underlineRef = useRef(null);
  const tabsContainerRef = useRef(null);
  useLayoutEffect(() => {
    const el = tabRefs.current[activeTab];
    const underlineParent = underlineRef.current?.parentElement;
    if (el && underlineRef.current && underlineParent) {
      const elRect = el.getBoundingClientRect();
      const parentRect = underlineParent.getBoundingClientRect();
      const relativeLeft = elRect.left - parentRect.left;
      underlineRef.current.style.width = `${elRect.width}px`;
      underlineRef.current.style.transform = `translateX(${relativeLeft}px)`;
    }
  }, [activeTab]);

  return (
    <Section>
      <Content isReversed={isReversed}>
        <FadeZoomWrap key={activeTab} isReversed={isReversed}>
          <Left>
            <img src={currentGoal.image} alt={currentGoal.title} />
          </Left>
          <Right>
            <BackgroundIcon />
            <Heading>{currentGoal.title}</Heading>
            <Subheading>{currentGoal.sub}</Subheading>
            <Description>{currentGoal.desc}</Description>
          </Right>
        </FadeZoomWrap>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          ref={tabsContainerRef}
        >
          <Tabs ref={tabsContainerRef}>
            {Object.entries({
              define: { icon: <MessageCircle />, label: "Define Your Goals" },
              plan: { icon: <CheckCircle />, label: "Plan Your Process" },
              assign: { icon: <Users />, label: "Assign Stakeholders" },
              process: { icon: <ShoppingCart />, label: "Process Implement" },
            }).map(([key, { icon, label }]) => (
              <Tab
                key={key}
                active={activeTab === key}
                onClick={() => setActiveTab(key)}
                ref={(el) => (tabRefs.current[key] = el)}
              >
                <TabContent>
                  {icon}
                  <span>{label}</span>
                </TabContent>
              </Tab>
            ))}

            <Underline ref={underlineRef} />
          </Tabs>
        </div>
      </Content>
    </Section>
  );
}
