import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Image } from 'react-bootstrap'
import LinktoGithub from './GitHubImg.jpeg'

function GitHubCard() {
    return(
        <div>
            <Card style={{ width: '100%' }}>
                <Image variant="top" src={LinktoGithub} className="text-center" alt="link-to-github" />
                <Card.Body>
                    <Card.Title>Hansel's Github account</Card.Title>
                        <Card.Text>
                             Card element using react bootstrap.
                            Link to Github is below
                        </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>link to my Github account</ListGroup.Item>
                    <ListGroup.Item> Github</ListGroup.Item>
                    <ListGroup.Item>Thanks for visiting my page!</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://github.com/hq_coder">Link to GitHub</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard