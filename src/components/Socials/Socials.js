import React, { useState } from 'react';
import { Content, VerticalLine, SocialsLinks } from './SocialsStyles';
import Alert from '../Alert/Alert';
import GitHub from '../images/icons8-github.svg';
import Twitter from '../images/icons8-twitter.svg';
import LinkedIn from '../images/icons8-linkedin.svg';
import Mail from '../images/icons8-mail.svg';
import Discord from '../images/icons8-discord.svg';

const Socials = () => {
  
  const [showAlert, setShowAlert] = useState(false)

  const copydiscordUsername = () => {
    navigator.clipboard.writeText("ayyysa#9715")
    setShowAlert(true)
    setTimeout(function () {
      setShowAlert(false)
    }, 3000);
  }

  return (
    <Content>
        <SocialsLinks href="https://github.com/aqsakhan" target="_blank"><img src={GitHub} alt="github" /></SocialsLinks>
        <SocialsLinks href="https://twitter.com/aqsa_khan32" target="_blank"><img src={Twitter} alt="twitter" /></SocialsLinks>
        <SocialsLinks href="https://www.linkedin.com/in/aqsa-khan-12b4751a2/" target="_blank"><img src={LinkedIn} alt="linkedin" /></SocialsLinks>
        <SocialsLinks href="mailto:aqsakhan5573@gmail.com" target="_blank"><img src={Mail} alt="mail" /></SocialsLinks>
        <SocialsLinks onClick={copydiscordUsername} target="_blank"><img src={Discord} alt="discord" /></SocialsLinks> 
        <VerticalLine />
      {showAlert && <Alert message="You copied my discord user name!"></Alert>}
    </Content>
  )
}

export default Socials;