import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3, FaNpm } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiFirebase, SiGit, SiGooglechrome, SiReact, SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiBootstrap, SiNodedotjs, SiVisualstudio } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, SubList, SubListItem } from './SkillsStyles';
import { Button } from '../../styles/GlobalComponents/ButtonStyles';
import Fade from 'react-reveal/Fade';

const Skills = () =>  (
  <Section nopadding id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      What do I bring to the table
    </SectionText>
    
    <ListContainer>
      <List>
        <ListItem>
          <Fade top big cascade>
            <Button style={{marginRight: '2rem'}}>Languages</Button>
              <SubList>
                <SubListItem>
                  <FaJava size='6rem' style={{marginBottom:'1rem'}}/>
                  Java
                </SubListItem>
                <SubListItem>
                  <FaPython size='6rem'  style={{marginBottom:'1rem'}}/>
                  Python
                </SubListItem>
                <SubListItem>
                  <IoLogoJavascript size='6rem' style={{marginBottom:'1rem'}} />
                  Javascript
                </SubListItem>
                <SubListItem>
                  <FaHtml5 size='6rem' style={{marginBottom:'1rem'}} />
                  HTML
                </SubListItem>
                <SubListItem>
                  <FaCss3 size='6rem' style={{marginBottom:'1rem'}} />
                  CSS
                </SubListItem>
              </SubList>
          </Fade>
        </ListItem>
        <ListItem>
          <Fade top big cascade>
            <Button style={{marginRight: '2rem'}}>Frameworks and Libraries</Button>
            <SubList>
                <SubListItem>
                  <SiReact size='6rem' style={{marginBottom:'1rem'}}/>
                  React
                </SubListItem>
                <SubListItem>
                  <SiNextdotjs size='6rem' style={{marginBottom:'1rem'}}/>
                  NextJs
                </SubListItem>
                <SubListItem>
                  <SiNodedotjs size='6rem' style={{marginBottom:'1rem'}} />
                  NodeJs
                </SubListItem>
                <SubListItem>
                  <SiTailwindcss size='6rem' style={{marginBottom:'1rem'}} />
                  TailwindCSS
                </SubListItem>
                <SubListItem>
                  <SiStyledcomponents size='6rem' style={{marginBottom:'1rem'}} />
                  Styled Components
                </SubListItem>
                <SubListItem>
                  <SiBootstrap size='6rem' style={{marginBottom:'1rem'}} />
                  Bootstrap
                </SubListItem>
              </SubList>
          </Fade>
        </ListItem>
        <ListItem>
          <Fade top big cascade>
            <Button style={{marginRight: '2rem'}}>Tools</Button>
            <SubList>
                <SubListItem>
                  <SiVisualstudio size='6rem' style={{marginBottom:'1rem'}}/>
                  VS Code
                </SubListItem>
                <SubListItem>
                  <SiFirebase size='6rem'  style={{marginBottom:'1rem'}}/>
                  Firebase
                </SubListItem>
                <SubListItem>
                  <SiGit size='6rem' style={{marginBottom:'1rem'}} />
                  Git
                </SubListItem>
                <SubListItem>
                  <SiGooglechrome size='6rem' style={{marginBottom:'1rem'}} />
                  Chrome 
                </SubListItem>
                <SubListItem>
                  <FaNpm size='6rem' style={{marginBottom:'1rem'}} />
                  NPM
                </SubListItem>
              </SubList>
          </Fade>
        </ListItem>
      </List>
    </ListContainer>
  </Section>
);

export default Skills;