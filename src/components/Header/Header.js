import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { Container, Logo, Div1, Div2, List, ListItem, NavLink, ResumeBtn } from './HeaderStyles';


const Header = () =>  {

  const [open, setOpen] = useState(false);

  function isOpen({open}) {
    if(!open) {
      return <GiHamburgerMenu style={{transform: 'scale(1.9)'}} />
    }

    return <ImCross style={{transform: 'scale(1.6)', zIndex:'1'}}/>
  }


  return (
  <Container>
    <Div1>
      <a href='/' style={{ display: 'flex', alignItems: 'center', color:"$(props) => props.theme.colors.primary2", gap:"15px", fontSize:"20px"}}>
        <Logo src="/images/avatar.png" alt="logo" /> Aqsa Khan
      </a>
    </Div1>
    <Div2 open = {open} onClick={ () => setOpen(!open) }> 
      {isOpen({open})}
    </Div2>
    {/* div 3 */}
    <List open={open}>  
      <ListItem open = {open} onClick={ () => setOpen(!open) }>
        <a href="#about">
          <NavLink>About</NavLink>
        </a>
      </ListItem>
      <ListItem open = {open} onClick={ () => setOpen(!open) }>
        <a href="#skills">
          <NavLink>Skills</NavLink>
        </a>
      </ListItem>
      <ListItem open = {open} onClick={ () => setOpen(!open) }>
        <a href="#projects">
          <NavLink>Projects</NavLink>
        </a>
      </ListItem>
      <ListItem href="#contact" open = {open} onClick={ () => setOpen(!open) }>
        <a href="#contact">
          <NavLink>Contact</NavLink>
        </a>
      </ListItem>
      <ResumeBtn href='https://drive.google.com/file/d/1eim05QmQr_qrO8oZfZkPy3O_xpxZQwJa/view?usp=sharing' target={'_blank'}>Resume</ResumeBtn>
    </List>
    </Container>

) };

export default Header;