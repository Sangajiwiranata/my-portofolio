import React from 'react'
import { Container } from 'react-bootstrap';
import '../About/index.css'
import AOS from 'aos';
import CV from '../images/Sangaji_CV.pdf'
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
    return (
        <div>
            <Container className='container_main' data-aos="fade-down" data-aos-duration="1500" id='about'>
                <h5>Get To Know</h5>
                <h1 className='title'>About me</h1>
                <p className='aboutme'>
                    <strong>
                        I'm a junior Fullstack Web Developer, I learn about technology MERN 5 month a go in Eduwork.id. I have a project Website Point Of Sales with React.Js for Front-end, Redux for state management, NodeJs and ExpressJs for Back-end also MongoDB like Database.
                    </strong>
                    {/* <strong>
                        Saya adalah seorang junior fullstack web developer. Saya belajar mengenai teknologi MERN selama 5 bulan di Eduwork.id. Saya memiliki 1 project website POS dengan menerapkan React JS untuk frontend, redux untuk state management, Node JS dan Express JS untuk backend serta MongoDB sebagai database.
                    </strong> */}
                </p>
                <div className="cta">
                    <a href={CV} download className="btn btn-more">
                        Download CV
                    </a>
                    <a href="#contact" className="btn btn-primary btn-more">
                        Let's Talk
                    </a>
                </div>
            </Container>
        </div>
    )
}

export default About
