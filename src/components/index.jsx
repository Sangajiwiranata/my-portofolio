import React, { useEffect, useState } from 'react';
import About from './About';
import Experiens from './Experiens';
import Main from './Main';
import Nav from './nav/Nav';
import Skills from './Skills';
import ReactLoading from 'react-loading';
import { Container } from 'react-bootstrap';
import Contactme from './contactme/Contact';
import Footer from './footer/Footer';


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
                        <Experiens />
                        <Contactme />
                        <Footer />
                    </div>
                )
            }
        </div>
    )
}

export default Homes
