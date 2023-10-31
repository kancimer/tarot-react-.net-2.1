import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const context = [
    "/weatherforecast",
    "/tarot",
];
const NavMenu = () => {
    
    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 fixed-top-lg" container light>
                <NavbarBrand className="brand" tag={Link} to="/">Simple Tarot App</NavbarBrand>
                <ul className="navbar-nav flex-grow">
                   
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/">Tarot</NavLink>
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