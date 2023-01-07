import React from 'react';
import { Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap';

function Zodiac({zodiac}) {
  var imageName = require('../images/burclar/'+zodiac.image)

    return (
        <>
    <Card class="" style={{ width: '18rem' ,margin: '10px'}}> 
      <Card.Img variant="top" src={imageName} />
      <Card.Body>
        <Card.Title>{zodiac.title}</Card.Title>
        <Card.Text>
        {zodiac.spacing}
        </Card.Text>
        <Button variant="white text-white" style={{ backgroundColor: '#303956' }}  href={zodiac.name}>Burcu Seç</Button>
      </Card.Body>
    </Card>
        </>
    )
}

export default Zodiac;