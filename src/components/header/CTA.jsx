import React from 'react';
// import CV from '../../image/CV DINI ANJELINA.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href="#about" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
