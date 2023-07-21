import React, { useState } from "react";
import "../styles/LandingPage.css";
import usePrediction from "../hooks/usePrediction";
// import useDisease from "../hooks/useDisease";
import DiseaseInfoPage from "./DiseaseInfoPage";
import WebcamCapture from "../WebcamCapture";

const LandingPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [endpoint] = React.useState("http://127.0.0.1:8000/predict")
  const [id, predictions, diseaseInfo, isLoading, error] = usePrediction(selectedFile, endpoint);
  const handleFileSelect = (event) => {
    event.preventDefault()
    setSelectedFile(event.target.files[0]);
    console.log("Landingpage",diseaseInfo,)
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
  };

  const clearData = (e) => {
    setSelectedFile(null)
    
  }

  return (
    <div className="landing-page">
      <h1 className="heading-primary">Skin Disease Detection System</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="image-upload" className="text-primary">
          Upload an image of your skin condition
        </label>
        <div className="upload-component">
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
          />
        </div>
        <div>
          {/* <WebcamCapture /> */}
        </div>
        <div>
          {predictions ? (
            <div className="prediction">
              <h2 className="">Prediction details</h2>
              <p>
                <p className="prediction-detail">Infection: <span>{predictions.infection.name}</span></p> 
              </p>
              <p>
                <p className="prediction-detail">Confidence Level: <span>{predictions.confidence}%</span></p> 
              </p>
            </div>
          ) : error ? (
            <>
              <p>{error.name}</p>
            </>
          ) : (
            <>
              <p>No files selected</p>
            </>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        {diseaseInfo? (
          <div>
            <h1>About Infection</h1>
            <DiseaseInfoPage disease={diseaseInfo} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
