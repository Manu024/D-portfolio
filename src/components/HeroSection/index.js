import React from "react";
import bgImg from "../../images/portfolio11.jpg";
import {
  HeroContainer,
  HeroDescription,
  HeroHeading,
  HeroImg,
  HeroImgWrap,
  HeroName,
  HeroTextWrap,
  HeroWrapper,
  HeroBtn,
} from "./HeroSectionElements";
import ReactRotatingText from "react-rotating-text";
import resume from '../../images/resume.jpg';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroImgWrap>
          <HeroImg src={bgImg} />
        </HeroImgWrap>
        <HeroTextWrap className="animate__animated animate__fadeIn animate__delay-.5s">
          <HeroName>Durai Shanmugavel</HeroName>
          <HeroHeading>
            I'm a{" "}
            <ReactRotatingText
              items={["Vfx Designer.", "Freelancer.", "Publicity Designer."]}
              color="01bf71"
              pause={500}
              cursor={false}
              emptyPause={500}
              typingInterval={100}
              className="rotate"
            />
          </HeroHeading>
          <HeroDescription>
          Creative graphic designer with innovative ideas and a unique approach to
          visuals.
          </HeroDescription>
          <HeroBtn href={ resume } download="DuraiShanmugavel CV">Download CV</HeroBtn>
        </HeroTextWrap>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
