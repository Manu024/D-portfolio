import styled from "styled-components";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link as LinkS } from "react-scroll";

export const Container = styled.nav`
  position: fixed;
  height: 60px;
  width: 100%;
  background: #000;
  top: 0;
  font-size: 1rem;
  z-index: 99;
  display: flex;
  justify-content: center;
  transition: all 0.8s ease;

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LogoWrap = styled.div`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  object-fit: contain;
  width: 80px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const MobileIcon = styled.div`
  display: none;
  align-items: center;
  color: #fff;
  padding: 12px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Icon = styled(HiOutlineMenuAlt3)`
  font-size: 1.5rem;
  &:hover {
    color: #01bf71;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  color: #fff;
  padding: 0 28px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkItem = styled(LinkS)`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 54px;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover,
  &.active {
    border-bottom: 2px solid #01bf71;
    color: #01bf71;
  }
  @media screen and (max-width: 1100px) {
    padding: 0 28px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Btn = styled(LinkS)`
  border: none;
  outline: none;
  white-space: nowrap;
  padding: 8px 20px;
  border-radius: 6px;
  background: #01bf71;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #fff;
    color: #01bf71;
  }
`;
