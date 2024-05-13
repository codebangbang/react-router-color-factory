import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function ColorList() {
    return (
        <nav>
            <h1>(ColorList)Welcome to the color factory.</h1>
        <Link to="/">Home</Link>
        <Link to="/colors">Colors</Link>
        </nav>
    );
    }

    export default ColorList;