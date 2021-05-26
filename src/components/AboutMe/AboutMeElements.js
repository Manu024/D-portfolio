import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 250px;
  padding: 12px 24px;
  text-align: center;
  background: #fff;
  @media screen and (max-width: 320px) {
    padding: 6px 12px;
  }
`;

export const AboutHeading = styled.h1`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const AboutDescription = styled.p`
  line-height: 1.6;
  word-spacing: 1.2;
  font-size: 1rem;
`;
