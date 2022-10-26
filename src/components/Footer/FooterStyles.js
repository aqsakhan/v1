import styled from "styled-components"

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 800px;
  margin: 1rem auto;
  box-sizing: content-box;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`



export const LinkList = styled.ul`
	border-top: 1.5px solid rgba(252, 225, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

	// grid-template-columns: repeat(3, minmax(85px, 220px));
	// gap: 40px;
  padding: 20px;
  text-align: center;

	a {
		display: none;
	}

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;

	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;

		  a {
			display: flex;
			margin: 0 1.2rem;
		}
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;

		  a {
			margin: 0 1.2rem;
		}
	}
`


export const Copyright = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	color: rgba(255, 255, 255, 0.5);
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;
	margin: 2rem 0;

	svg {
		margin: 0 0.3rem;
	}
`;