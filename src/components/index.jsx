import React from 'react'
import About from './About'
import Contact from './Contact'
import Experiens from './Experiens'
import Footer from './Footer'
import Main from './Main'
import Nav from './nav/Nav'
// import { Navbar } from 'react-bootstrap'
// import Navigations from './Navbar'

const Homes = () => {
    return (
        <div>
            <Main />
            <Nav />
            <About />
            <Experiens />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homes
