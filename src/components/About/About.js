import React from 'react';
import { AboutContent, AboutText, LeftSection, RightSection } from './AboutStyles';
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <Section nopadding id="about" >
        <SectionDivider />
        <SectionTitle main>
            About Me
        </SectionTitle>
        <AboutContent>
        <Fade left big cascade>
            <LeftSection>
                <AboutText>
                    Hey! My name is Aqsa and I'm a web developer with a passion for front-end development and design. I'm a fourth-year student at <i>Technocrats Institute of Technology</i> pursuing a degree in <i>Computer Science</i>. I aspire to a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.
                    <br />
                    <br />
                    When I'm not on the computer, I enjoy playing the guitar, scrolling social media and catching-up with friends and family.
                </AboutText>
            </LeftSection>
        </Fade>
        <Fade right big cascade>
            <RightSection>
                <img src="/images/my-img.jpg" alt="aqsakhan"/>
            </RightSection>
        </Fade>
        </AboutContent>
    </Section>
  )
}

export default About