import React from 'react'
import { Container } from 'react-bootstrap'
import Cards from './Cards';

const Experiens = () => {
    return (
        <div>
            <Container id="portfolio">
                <h1 style={{ marginBottom: '30px', fontSize: '30px' }} className='title'>Project</h1>
                <Cards />
            </Container>
        </div>
    )
}

export default Experiens
