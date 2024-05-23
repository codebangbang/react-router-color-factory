import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "./Colors.css";


function Colors({ colors }) {
    return (
        <div>
            <h1>Pick a color, or add a new favorite</h1>
            <div className="colors" >
            <Link to="/colors/new">Add a color</Link>
            <ul>
                {colors.map((color) => (
                    <li key={color.name}>
                        <Link to={`/colors/${color.name}`}>{color.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );}
    
export default Colors;