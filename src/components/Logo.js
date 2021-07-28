import React from 'react';
import nowEatLogo from './../images/nowEAT.png';

const Logo = () => {
  const logoStyles = {
    maxWidth: '550px',
    marginTop: '5vh'
  }
  return (
    <div className='ui centered grid'>
      <img style={logoStyles} src={nowEatLogo} alt="Now Eat Logo" />
    </div>
  )

}

export default Logo;