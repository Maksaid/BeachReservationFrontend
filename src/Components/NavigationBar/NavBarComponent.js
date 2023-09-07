import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {Navbar, Container, Nav, Offcanvas, Dropdown, ButtonGroup, DropdownButton} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import IconArrowLeft from "./Icons/IconArrowLeft";
import IconArrowRight from "./Icons/IconArrowRight";
import IconUmbrellaBeach from "./Icons/IconUmbrellaBeach";

const NavBarComponent = ({
                             isLoggedIn,
                             handleLoginClick,
                             handleSignupClick,
                             handleLogoutClick,
                             toggleBeachBar,
                             isBeachBarToggled
                         }) => {
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    return (
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary"  fixed="top" expand="md" >
            <Container fluid="md" style={{flexShrink: 2, display: "flex", justifyContent: "start"}}>
                <Navbar.Brand>
                    <Button className="m-1" style={{justifySelf: "left"}} variant="light" size="lg"
                            onClick={toggleBeachBar}>
                        {
                            isBeachBarToggled ?
                                <IconArrowLeft/>
                                :
                                <IconArrowRight/>
                        }
                    </Button>
                </Navbar.Brand>

                <Link to="/" style={{textDecoration: 'none'}}>
                    <Navbar.Brand className="m-1 ms-4 btn-lg">
                        <IconUmbrellaBeach className="m-1 float-start" variant="primary" size="lg"/>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle className="ml-auto m-1 justify-content-end" aria-controls="basic-navbar-nav" onChange={()=>setOffcanvasOpen(true)}/>
            </Container>

            <Container fluid={"md"} className="justify-content-end">
                <div className="d-flex justify-content-end align-items-center">
                    <Navbar.Offcanvas id="basic-navbar-nav" aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                                      placement="end" >
                        <Offcanvas.Header closeButton onClick={() => setOffcanvasOpen(false)}>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                {offcanvasOpen}
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="ml-auto"> {/* ml-auto to move items to the right */}
                                {isLoggedIn && (
                                <Button variant="light" className="m-1" size="lg">
                                    <Link to="/create" style={{textDecoration: 'none'}}>
                                        Create Beach
                                    </Link>
                                </Button>
                                )}

                                {!isLoggedIn && (
                                    <>
                                        <Button variant="light" size="lg" className="m-1" onClick={handleSignupClick}>Sign
                                            up</Button>{' '}
                                        <Button variant="light" size="lg" className="m-1" onClick={handleLoginClick}>Log
                                            in</Button>{' '}
                                    </>
                                )}
                                {isLoggedIn && (
                                    <>
                                        <Button variant="danger" size="lg" className="m-1" onClick={handleLogoutClick}>Log
                                            out
                                        </Button>
                                    </>
                                )}
                                {isLoggedIn && (
                                    <DropdownButton title="Menu" size="lg" className="m-1" as={ButtonGroup}>
                                        <Button variant="light" size="lg" className="m-1" >
                                            <Link to={"/profile"} style={{textDecoration: 'none'}}>
                                                My Profile
                                            </Link>
                                        </Button>
                                        <Button variant="light" className="m-1" size="lg">
                                            <Link to="/create" style={{textDecoration: 'none'}}>
                                                Create Beach
                                            </Link>
                                        </Button>
                                        <Button variant="danger" size="lg" className="m-1" onClick={handleLogoutClick}>Log
                                            out
                                        </Button>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </DropdownButton>
                                )}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>
            </Container>
        </Navbar>
    );

};

export default NavBarComponent;