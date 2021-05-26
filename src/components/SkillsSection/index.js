import React from "react";
import {
  SkillsContainer,
  SkillsHeading,
  SkillsBar,
  SkillsItemContainer,
  SkillsWrapper,
  SkillsBarWrapper,
  SkillsItemLabel,
} from "./SkillsSectionElements";
import { skills as list } from "./Data";

const SkillsSection = () => {
  const skills = list.map((skill) => {
    return (
      <SkillsItemContainer key={skill.name} data-aos="fade-right">
        <SkillsItemLabel>{skill.name}</SkillsItemLabel>
        <SkillsBarWrapper>
          <SkillsBar score={ skill.score }>{skill.score}%</SkillsBar>
        </SkillsBarWrapper>
      </SkillsItemContainer>
    );
  });
  return (
    <SkillsContainer id='skills'>
      <SkillsHeading>My Skills</SkillsHeading>
      <SkillsWrapper>
        { skills }
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
