import {Card, Button} from 'react-bootstrap';

function Trainer() {


  
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Trainer Name no bootstrap</Card.Title>
        <Card.Text>
          Starter Pokemon
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Trainer;

// function BasicExample() {
//     return (
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     );
//   }
  
//   export default BasicExample;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;