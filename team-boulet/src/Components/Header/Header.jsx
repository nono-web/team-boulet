import React from "react";
import logo from '../../Assets/logo-manomano.jpg';
import './Header.css';

const Header = () => {
  return (
  <div className="h-fond">
    <div >
      <img className="m-img" src={logo} alt="ManoMano" />
    </div>
  </div>
  );
};

export default Header;
