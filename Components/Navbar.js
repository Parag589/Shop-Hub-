"use client"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import { FaBagShopping } from "react-icons/fa6";


function navbar() {
  return (
    <>
    
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
            <button className='logo'>
            <div class="dots">
              <div class="first-dot">■</div>
              <div>■</div>
            </div>
            <div class="dots2">
              <div class="first-dot2">■</div>
              <div>■</div>
            </div>
            
            </button>
            
              </Navbar.Brand>  
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>

              </Offcanvas.Header>
              
              <Offcanvas.Body>
              <Nav className="justify-content-start mr-0 pr-0 p-2">
              <Nav.Link><Link className='custom-hover-color text-decoration-none nav-font logotext' href= "/">shophub</Link></Nav.Link>

              </Nav>


                <Nav className="justify-content-center flex-grow-1 pe-3 p-2 ">
                  <Nav.Link><Link className='custom-hover-color text-decoration-none nav-font' href= "/">Home</Link></Nav.Link>
                  <Nav.Link><Link className='custom-hover-color text-decoration-none nav-font' href= "/Shop">Shop</Link></Nav.Link>
                  <Nav.Link><Link className='custom-hover-color text-decoration-none nav-font' href= "/Blog">Blog</Link></Nav.Link>
                  <Nav.Link><Link className='custom-hover-color text-decoration-none nav-font' href= "/Contact">Contact</Link></Nav.Link>
                  <Nav.Link><Link className='custom-hover-color text-decoration-none nav-font' href= "/Login">Login</Link></Nav.Link>
                  <Nav.Link><Link className='custom-hover-color text-decoration-none nav-font' href= "/Signup">SignUp</Link></Nav.Link>
                  <Nav.Link><Link className='custom-hover-color text-decoration-none nav-font' href= "/Myaccount">My Account</Link></Nav.Link>

                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <button className='cart'><FaBagShopping className='bag-icon'/></button>
                {/* <Button variant="  outline-success">Search</Button> */}

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default navbar;