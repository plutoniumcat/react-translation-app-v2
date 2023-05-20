// Recordinput:keeps the translator app updated in real-time as the user types or modifies the input string

import React from "react";

export default function Recordinput({ input, setInput }) {
    const handleInputChange = (event) => {
        setInput(event.target.value); // Update the parent's input state
        console.log("Input text:", event.target.value); //Test input 
    };

    return (
        <textarea
            name="source-text"
            cols="30"
            rows="10"
            value={input}
            onChange={handleInputChange}
        ></textarea>
    );
}
