import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #fff;
  height: 600px;
  width: 100%;
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-rows: 600px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: 400px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: flex-end;
  }
`;

export const HeroImgWrap = styled.div`
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1/ 1;
    width: 100%;
    height: 100%;
  }
`;

export const HeroImg = styled.img`
  max-width: 100%;
  height: inherit;
  @media screen and (max-width: 768px) {
  }
`;

export const HeroTextWrap = styled.div`
  padding: 0 0 64px 24px;
  color: #fff;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    grid-column: 2 / 2;
    grid-row: 1/ 2;
    background: transparent;
  }
  @media screen and (max-width: 550px) {
    grid-column: 1 / 3;
    grid-row: 1/ 2;
    background: transparent;
    display: flex;
    flex-direction: column;
    padding: 6px 12px;
  }
`;

export const HeroName = styled.p`
  color: #01bf71;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const HeroHeading = styled.h1`
  font-size: 2rem;
  transition: all 0.2s ease-in-out;
  color: #000;
  font-weight: bolder;

  .rotate {
    color: #01bf71;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.3rem;
  }
`;

export const HeroDescription = styled.p`
  color: gray;
  font-size: small;
  @media screen and (max-width: 420px) {
    color: #000;
  }
`;

export const HeroBtn = styled.a`
  padding: 8px 16px;
  width: 100px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  background: #01bf71;
  border: 2px solid transparent;
  color: #000;
  cursor: pointer;
  &:hover {
    border: 2px solid #01bf71;
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    width: 80px;
  }
  @media screen and (max-width: 420px) {
    padding: 6px 12px;
  }

  @media screen and (max-width: 550px) {
    background: #01bf71;
    border: 2px solid #01bf71;
    color: #fff;
    &:hover {
      background: transparent;
    }
  }
`;
