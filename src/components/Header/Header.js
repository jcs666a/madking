import React from 'react';
import { Link } from "react-router-dom";
import './header.css'

function Header() {
    return(
        <header>
            <nav className="container">
                <Link to='/' className="nav-logo"></Link>
            </nav>
        </header>
    );
}

export default Header;
