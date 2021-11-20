import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding id="hero">
    <LeftSection>
      <SectionText> 
        Hi there, I'm Islam
        <span style= {{color:'rgba(255, 255, 255)'}}>👋</span>
      </SectionText>
      <SectionTitle>
        Fresh Graduate <br/> Front-End Developer
      </SectionTitle>
      <SectionText>
        I'm passionate about all things about
        Frontend role, I work hard, I care about writing clean
        code and I genuinely love to learn.
      </SectionText>
      <Link href="#projects">
        <Button>View my work</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;