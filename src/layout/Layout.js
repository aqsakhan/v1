import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Socials from '../components/Socials/Socials';
import { Container } from './LayoutStyles';


export const Layout = ({children}) => {
  return (
    <>
      <Socials/>
      <Container>
        <Header/>
        <main>{children}</main> 
        <Footer/>
      </Container>
    </>
  )
}
