import styled from "styled-components"

export const Container = styled.div`
    // border: 2px solid white;
    // background-color: gray;
    margin: 25px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media ${(props) => props.theme.breakpoints.md} {
      margin: 25px 80px;
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    letter-spacing: 0.2rem;
`;

export const IconHolder = styled.div`
    transform: scale(4.5);
    margin: 20px 0;
`;


export const Text = styled.p`
    letter-spacing: 0.04em;
	font-size: 18px;
	line-height: 26px;
    margin-bottom: 45px;
`;

export const Email = styled.a`
  border: 1.5px solid ${ props => props.theme.colors.links };
  border-radius: 5px;\
  text-align: center;
  padding: 1rem 2.5rem;
  background: none;
  font-size: 2.4rem;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${props => props.theme.colors.backgroundhover1};
  }

`;