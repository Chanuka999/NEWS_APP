import{Row, Col, Nav, Navbar, Form, FormControl, Button, Dropdown, Container} from "react-bootstrap";



function App(){
  return(
   <>
   <Navbar bg="light" expand="lg" className="mb-4">
    <Container>
      <Navbar.Brand href="/" className="fw-bold fs-4">
        News APP
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
             <Dropdown>
               <Dropdown.Toggle variant="outline-primary">
                Categories
               </Dropdown.Toggle>
               <Dropdown.Menu>
                <Dropdown.Item>word</Dropdown.Item>
                <Dropdown.Item>word</Dropdown.Item>
                <Dropdown.Item>word</Dropdown.Item>
                <Dropdown.Item>word</Dropdown.Item>
                <Dropdown.Item>word</Dropdown.Item>

               </Dropdown.Menu>
             </Dropdown>
        </Nav>



      </Navbar.Collapse>
    </Container>
   </Navbar>
   </>
  );
}
export default App