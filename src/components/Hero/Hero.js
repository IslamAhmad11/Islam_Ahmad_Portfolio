import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello i'm Islam Ahmad <br/>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a Frontend Developer
        i'm devloping projects with atractive way
        so any project that need, if you want to learn more
        just click the button below
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;