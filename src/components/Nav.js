import React from 'react';
import '../assets/css/Nav.css';

const Nav = props => {
  return (
    <div className="nav">
      <h1>{props.navMenu}</h1>
    </div>
  );
};

export default Nav;