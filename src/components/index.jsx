import React, { useEffect, useState } from 'react'
import About from './About'
// import Contact from './Contact'
// import Experiens from './Experiens'
// import Footer from './Footer'
import Main from './Main'
import Nav from './nav/Nav'
import Skills from './Skills'
import ReactLoading from 'react-loading';
import { Container } from 'react-bootstrap'
import Experience from './experience/Experience'
import Contactme from './contactme/Contact'
import Footer from './footer/Footer'
// import { Container } from 'react-bootstrap'
// import { Navbar } from 'react-bootstrap'
// import Navigations from './Navbar'



const Homes = () => {
    const [Done, setDone] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setDone(true);
        }, 2000);
    })
    return (
        <div>
            {!Done ?
                (
                    <Container className='d-flex vh-100 justify-content-center align-items-center'>
                        <ReactLoading type={'bars'} color={'black'} height={'5%'} width={'10%'} />
                    </Container>
                )
                :
                (
                    <div>
                        <Main />
                        <Nav />
                        <About />
                        <Skills />
                        <Experience />
                        <Contactme />
                        <Footer />
                    </div>
                )
            }
        </div>
    )
}

export default Homes
