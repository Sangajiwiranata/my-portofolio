import React from 'react';
import './nav.css';
// import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdLibraryBooks } from 'react-icons/md';
import { MdOutlineMessage } from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experiens" onClick={() => setActiveNav('#experiens')} className={activeNav === '#experiens' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <MdLibraryBooks />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
