import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: ${({ showSidebar }) => (showSidebar ? "0" : "-60%")};
  height: 100%;
  width: 60%;
  background: #000;
  color: #fff;
  z-index: 101;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 400px;
    left: ${({ showSidebar }) => (showSidebar ? "0" : "-400px")};
  }
  @media screen and (max-width: 420px) {
    width: 90%;
    left: ${({ showSidebar }) => (showSidebar ? "0" : "-90%")};
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 2.5rem;
  padding: 2px 5px;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.95);
  transition: all 0.2s ease-in-out;
  color: #000;
  &:hover {
    color: #01bf71;
  }
`;
export const Icon = styled(FaTimes)`
  font-size: .8rem;
`;

export const SidebarMenuWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  height: 90%;
  align-items: center;
`;

export const SidebarMenuLinks = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: repeat(4, 80px);
  width: 100%;
  margin-bottom: 36px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
export const SidebarMenuLink = styled(LinkS)`
  cursor: pointer;
  font-size: 1rem;
  padding: 12px 24px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #01bf71;
  }
`;

export const SidebarBtnwrapper = styled.div`
  padding: 16px 44px;
  background: #01bf71;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #fff;
    color: #01bf71;
  }

  @media screen and (max-width: 768px) {
  padding: 12px 32px;
  }
`;

export const SidebarBtn = styled(LinkS)`
  font-size: 1.2rem;
`;

export const Backdrop = styled.div`
   position: fixed;
  display: ${({ showSidebar }) => (showSidebar ? "block" : "none")};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(2px) contrast(0.5);
`;
