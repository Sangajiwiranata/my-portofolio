import React from 'react'
import { Card } from 'react-bootstrap'
import { BsGithub } from 'react-icons/bs'
import { contens } from './cotent'
import '../Cards/index.css'

const Cards = () => {
    return (
        <div>
            {contens.map((item, index) => {
                return (
                    <Card className='m-4 overflow-hidden h-100 card-container' key={index} >
                        <div className='overflow-hidden rounded'>

                            <Card.Header as="h3">{item.name}</Card.Header>
                            <Card.Body>
                                <Card.Img className='imge' variant='top' src={item.image} />
                            </Card.Body>
                            <a href={item.github} target="_blank" rel="noreferrer" style={{ color: 'black', fontSize: '24px' }}>
                                <BsGithub />
                            </a>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default Cards
