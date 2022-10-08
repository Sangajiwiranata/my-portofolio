import React from 'react';
import { BsLinkedin, BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
import '../Main/index.css'

const HeaderSosmed = () => {
  return (
    <div className="header_sosmed">
      <a href="https://www.linkedin.com/in/sangaji-wiranata-5399541a4/" target="_blank" rel="noreferrer" style={{ color: '#0e76a8' }}>
        <BsLinkedin />
      </a>
      <a href="https://github.com/Sangajiwiranata" target="_blank" rel="noreferrer" style={{ color: 'black' }}>
        <BsGithub />
      </a>
      <a href="https://web.facebook.com/profile.php?id=100041175006510" target="_blank" rel="noreferrer" style={{ color: '#4267B2' }}>
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/_ajiwiranata/" target="_blank" rel="noreferrer" className='logo-instagram'>
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSosmed;
