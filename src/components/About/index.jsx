import React from 'react'
import { Container } from 'react-bootstrap';
import '../About/index.css'

const About = () => {
    return (
        <div>
            <Container fluid className='cont-main w-lg-50 p-sm-5'>
                <h1>About me</h1>
                <p className='aboutme'>Saya adalah seorang junior fullstack web developer. Saya belajar mengenai teknologi MERN selama 5 bulan di Eduwork.id. Saya memiliki 1 project website POS dengan menerapkan React JS untuk frontend, redux untuk state management, Node JS dan Express JS untuk backend serta MongoDB sebagai database.</p>
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
