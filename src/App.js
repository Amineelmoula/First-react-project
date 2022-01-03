import './App.css';
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import {Form} from "react-bootstrap" ;







function App() {
  return (
    <div className="App">


      <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Music Studio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">See More</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Create an account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Badge className="badge" pill bg="primary">
        Jazz
      </Badge>{' '}
      <Badge pill bg="secondary">
        Metal
      </Badge>{' '}
      <Badge pill bg="success">
        Hip-hop
      </Badge>{' '}
      <Badge pill bg="danger">
        K-pop
      </Badge>{' '}
      <Badge pill bg="warning" text="dark">
        Rap
      </Badge>{' '}
      <Badge pill bg="info">
        Rhythm & blues (R&B)
      </Badge>{' '}
      <Badge pill bg="light" text="dark">

        BollywoodC-pop
      </Badge>{' '}
      <Badge pill bg="dark">
        Techno
      </Badge>


      <Card>
        <Card.Header className='card' as="h1">Music for everyone</Card.Header>
        <Card.Body>

          <Card.Text>
            Music for Everyone has something for you. <br />
            We are a welcoming, vibrant, supportive community creating positive musical experiences for people of all ages and abilities.
          </Card.Text>
          <Button className='button' variant="primary">DOWNLOAD NOW</Button>
        </Card.Body>
      </Card>

     
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I'm not a robot" />
  </Form.Group>
  <Button   variant="primary" type="submit">
    Login
  </Button>
</Form>

</div>



    
  );
}


export default App;