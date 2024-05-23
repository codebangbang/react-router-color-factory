import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";


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