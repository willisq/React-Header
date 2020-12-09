import React from 'react';

const Logo = ({src, href}) => (
  <a className = "logo" href = {href}>
    <img src = {src} className = "logo"></img>
  </a> 
);
export default Logo;