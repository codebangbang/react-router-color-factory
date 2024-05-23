import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddColorForm.css";

// AddColorForm is a functional component that renders a form for adding a new color to the list of colors. It takes a prop addColor, which is a function that adds a new color to the list of colors. The component uses the useState hook to manage the state of the form inputs (name and value). When the form is submitted, the handleSubmit function is called, which prevents the default form submission behavior, calls the addColor function with the new color data, and navigates the user to the /colors route.
function AddColorForm({ addColor }) {
    const [name, setName] = useState("");
    const [value, setValue] = useState("#000000");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ name, value });
        navigate("/colors");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Color name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="value">Color value:</label>
                <input
                    id="value"
                    type="color"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <button type="submit">Add this color</button>
        </form>
    );
}

export default AddColorForm;