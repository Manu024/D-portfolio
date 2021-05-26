import React from "react";
import {
  Backdrop,
  SidebarContainer,
  SidebarBtnwrapper,
  SidebarBtn,
  SidebarMenuLink,
  SidebarMenuWrapper,
  CloseIcon,
  Icon,
  SidebarMenuLinks,
} from "./SidebarElements";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <>
      <SidebarContainer onClick={toggleSidebar} showSidebar={showSidebar}>
        <CloseIcon onClick={toggleSidebar}>
          <Icon onClick={toggleSidebar} />
        </CloseIcon>
        <SidebarMenuWrapper>
          <SidebarMenuLinks>
            <SidebarMenuLink
              onClick={toggleSidebar}
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              About
            </SidebarMenuLink>
            <SidebarMenuLink
              onClick={toggleSidebar}
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Skills
            </SidebarMenuLink>
            <SidebarMenuLink
              onClick={toggleSidebar}
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Projects
            </SidebarMenuLink>
            <SidebarMenuLink
              onClick={toggleSidebar}
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Contact
            </SidebarMenuLink>
          </SidebarMenuLinks>
          <SidebarBtnwrapper>
            <SidebarBtn onClick={toggleSidebar} to="contact">
              Hire Me
            </SidebarBtn>
          </SidebarBtnwrapper>
        </SidebarMenuWrapper>
      </SidebarContainer>
      <Backdrop showSidebar={showSidebar} onClick={toggleSidebar}></Backdrop>
    </>
  );
};

export default Sidebar;
