import React from 'react';
import './footer.css';
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="footer_sosmed">
        <a href="https://www.linkedin.com/in/sangaji-wiranata-5399541a4/" target="_blank" rel="noreferrer" >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Sangajiwiranata" target="_blank" rel="noreferrer" >
          <BsGithub />
        </a>
        <a href="https://web.facebook.com/profile.php?id=100041175006510" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/_ajiwiranata/" target="_blank" rel="noreferrer" className='logo-instagram'>
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Sangaji Wiranata Portfolio</small>
      </div>
    </footer>
  );
};

export default Footer;
