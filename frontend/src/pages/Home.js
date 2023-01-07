import React from 'react';
import Zodiac from '../components/Zodiac';
import zodiacs from '../zodiacs.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Home(){
    return(
        <>
        <Container>
        <Row>
        {zodiacs.map(zodiac=>(
            <Col>
              <CardGroup>
            <Zodiac zodiac={zodiac} />
            </CardGroup>
            </Col>
        ))}
       </Row>
        </Container>
        </>
    );
}