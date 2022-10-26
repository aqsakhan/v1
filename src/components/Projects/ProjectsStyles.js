import styled from 'styled-components';

export const ImgHolder = styled.div`
  width: 100%;
  // height: 50%;
`

export const Img = styled.img`
  width: 350px;
  border-radius: 10px;
  object-fit: cover;
  overflow: hidden;
  opacity: 0.7;
  transition: 0.2s;
  margin-left: 40px;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 0;
    margin-bottom: 20px;

    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    opacity: 1;
    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`

export const GridContainer = styled.section`
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;

@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  // box-shadow: 3px 3px 10px rgba(100, 255, 218, 0.3);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    flex-direction: column;
  }
`;

export const ProjectDetails = styled.div`
  width: 530px;
  box-shadow: 3px 3px 10px rgba(100, 255, 218, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.05);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 350px;
    margin-bottom: 20px;
  }
`;

export const TitleContent = styled.div`
  width: 100%;
  padding: 5px 8px;
  text-align: center;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;

  color: ${(props) => props.theme.colors.links};
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '2rem' : '1rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #FFE3D8;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
// border: 1px solid yellow;
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-size: 1.5rem;
  font-style: 1rem;
  line-height: 20px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 1.4rem;
    text-align: center;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0.5rem 0;
`;

export const ExternalLinks = styled.a`
font-size: 0.1rem;
padding: 0 1.5rem;
transition: 0.3s;

&:hover{
  transform: scale(1.1);
}

`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: ${(props) => props.theme.colors.links};
font-size: 1.5rem;
`