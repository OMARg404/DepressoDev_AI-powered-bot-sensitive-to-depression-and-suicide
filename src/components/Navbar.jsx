import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faChartBar,
    faCommentDots,
    faSignInAlt,
    faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

function NavbarComponent() {
    return (
        <Navbar className="bg-dark navbar-dark full-height-navbar">
            <Nav className="d-flex flex-column justify-content-between align-items-center full-height-navbar-nav w-100">
                <div className="navbar-brand text-white py-4 fs-4">
                    DepressoDev
                </div>

                <div className="w-100 px-3">
                    <Nav.Item>
                        <div className="feature-card p-4 rounded shadow-sm w-100 text-center">
                            <Nav.Link as={Link} to="/" className="link-btn text-white">
                                <FontAwesomeIcon icon={faHome} className="me-2" />
                                Home
                            </Nav.Link>
                        </div>
                    </Nav.Item>

                    <Nav.Item>
                        <div className="feature-card p-4 rounded shadow-sm w-100 text-center">
                            <Nav.Link as={Link} to="/dashboard" className="link-btn text-white">
                                <FontAwesomeIcon icon={faChartBar} className="me-2" />
                                Dashboard
                            </Nav.Link>
                        </div>
                    </Nav.Item>

                    <Nav.Item>
                        <div className="feature-card p-4 rounded shadow-sm w-100 text-center">
                            <Nav.Link as={Link} to="/text-analyzer" className="link-btn text-white">
                                <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                                Analyze Text
                            </Nav.Link>
                        </div>
                    </Nav.Item>

                    <Nav.Item>
                        <div className="feature-card p-4 rounded shadow-sm w-100 text-center">
                            <Nav.Link as={Link} to="/chatbot" className="link-btn text-white">
                                <FontAwesomeIcon icon={faCommentDots} className="me-2" />
                                Chat with Bot
                            </Nav.Link>
                        </div>
                    </Nav.Item>

                    <Nav.Item>
                        <div className="feature-card p-4 rounded shadow-sm w-100 text-center">
                            <Nav.Link as={Link} to="/login" className="link-btn text-white">
                                <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                                Login
                            </Nav.Link>
                        </div>
                    </Nav.Item>
                </div>

                <div className="text-white py-3 small">
                    &copy; {new Date().getFullYear()} DepressoDev
                </div>
            </Nav>
        </Navbar>
    );
}

export default NavbarComponent;
