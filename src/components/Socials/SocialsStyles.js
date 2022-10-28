import styled from 'styled-components';

export const Content = styled.div`
    width: 60px;
    position: fixed;
    bottom: 0;
    margin: 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${props => props.theme.breakpoints.md} {
        display: none;
    }

    @media ${props => props.theme.breakpoints.sm} {
        display: none;
    }
`;

export const VerticalLine = styled.div`
    border-left: 4px solid ${props => props.theme.colors.links};
    border-radius: 20px;
    height: 100px;
    margin-top: 2rem;
`;

export const SocialsLinks = styled.a`
    margin-top: 1rem;
    border: none;
    img {
        height: 4rem;
    }
    img:hover {
        transform: scale(1.2);
        transition: .3s all ease;
        // box-shadow: 0 0 15px #64FFDA;
    }
`;