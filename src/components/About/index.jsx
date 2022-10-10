import React from 'react'
import { Container } from 'react-bootstrap';
import '../About/index.css'

const About = () => {
    return (
        <div>
            <Container className='container_main'>
                <h1 className='title'>About me</h1>
                <p className='aboutme'>
                    <strong>
                        Saya adalah seorang junior fullstack web developer. Saya belajar mengenai teknologi MERN selama 5 bulan di Eduwork.id. Saya memiliki 1 project website POS dengan menerapkan React JS untuk frontend, redux untuk state management, Node JS dan Express JS untuk backend serta MongoDB sebagai database.
                    </strong>
                </p>
                <div className="cta">
                    <a href='#about' download className="btn btn-more">
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
