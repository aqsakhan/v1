import styled from 'styled-components';

export const AboutContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @media ${props => props.theme.breakpoints.md} {
      justify-content: center;
    }
`;

export const AboutText = styled.p`
  font-size: 2.2rem;
  line-height: 4.5rem;
  width: 100%;
  font-weight: 400;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.6);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const LeftSection = styled.div`
  width: 600px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;


export const RightSection = styled.div`
  position: relative;
  margin: 4rem;
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    border: 2px solid ${props => props.theme.colors.links };
    transition: all .25s ease-out;
  }
  &::before {
    background-color: ${props => props.theme.colors.links };
    top: -20px;
    left: -20px;
  }
  &::after {
    bottom: -20px;
    right: -20px;
  }
  &:hover {
    &::before {
      top: 20px;
      left: 20px;
    }
    &::after {
      bottom: 20px;
      right: 20px;
    }
  }

  img {
    height: 350px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    margin: 2rem;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 2rem;
    display: flex;
    flex-direction: column;

    margin: 20px auto;

    img {
      height: 200px;
    }
    
  }
`;