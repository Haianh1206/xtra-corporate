import { useEffect, useRef, useState } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaTwitch,
} from "react-icons/fa";

import MIKE from "../../assets/Mike.png";
import JACK from "../../assets/Jack.png";
import ELISABETH from "../../assets/Elisabeth.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import {
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
} from "./OurTeamSection.styles";

const teamMembers = [
  {
    name: "Mike King Man",
    role: "Co founder, Manager",
    image: MIKE,
    socials: [
      { icon: <FaFacebookF />, className: "facebook", label: "Facebook" },
      { icon: <FaTwitter />, className: "twitter", label: "Twitter" },
    ],
  },
  {
    name: "Jack McCalister",
    role: "Web Developer",
    image: JACK,
    socials: [
      { icon: <FaTwitch />, className: "twitch", label: "Twitch" },
      { icon: <FaTwitter />, className: "twitter", label: "Twitter" },
      { icon: <FaInstagram />, className: "instagram", label: "Instagram" },
    ],
  },
  {
    name: "Elisabeth Green",
    role: "Senior Designer",
    image: ELISABETH,
    socials: [
      { icon: <FaDribbble />, className: "dribbble", label: "Dribbble" },
      { icon: <FaTwitter />, className: "twitter", label: "Twitter" },
    ],
  },
];

export default function OurTeamSection() {
  const [visible, setVisible] = useState(false);
  const logoRef = useRef(null);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLogoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // chỉ chạy 1 lần
        }
      },
      { threshold: 0.4 }
    );

    if (logoRef.current) observer.observe(logoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Container>
        <InfoBlock>
          <Subtitle>COMPANY EXECUTIVES</Subtitle>
          <Title>
            <span>MEET</span>
            <span>OUR TEAM</span>
          </Title>
        </InfoBlock>

        <Grid>
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <Socials>
                {member.socials.map((social, idx) => (
                  <span key={idx} className={social.className}>
                    {social.icon}
                    <span className="tooltip">{social.label}</span>
                  </span>
                ))}
              </Socials>

              <Avatar src={member.image} alt={member.name} />
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
            </Card>
          ))}
        </Grid>
      </Container>
      <LogoSection ref={logoRef}>
        {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, i) => (
          <Logo
            key={i}
            src={logo}
            alt={`Logo ${i + 1}`}
            $visible={logoVisible}
            $delay={i * 0.2} // từng logo delay 0.2s từ trái qua phải
          />
        ))}
      </LogoSection>
    </>
  );
}
