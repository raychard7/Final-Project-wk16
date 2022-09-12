import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import pikachu from './img/pikachu.jpg'
import Image from "react-bootstrap/Image"
function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let audio = new Audio("../assets/Pokemon-Theme-Song.mp3")
  
  const start = () => {
    audio.play()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        WOAH!! 
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>A WILD PIKACHU APPEARED!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Pikachu Used ThunderBolt!
          
        <Image src={pikachu} />
        </Offcanvas.Body>
        
      </Offcanvas>
    </>
  );
}


export default SideBar
// render(<Example />);