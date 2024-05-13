import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function ColorList(color) {
    return (
        <div className="colors" >
            <h1>(ColorList)Pick a color.</h1>

            <Link to="/colors/new">Add a color</Link>
            
            <br />
            <Link to="/colors/red">Red</Link>
            <br />
            <Link to="/colors/green">Green</Link>
            <br />
            <Link to="/colors">Colors</Link>
        </div>
    );
    }

    export default ColorList;