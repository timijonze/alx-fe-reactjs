import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
        <ul style={{color: 'blue', backgroundColor: 'ButtonShadow', display: 'flex', justifyContent: 'center', gap:'40px'}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
    );
};

export default Navbar;