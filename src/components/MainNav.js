import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import Home from './Home';
import { Link } from 'react-router-dom';


const MainNav = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="info" dark >
                <Link onClick={toggleNavbar} to="/" className="mr-auto navbar-brand" action>My App</Link>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link onClick={toggleNavbar} className="nav-link" to="/all-courses" action>Courses</Link>
                        </NavItem>
                        <NavItem>
                            <Link onClick={toggleNavbar} className="nav-link" to="/" action>Home</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    );
}

export default MainNav;