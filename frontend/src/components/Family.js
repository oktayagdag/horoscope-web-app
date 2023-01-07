import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const Family = ({ zodiacName }) => {
  return(
    <>
    <div class="mb-5">
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Aşık {zodiacName.title}</strong></Accordion.Header>
        <Accordion.Body>
        {zodiacName.asik}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Anne {zodiacName.title}</strong></Accordion.Header>
        <Accordion.Body>
        {zodiacName.anne}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>Baba {zodiacName.title}</strong></Accordion.Header>
        <Accordion.Body>
        {zodiacName.baba}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><strong>Çocuk {zodiacName.title}</strong></Accordion.Header>
        <Accordion.Body>
        {zodiacName.cocuk}
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
    
    </>
  )
}

export default Family;