import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
/**<Form>
                    <FormGroup switch>
                        <Input type="switch" role="switch" onChange={() => { setIsDarkModeOn(!isDarkModeOn); }} />
                        <Label check>Dark mode</Label>
                    </FormGroup>
               </Form> */
const context = [
    "/weatherforecast",
    "/tarot",
];
const NavMenu = () => {
    const [isDarkModeOn, setIsDarkModeOn] = useState(false);
    return (
      <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 fixed-top" container light>
                <NavbarBrand className="brand" tag={Link} to="/">Simple Tarot App</NavbarBrand>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/tarot-reading">Tarot</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/reading-history">History</NavLink>
                        </NavItem>
            </ul>
               
                
        </Navbar>
      </header>
    );
}

export default NavMenu;
