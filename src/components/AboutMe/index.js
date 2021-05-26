import React from "react";
import {
  AboutContainer,
  AboutDescription,
  AboutHeading,
} from "./AboutMeElements";

const AboutMe = () => {
  return (
    <AboutContainer
      id="about"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <AboutHeading>About Me</AboutHeading>
      <AboutDescription>
        Creative graphic designer with innovative ideas and a unique approach to
        visuals. More than two+ years of experience developing designs for
        print media, online websites, video, and advertising. Solid
        understanding of marketing principles and advertising techniques. Great
        attention to detail and a talent for creating memorable visual designs.
        Enthusiastic team player who is committed to delivering top results on
        time and within the budget. Passion for keeping clients satisfied with
        each project.
      </AboutDescription>
    </AboutContainer>
  );
};

export default AboutMe;
