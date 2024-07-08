import{Row, Col, Nav, Navbar, Form, FormControl, Button, Dropdown, Container} from "react-bootstrap";
import NewsList from "./components/NewsList";
import { useState } from "react";



function App(){
  const [category,setCategory] = useState("");
  const [searchTerm,setSearchTerm] = useState("");

  const handleCategoryClick = (category) =>{
   setCategory(category);
   setSearchTerm("");
  };

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
                <Dropdown.Item onClick={() => handleCategoryClick("world")}>word</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryClick("business")}>Business</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryClick("technology")}>Technology</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryClick("sport")}>Sports</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryClick("Entertainment")}>Entertainment</Dropdown.Item>
                
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
      <NewsList category={category} searchTerm={searchTerm}/>
      </Col>
    </Row>
   </Container>
   </>
  );
}
export default App