import React from 'react';
import {  Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';


const NavMenu = () => {
    
    return (
        <header >
            <Navbar className="navbar-expand-sm navbar-toggleable-sm  border-bottom box-shadow mb-3 fixed-top-lg navStyle" container>
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