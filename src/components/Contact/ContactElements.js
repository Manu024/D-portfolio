import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #000;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 600px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeading = styled.h1`
  font-size: 2rem;
  color: #01bf71;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
`;

export const FormLabel = styled.label`
  padding: 16px 0;
  font-size: 0.8rem;
`;

export const FormInput = styled.input`
  padding: 16px 0;
  width: 90%;
  border-radius: 8px;
  color: #01bf71;
  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  font-size: 0.8rem;

  @media screen and (max-width: 768px) {
    padding: 12px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 6px 0;
  }
`;

export const FormBtnWrapper = styled.div`
  padding: 24px 0;
`;

export const FormBtn = styled.button`
  padding: 12px 48px;
  border: 2px solid #01bf71;
  background: #000;
  color: #01bf71;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #01bf71;
    color: #000;
  }
  &:disabled {
    background: transparent;
    color: #01bf71;
    cursor: not-allowed;
  }
  @media screen and (max-width: 768px) {
    padding: 8px 32px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const InfoHeading = styled.h1`
  font-size: 1.4rem;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ImgWrap = styled.div`
  width: 300px;
  border-radius: 30px;
  position: relative;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;
export const Img = styled.img`
  max-width: 100%;
  border-radius: 30px;
  filter: brightness(0.2);
`;

export const Content = styled.div`
  position: absolute;
  bottom: 25%;
  left: 10%;
`;

export const Label = styled.label`
  text-transform: uppercase;
  color: #01bf71;
  font-size: 1rem;
`;

export const Text = styled.p`
  font-size: 0.8rem;
`;
