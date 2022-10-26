import React, { useState } from 'react';
import { Content, VerticalLine, SocialsLinks } from './SocialsStyles';
import Alert from '../Alert/Alert';

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
        <SocialsLinks href="https://github.com/aqsakhan" target="_blank"><img src="/images/icons8-github.svg" alt="github" /></SocialsLinks>
        <SocialsLinks href="https://twitter.com/aqsa_khan32" target="_blank"><img src="/images/icons8-twitter.svg" alt="twitter" /></SocialsLinks>
        <SocialsLinks href="https://www.linkedin.com/in/aqsa-khan-12b4751a2/" target="_blank"><img src="/images/icons8-linkedin.svg" alt="linkedin" /></SocialsLinks>
        <SocialsLinks href="mailto:aqsakhan5573@gmail.com" target="_blank"><img src="/images/icons8-mail.svg" alt="mail" /></SocialsLinks>
        <SocialsLinks onClick={copydiscordUsername} target="_blank"><img src="/images/icons8-discord.svg" alt="discord" /></SocialsLinks> 
        <VerticalLine />
      {showAlert && <Alert message="You copied my discord user name!"></Alert>}
    </Content>
  )
}

export default Socials;