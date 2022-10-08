import React from 'react'
import { Container } from 'react-bootstrap'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import '../Footer/index.css'

const Footer = () => {
    return (
        <div>
            <Container fluid style={{ backgroundColor: 'black' }}>
                {/* <a href="#" className="footer_logo">
                    Dini Anjelina
                </a> */}

                <div className="footer_sosmed">
                    <a href="https://github.com/dinianjelina" target="_blank" rel="noreferrer">
                        <BsGithub />
                    </a>
                    <a href="https://www.instagram.com/dinianjelina_/" target="_blank" rel="noreferrer">
                        <BsInstagram />
                    </a>
                    <a href="https://twitter.com/dinianjelina_" target="_blank" rel="noreferrer">
                        <BsTwitter />
                    </a>
                </div>
                <div className="footer_copyright">
                    <small>&copy; Dini Anjelina's Portfolio</small>
                </div>
            </Container>
        </div>
    )
}

export default Footer
