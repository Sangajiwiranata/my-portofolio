import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Main/index.css'
import me from '../images/photo.png'
import TypeWriterEffect from 'react-typewriter-effect';
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
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'Red Hat Display',
                                    color: '#3F3D56',
                                    fontWeight: 500,
                                    fontSize: '1em',
                                }}
                                loop={true}
                                startDelay={0}
                                cursorColor="#3F3D56"
                                multiText={[
                                    'Fullstack Web Developer',
                                    'MERN Stack Dev',
                                    'Junior Web Developer'
                                ]}
                                multiTextDelay={1500}
                                typeSpeed={30}
                                multiTextLoop
                            />
                        </h2>
                        <HeaderSosmed />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main
