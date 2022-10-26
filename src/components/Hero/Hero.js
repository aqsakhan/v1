import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Fade from 'react-reveal/Fade';

const Hero = (props) => (
  <>
    <Section row nopadding>
        <LeftSection>
          <Fade left big cascade>
            <SectionTitle main center>
              Hi There <br />
              I'm Aqsa Khan
            </SectionTitle>
          </Fade>
          <Fade left big cascade>
            <SectionText>
              A design minded aspiring Front-End Software Engineer focused on building beautiful interfaces and experiences.
            </SectionText>
          </Fade>
        </LeftSection>
    </Section>
  </>
);

export default Hero;