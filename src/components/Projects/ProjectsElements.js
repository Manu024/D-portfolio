import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: auto;
  background: #fff;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
`;

export const ProjectHeading = styled.h1`
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 100%;
  height: auto;

  .slider {
    background: rgba(255, 255, 255, 0.7);
    padding: 24px 0;
    border-radius: 12px;
  }
  .slick-arrow {
    border-radius: 100%;
    background: #000;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const ProjectTitle = styled.h2`
  color: #01bf71;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;

export const ProjectImgWrap = styled.div`
  outline: none;
  border: none;
  object-fit: contain;
  max-width: 200px;
  min-width: 150px;
  padding: 12px;
`;
export const ProjectImg = styled.img`
  max-width: 100%;
  border-radius: 16px;
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;
