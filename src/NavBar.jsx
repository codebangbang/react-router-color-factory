import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

// NavBar is a functional component that renders a navigation bar with links to the home page and the colors page.
function NavBar() {
    return (
        <nav>
            <div>
                <h1>
                    Welcome to the color factory.
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