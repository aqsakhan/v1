import styled from 'styled-components';

export const Button = styled.a`
  border: 1.5px solid ${ props => props.theme.colors.links };
  border-radius: 5px;
  padding: 1rem 2.5rem;
  background: none;
  font-size: 2rem;
  // cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  // &:hover {
  //   background-color: ${props => props.theme.colors.backgroundhover1};
  // }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.6rem 1.4rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.6rem 1.4rem;
    font-size: 1.5rem;
  }
`;