import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <h1>(NavBar)Welcome to the color factory.</h1>
        <Link to="/">Home</Link>
        {/* <Link to="/colors">Colors</Link> */}
        </nav>
    );
    }


export default NavBar;