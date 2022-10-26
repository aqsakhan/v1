import React from 'react';
import { BiPaperPlane } from 'react-icons/bi';
import { Container, IconHolder, Title, Text, Email } from './ContactStyles';
import { SectionDivider, Section } from '../../styles/GlobalComponents';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <Section nopadding id='contact'>
        <SectionDivider style={{marginTop:'20px'}}/>
        <Container>
            <IconHolder>
                <Fade top>
                    <BiPaperPlane />
                </Fade>
            </IconHolder>
            <Title>Get In Touch</Title>
            <Text>
                I'm currently looking for opportunities as a developer.
                <br />
                <br />
                In the meantime,
                Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
            </Text>
            <Fade bottom>
                <Email href='mailto:aqsakhan5573@gmail.com'>Say Hi</Email>
            </Fade>
        </Container>
    </Section>
  )
}

export default Contact;