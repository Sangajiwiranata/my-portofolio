import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Main/index.css'
import me from '../images/photo.png'
import Typical from 'react-typical'
import HeaderSosmed from './HeaderSosmed'

const Main = () => {
    return (
        <div>
            <Container fluid className='main-cont'>
                <Row className='p-lg-5'>
                    <Col>
                        <div className="me">
                            <div className="me-image">
                                <img src={me} alt="dinianjelina" />
                            </div>
                        </div>
                    </Col>
                    <Col className='col-main'>
                        <h1>Sangaji Wiranata</h1>
                        <h2>
                            <Typical loop={Infinity} steps={['Fullstack Web Developer', 2000, 'MERN Stack Dev', 2000, 'Junior Web Developer', 2000]} />
                        </h2>
                        <HeaderSosmed />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main
