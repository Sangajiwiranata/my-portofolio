import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { BsGithub } from 'react-icons/bs'
import { contens } from './cotent'

const Cards = () => {
    return (
        <div>
            {contens.map((item, index) => {
                return (
                    <Card className='m-4 overflow-hidden h-100 ' key={index} >
                        <div className='overflow-hidden rounded'>

                            <Card.Header as="h5">{item.name}</Card.Header>
                            <Card.Body>
                                <Card.Img variant='top' src={item.image} />
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="light"><BsGithub /></Button>
                            </Card.Body>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default Cards
