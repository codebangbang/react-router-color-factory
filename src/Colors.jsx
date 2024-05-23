import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


function Colors({ colors }) {
    return (
        <div className="colors" >
            <h1>(Colors)Pick a color.</h1>

            <Link to="/colors/new">Add a color</Link>
            <ul>
                {colors.map((color) => (
                    <li key={color.name}>
                        <Link to={`/colors/${color.name}`}>{color.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );}
    
export default Colors;