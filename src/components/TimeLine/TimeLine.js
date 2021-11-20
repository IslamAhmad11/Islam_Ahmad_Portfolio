import React from 'react';
import { AboutContainer, MyPhoto } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  
  return (
    <Section id="about">
      <SectionDivider /> <br/>
      <SectionTitle>About Me</SectionTitle>
      <AboutContainer>
        <SectionText>
        I'm passionate about all things about
        Frontend role, I work hard, I care about writing clean
        code and I genuinely love to learn, I'm currently looking
        for the right opportunity to work in an
        environment that will help me progress into a Frontend
        role.

        </SectionText>
        <MyPhoto id="photo" src="images/myphoto.webp"/>
      </AboutContainer>
    </Section>
  );
};

export default Timeline;