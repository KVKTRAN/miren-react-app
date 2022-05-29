import React, {useState} from 'react';
// import axios from "axios";
import {Container, Card, Col, Row, Popover, OverlayTrigger, Nav, Modal, Button} from 'react-bootstrap'

import {top} from "./data"
import gucciImage from "../assets/sky.png"
import styles from "../css/top.module.css"

// const URL = "http://localhost:8000/"

function Top(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = props.data
  const image = props.image

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{data.name}</Popover.Header>
      <Popover.Body>
        <p>{data.description}</p>
        <p>Prize: ${data.prize} CAD</p>
        <p>Category: {data.category.name}</p>
      </Popover.Body>
    </Popover>
  );

  const TopCard = () => (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>Description: {data.description}</p>
          <p>Pattern: {data.pattern}</p>
          <p>Size: {data.size}</p>
          <p>Prize: ${data.prize}</p>
          <p>Category: {data.category.name}</p>
          <p>Brand: {data.brand.name}</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <OverlayTrigger trigger={["hover", "click"]} placement="right" overlay={popover}>
        <Nav.Link style={{color: "#736766", padding: 0, width: 261}} onClick={handleShow}>
        <Card className={styles.card} >
          <Card.Img variant="top" src={image} style={{width: 260, height: 325}}/>
          <Card.Body style={{height: 70}}>
            <Card.Title style={{fontSize: 17}}>{data.name}</Card.Title>
          </Card.Body>
        </Card>
        </Nav.Link>
      </OverlayTrigger>
    </div>
  );

  return (
    <TopCard />
  )
}

function TopList(props) {
  const tops = props.tops
  
  const topItems = tops.map((item, index) => 
    <Col style={{paddingBottom: 20}} key={index}>
      <Top data={item} image={gucciImage}/>
    </Col>
  )
  
  return (
    <Row md={{cols: 3}}>
      {topItems}
    </Row>
  );
} 

class TopPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isClicked: false,
        data: top,
        text: "",
      }
    }

    render() {
      return (
        <div>
          <Container bg="light" variant="light">
          <h5>This is the Top component</h5>
          <Row md={{cols: 2}}>
              <Col md={9}>
                  <TopList tops={this.state.data}/>
              </Col>
              <Col md={3}></Col>
          </Row>
          </Container>
        </div>
      )
    }
  
}
  
export default TopPage;