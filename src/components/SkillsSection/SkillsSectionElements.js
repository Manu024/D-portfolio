import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: #000;
  color: #fff;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SkillsHeading = styled.h1`
  color: #01bf71;
  font-size: 2rem;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const SkillsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 360px) {
    width: 90%;
  }
`;

export const SkillsItemLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 12px;
  text-transform: capitalize;
`;

export const SkillsItemContainer = styled.div`
  padding: 24px 0;
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const SkillsBarWrapper = styled.div`
  text-align: right;
  margin-top: 12px;
  width: 100%;
  background: grey;
  border-radius: 20px;
`;

export const SkillsBar = styled.div`
  width: ${({score}) => (score && score)}%;
  background: rgb(1, 191, 113);
  background: linear-gradient(
    126deg,
    rgba(1, 191, 113, 1) 9%,
    rgba(39, 134, 95, 1) 92%
  );
  border-radius: 20px;
  animation: smooth 1s ease-out 1s;

  @keyframes smooth {
    from {
      width: 10%;
    }
    to {
      width: ${({score}) => (score && score)}%;
    }
  }
`;

