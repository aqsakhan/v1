import styled from 'styled-components';

export const TechContainer = styled.div`
  max-width: 90%;
  margin-left: 2rem;
  padding: 2rem;
  border: 1px solid yellow;

`;


export const List = styled.ul`
  list-style-type: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid yellow;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.md}{
    max-width: 203px;
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.sm}{
    max-width: 320px;
  }
`


export const SubList = styled.ul`
  list-style-type: none;
  text-align: center;
  display: flex;
  gap: 40px;
  margin: 3rem 0;

  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 5px;
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    margin: 32px 0;
  }
`

export const SubListItem = styled.li`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${props => props.theme.breakpoints.md}{
    max-width: 203px;
    font-size: 12px;
    svg {
      transform: scale(0.7);
    }
  }

  @media ${props => props.theme.breakpoints.sm}{
    max-width: 320px;
    font-size: 11px;
    svg {
      transform: scale(0.5);
    }
  }
`