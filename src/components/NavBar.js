import logo from "../assets/wp-logo-orange.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
    return (
        <>
            <section className="center">
                <nav className="navbar">
                    {['md'].map((expand) => (
                        <Navbar key={expand} expand={expand} className="mb-0 nav__bar">
                            <Container fluid>
                                <Navbar.Brand href="/"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                <Navbar.Offcanvas
                                    id={`offcanvasNavbar-expand-${expand}`}
                                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                    placement="end"
                                >
                                    <Offcanvas.Header closeButton >
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                            <img className="logo" src={logo} alt="wattpad logo" />
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="justify-content-center flex-grow-1 pe-3">
                                            <Nav.Link className='navlink' href="/">Browse</Nav.Link>
                                            <Nav.Link className='navlink' href="/">Writer Opportunities</Nav.Link>
                                            <Nav.Link className='navlink' href="/">Community</Nav.Link>
                                            <input className="searchbar" type="search" placeholder="Search" />
                                            <Nav.Link className='navlink' href="/">Browse</Nav.Link>
                                            <Nav.Link className='navlink' href="/">Log in</Nav.Link>
                                            <NavDropdown
                                                title="English"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                            >
                                                <NavDropdown.Item className='navlink' href="/">English</NavDropdown.Item>

                                            </NavDropdown>
                                        </Nav>

                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    ))}

                </nav>
            </section>
        </>

    );
}

export default NavBar;