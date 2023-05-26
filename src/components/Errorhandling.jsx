import React from "react";

export default function Errorhandlinglang({ error, clearError }) {
  let errorMessage = "An error occurred.";

  if (error.includes("Input text language does not match")) {
    errorMessage = "Unable to translate. Please check input text or language selected.";
  }

  // Clear the error state when the error message is displayed for 5 seconds
  setTimeout(() => {
    clearError();
  }, 5000);

  return (
    <div className="error-message">
      <p>{errorMessage}</p>
    </div>
  );
}
