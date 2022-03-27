import React from "react";
import wave from "../../images/svg (1).png";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterDesignTemplate,
  FooterName,
  FooterSocialIcons,
  IconsLink,
  Img,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <Img src={wave} />
      <FooterDesignTemplate>
        Designed by <FooterName>Manu M</FooterName>
      </FooterDesignTemplate>
      <FooterSocialIcons>
        <IconsLink href="https://m.facebook.com/duraisingam.duraisingam.77" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </IconsLink>
        <IconsLink href="https://mobile.twitter.com/Duraimu78710416?s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </IconsLink>
        <IconsLink href="https://www.linkedin.com/in/durai-shanmugavel-a64249209" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconsLink>
        <IconsLink href="https://instagram.com/_d._u._r._a._i_?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconsLink>
      </FooterSocialIcons>
    </FooterContainer>
  );
};

export default Footer;
