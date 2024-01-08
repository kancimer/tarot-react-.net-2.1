import React from 'react';
import {  Navbar, NavbarBrand, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import '../custom.css';
import { motion } from "framer-motion";
//mozda ovdje srediti animaciju za pocetni dior pokret posto je fiksirano gore

const NavMenu = () => {
    
    return (
        
        
        <div></div> );
}

export default NavMenu;

{/* < motion.div
            className="box"
            initial={{ opacity: 0.5, y: 200 }
            }
            animate={{ opacity: 1, y: 65 }}
            transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
        <header >
           
                <h1 className="d-flex justify-content-center" tag={Link} to="/">Simple Tarot App</h1>
                    {/*<ul className="navbar-nav flex-grow">
                   
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/"><h2>Tarot</h2></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/about"><h2>About</h2></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/reading-history"><h2>History</h2></NavLink>
                    </NavItem>
                </ul>
                

            
            </header>
            </motion.div>*/}