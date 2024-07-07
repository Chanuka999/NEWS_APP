import{Row, Col, Navbar, Form, FormControl, Button, Dropdown, Container} from "react-bootstrap";



function App(){
  return(
   <>
   <Navbar bg="light" expand="lg" className="mb-4">
    <Container>
      <Navbar.Brand href="/" className="fw-bold fs-4">
        News APP
      </Navbar.Brand>
    </Container>
   </Navbar>
   </>
  )
}
export default App