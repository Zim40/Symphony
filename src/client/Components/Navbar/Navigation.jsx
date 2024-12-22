import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import imageLogo from "../../assets/New-logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
<Container>
<Navbar.Brand href="#home"><img src={imageLogo} className="nav-brand" alt="Symphony Logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
    <Nav.Link >Explore</Nav.Link>
    <Nav.Link >Stored</Nav.Link>
      <Nav.Link >Breaking</Nav.Link>
      <Nav.Link eventKey={2}>
        Recent
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    </>
  )
}



