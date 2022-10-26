import styled from 'styled-components';

export const Logo = styled.img`
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${props => props.theme.colors.primary1};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // display: grid;
  // grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: 1fr;
  // grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  // @media ${(props) => props.theme.breakpoints.md} {
  //   display: grid;
  //   grid-template-columns: repeat(5, 1fr);
  //   grid-template-rows: repeat(2, 60px);
  //   grid-column-gap: 0.5rem;
  //   grid-row-gap: 0.5rem;
  // }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled.div`
  display: none;
  color: ${props => props.theme.colors.primary2};

  &:hover {
    cursor: pointer;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    margin-right: 15px; 

    // border: 2px solid yellow;
    // padding: 10px;
    z-index: 20;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    dispaly: flex;
  }
`;

export const List = styled.ul`
  // grid-area: 1 / 2 / 2 / 4;
  display: flex;

  @media ${(props) => props.theme.breakpoints.md} {
    background-color: ${props => props.theme.colors.background1};
    gap: 40px;
    transform: ${ ({ open }) => open ? 'translateX(0)' : 'translateX(100%)'}; 
    transition: transform 0.3s ease-in-out; 
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    z-index: 15;
  }
  
`;

export const ListItem = styled.li`
  padding-top: 0.4rem;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    width: 100%;
    color: ${props => props.theme.colors.primary1};

    &:hover {
      background-color: ${props => props.theme.colors.background2};
      transition: 0.2s ease;
    }
  }
`;


// Navigation Links

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  transition: 0.4s ease;
  color: ${props => props.theme.colors.primary1};

  &:hover {
    color: ${props => props.theme.colors.primary2};
    opacity: 1;
    cursor: pointer;
    text-decoration-line: underline;
    text-decoration-style: wavy;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
    // padding: 0.5rem 0;
    width: 100%;

    &:hover {
    text-decoration-line: none;
  }
  }
`;

export const ResumeBtn = styled.a`
  border: 1.5px solid ${ props => props.theme.colors.links };
  border-radius: 5px;
  text-align: center;
  padding: 1rem 2.5rem;
  background: none;
  font-size: 1.9rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${props => props.theme.colors.backgroundhover1};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1rem 2.5rem;
    // width: 120px;
  }
`;
