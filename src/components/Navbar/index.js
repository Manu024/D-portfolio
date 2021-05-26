import React, {useState, useEffect} from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Container,
  Wrapper,
  LogoWrap,
  Logo,
  LinksWrapper,
  LinkItem,
  BtnWrapper,
  Btn,
  MobileIcon,
  Icon,
} from "./NavbarElements";
import logo from '../../images/NEW LOGO1.jpg';

const Navbar = ({ toggleSidebar }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Container scrollNav={scrollNav}>
      <Wrapper>
        <LogoWrap>
          <Logo src={logo} onClick={toggleHome}/>
        </LogoWrap>
        <MobileIcon onClick={toggleSidebar}>
          <Icon />
        </MobileIcon>
        <LinksWrapper>
          <LinkItem
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >
            About
          </LinkItem>
          <LinkItem
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >
            Skills
          </LinkItem>
          <LinkItem
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >
            Projects
          </LinkItem>
          <LinkItem
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >
            Contact
          </LinkItem>
        </LinksWrapper>
        <BtnWrapper>
          <Btn
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >
            Hire Me
          </Btn>
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
