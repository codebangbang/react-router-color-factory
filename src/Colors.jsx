import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "./Colors.css";

// Colors is a functional component that renders a list of colors. It takes a prop colors, which is an array of color objects. The component maps over the colors array and renders a list of color names as links. When a color name is clicked, the user is navigated to the /colors/:color route, where the ColorDetail component is rendered.
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