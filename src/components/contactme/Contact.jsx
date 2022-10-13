import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_irxo33c', 'template_nrs1bmd', form.current, 'lNjmYjDv7fGUbJZB6').then(
      (result) => {
        alert('Pesan terkirim');
        console.log(result.text);
      },
      (error) => {
        alert('Pesan tidak terkirim');
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact_form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Masukkan Nama" required />
          <input type="email" name="email" placeholder="Masukkan email" required />
          <textarea name="message" rows="7" placeholder="Masukkan pesan" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section >
  );
};

export default Contactme;
