import React from 'react'
import { Container } from 'react-bootstrap'
import Cards from './Cards'

const Experiens = () => {
    return (
        <div>
            <Container id='experiens'>
                <h1 style={{ marginBottom: '30px', fontSize: '40px' }} className='title'>Experiens</h1>
                <Cards />
            </Container>
        </div>
    )
}

export default Experiens
