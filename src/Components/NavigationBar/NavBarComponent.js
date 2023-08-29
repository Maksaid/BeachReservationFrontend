import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {Navbar, Container, Nav, NavDropdown, Dropdown, ButtonGroup, DropdownButton} from "react-bootstrap";
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

    return (
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary" fixed="top">
            <Container fluid="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div style={{display: "flex", justifyContent: "left", flexGrow: 1}}>
                            <Button className="m-1" style={{justifySelf: "left"}} variant="light" size="lg"
                                    onClick={toggleBeachBar}>
                                {
                                    isBeachBarToggled ?
                                        <IconArrowLeft/>
                                        :
                                        <IconArrowRight/>
                                }
                            </Button>
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <Navbar.Brand className="m-1 ms-4 btn-lg">
                                    <IconUmbrellaBeach className="m-1" variant="primary" size="lg"/>
                                </Navbar.Brand>
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Container fluid="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link to="/create" style={{textDecoration: 'none'}}>
                            <Button variant="light" className="m-1" size="lg">
                                Create Beach
                            </Button>
                        </Link>
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
                                    out</Button>
                            </>
                        )}
                        {isLoggedIn && (
                        <DropdownButton
                            className="pb-0"
                            as={ButtonGroup}
                            variant={"primary".toLowerCase()}
                            title={"Menu"}
                        >
                            <Dropdown.Item eventKey="1">Create Beach</Dropdown.Item>
                            <Dropdown.Item eventKey="2">My beaches</Dropdown.Item>
                            <Dropdown.Item eventKey="3">
                                Active Item
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarComponent;