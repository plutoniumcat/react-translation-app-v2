import React from "react";

export default function Recordoutput({outputText}) {
  return (
    <textarea
      name="translated-text"
      cols="30"
      rows="10"
      value={outputText} // Bind the value of the textarea to the outputText prop
      readOnly // Make the textarea read-only
    ></textarea>
  );
}
