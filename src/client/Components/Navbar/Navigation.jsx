import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import imageLogo from "../../assets/New-logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to={'/'}><img src={imageLogo} className="nav-brand" alt="Symphony Logo" /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to={'explore/'}>Explore</Link>
              <Link to={'stored/'}>Stored</Link>
              <Link to={'breaking/'}>Breaking</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}



