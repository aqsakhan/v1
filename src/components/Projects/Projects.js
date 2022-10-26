import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, ProjectDetails, HeaderThree, Tag, TagList, TitleContent, UtilityList, Img, ImgHolder } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Fade from 'react-reveal/Fade';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main style={{paddingTop:'1.5rem'}}>Projects</SectionTitle>
    <SectionText>
      Some things I've built
    </SectionText>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Fade bottom big cascade>
              <ImgHolder>
                <Img src={p.image} />
              </ImgHolder>
              <ProjectDetails>
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                </TitleContent>
                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={p.source} target="_blank"><img style={{transform: 'scale(0.6)'}} src="/images/icons8-github.svg" alt="github" /></ExternalLinks>
                  <ExternalLinks href={p.visit} target="_blank"><img style={{transform: 'scale(0.7)'}} src="/images/icons8-linking.png" alt="visit" /></ExternalLinks>
                </UtilityList>
              </ProjectDetails>
            </Fade>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;