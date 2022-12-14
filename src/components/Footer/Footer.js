import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import GitHub from '../images/icons8-github.svg';
import Twitter from '../images/icons8-twitter.svg';
import LinkedIn from '../images/icons8-linkedin.svg';
import Mail from '../images/icons8-mail.svg';
import { SocialsLinks } from '../Socials/SocialsStyles';
import { Copyright, FooterWrapper, LinkList } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <SocialsLinks href="https://github.com/aqsakhan" target="_blank"><img src={GitHub} alt="github" /></SocialsLinks>
        <SocialsLinks href="https://twitter.com/aqsa_khan32" target="_blank"><img src={Twitter} alt="twitter" /></SocialsLinks>
        <SocialsLinks href="https://www.linkedin.com/in/aqsa-khan-12b4751a2/" target="_blank"><img src={LinkedIn} alt="linkedin" /></SocialsLinks>
        <SocialsLinks href="mailto:aqsakhan5573@gmail.com" target="_blank"><img src={Mail} alt="mail" /></SocialsLinks>
      </LinkList>

      <Copyright> <BiCopyright/> Aqsa Khan🌼 2022</Copyright>
    </FooterWrapper>
  );
};

export default Footer;