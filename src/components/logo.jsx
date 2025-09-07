/*import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>Logo</div>
  )
}

export default Logo*/
import React from 'react';
import logoImg from '../assets/logo.png';

function Logo({ width = '100px' }) {
  return (
    <img
      src={logoImg}
      alt="MegaBlog Logo"
      style={{ width }}
      className="object-contain"
    />
  );
}

export default Logo;
