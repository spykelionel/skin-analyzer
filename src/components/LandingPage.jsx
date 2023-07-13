import React, { useState } from "react";
import "../styles/LandingPage.css";
import usePrediction from "../hooks/usePrediction";

const LandingPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictions, isLoading, error] = usePrediction(selectedFile);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="landing-page">
      <h1 className="heading-primary">Skin Disease Detection System</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="image-upload" className="text-primary">
          Upload an image of your skin condition:
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
        />
        <p>
          Infection: {predictions.infection.name} - Confidence: {predictions.confidence}%
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
