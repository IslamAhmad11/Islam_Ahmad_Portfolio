import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, MyPhoto, Slogan, SocialIconsContainer} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:002-01276-893-515" target="_blank">002-01276-893-515</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:islamahmed1145@gmail.com" target="_blank">islamahmed1145@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Innovating one project at a time</Slogan>
          </CompanyContainer>
          <SocialIcons href="https://github.com/IslamAhmad11" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/islam-ahmad-0692861b4" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://codepen.io/islamahmad11" target="_blank">
            <AiFillCodepenCircle size="3rem" />
          </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
