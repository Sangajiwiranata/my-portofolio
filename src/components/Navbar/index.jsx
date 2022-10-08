import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { faHome, faImage, faMessage, faProjectDiagram, faPerson } from "@fortawesome/free-solid-svg-icons";
import '../Navbar/index.css'

const Navigations = () => {
    return (
        <div className='nav'>
            <Navbar collapseOnSelect bg="dark" variant="dark" fixed='bottom' className='m-auto mb-4 navigasi'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Home</Tooltip>}>
                                <Nav.Link className='ms-3 text' href="#deets"><FontAwesomeIcon icon={faHome} /></Nav.Link>
                            </OverlayTrigger>

                            <Nav.Link className='text ms-3' href="#deets"><FontAwesomeIcon icon={faPerson} /></Nav.Link>
                            <Nav.Link className='text ms-3' href="#deets"><FontAwesomeIcon icon={faImage} /></Nav.Link>
                            <Nav.Link className='text ms-3' href="#deets"><FontAwesomeIcon icon={faProjectDiagram} /></Nav.Link>
                            <Nav.Link className='text ms-3 me-3' href="#deets"><FontAwesomeIcon icon={faMessage} /></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigations
