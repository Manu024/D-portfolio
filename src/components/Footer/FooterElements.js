import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 300px;
`;

export const FooterDesignTemplate = styled.p`
  position: absolute;
  white-space: nowrap;
  bottom: 2%;
  left: 15%;
  color: #fff;
  font-size: 1rem;
  transition: all.2s ease-in-out;
  @media screen and (max-width: 768px) {
    left: 7%;
    font-size: .8rem;
    bottom: 10%;
  }
`;

export const FooterName = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

export const FooterSocialIcons = styled.div`
  position: absolute;
  bottom: 2%;
  right: 15%;
  display: flex;
  justify-content: space-between;
  transition: all.2s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 50px;
    left: 4%;
    bottom: 2%;
  }
  
`;

export const IconsLink = styled.a`
  color: #fff;
  font-size: 1rem;
  padding: 12px;
  transition: all .2s ease-in-out;

  &:hover {
    color: rgba(255,255,255, 0.5);
  }

  @media screen and (max-width: 768px) {
    font-size: .8rem;
  }
 
`;
