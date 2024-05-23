import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import "./ColorDetail.css";

// ColorDetail is a component that displays a single color. It takes in a list of colors and the color name from the URL. If the color name is not found in the list of colors, it redirects the user to the color list page. If the color is found, it displays the color name and a message.
function ColorDetail({ colors }) {
  const { color } = useParams();
  const foundColor = colors.find(c => c.name === color);

  if (!foundColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div className="color" style={{ backgroundColor: foundColor.value }}>
      <h1>{foundColor.name}</h1>
      <p>{foundColor.name} is one of my favorite colors!</p>
      <p>
        <Link to="/colors">Go back to the color list</Link>
      </p>
    </div>
  );
}

export default ColorDetail;