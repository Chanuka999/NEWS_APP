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
                <Dropdown.Item>Business</Dropdown.Item>
                <Dropdown.Item>Technology</Dropdown.Item>
                <Dropdown.Item>Sports</Dropdown.Item>
                <Dropdown.Item>Entertainment</Dropdown.Item>
                
               </Dropdown.Menu>
             </Dropdown>
        </Nav>

          <Form className="d-flex">
            <FormControl 
            type="text"
             placeholder="search"
              className="me-2" 
              name="search" />

              <Button variant="outline-primary" type="submit">
                search
              </Button>
          </Form>

      </Navbar.Collapse>
    </Container>
   </Navbar>
   <Container>
    <Row>
      <Col xs={12} md={3}>
          <h5>Categories</h5> 
          <Nav className="flex-column">
            <Nav.Link>world</Nav.Link>
            <Nav.Link>Business</Nav.Link>
            <Nav.Link>Tecnologies</Nav.Link>
            <Nav.Link>Sports</Nav.Link>
            <Nav.Link>Entertainment</Nav.Link>
            </Nav>     
      </Col>

      <Col xs={12} md={9}>
      NEWS
      </Col>
    </Row>
   </Container>
   </>
  );
}
export default App