import React from 'react'
import { Button, Card } from 'react-bootstrap'
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
                        </div>
                        <Button variant="light" size="lg" className='w-auto m-auto'><BsGithub /></Button>
                    </Card>
                )
            })}
        </div>
    )
}

export default Cards
