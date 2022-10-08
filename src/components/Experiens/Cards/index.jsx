import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { BsGithub } from 'react-icons/bs'
import { contens } from './cotent'

const Cards = () => {
    return (
        <div>
            {contens.map((item, index) => {
                return (
                    <Card className='m-4' key={index}>
                        <Card.Header as="h5">{item.name}</Card.Header>
                        <Card.Body>
                            <Card.Img variant='top' src={item.image} />
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="light"><BsGithub /></Button>
                        </Card.Body>
                    </Card>

                )
            })}
        </div>
    )
}

export default Cards
