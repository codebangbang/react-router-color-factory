import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <div>
                <h1>
                    (NavBar)Welcome to the color factory.
                </h1>
            </div>
            <div>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/colors">Colors</Link></button>
            </div>
        </nav>
    );
}


export default NavBar;