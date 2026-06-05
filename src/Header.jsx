import React from 'react';
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <div className='headbox'>
      <div className="logo">
        <img className="my-logo" src={logo} alt="logo" />
    </div>
</div>
    
  )
}

export default Header;