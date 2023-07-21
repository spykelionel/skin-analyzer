import { Camera } from "@material-ui/icons";
import React from "react";
import Webcam from "react-webcam";
import "./styles/WebCapture.css";
import usePrediction from "./hooks/usePrediction";

// const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 100,
  height: 100,
  facingMode: "user",
  // facingMode: { exact: "environment" }
};

const WebcamCapture = () => {
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);
  const [image, setImage] = React.useState(null);
  const [camera, setCamera] = React.useState(false);
  const [endpoint] = React.useState("http://127.0.0.1:8000/d/base")
  const [id, predictions, diseaseInfo, isLoading, error] = usePrediction(image, endpoint);

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      // call enumerateDevices here
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    } else {
      // handle unsupported browser here
    }
  }, [handleDevices]);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setCamera(false);
    // console.log(imageSrc);
  }, [webcamRef]);
  const useCamera = () => {
    setCamera(true);
    setImage(null);
  };

  return (
    <div style={{ textAlign: "inherit" }}>
      {camera ? (
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
      ) : (
        <div className="camera-input">
          <Camera onClick={useCamera} fontSize="large" htmlColor="#ff69b4" />
          <button onClick={useCamera} className="btn btn-primary">
            Use Camera
          </button>
        </div>
      )}
      <div>
        {image ? <img src={image} /> : ""}
        {camera ? (
          <div>
            <button onClick={capture}>Capture photo</button>
          </div>
        ) : (
          ""
        )}
        {image ? <button onClick={() => setImage(null)}>Delete</button> : ""}
      </div>
      {
        predictions?
        (
          <div className="prediction">
        <h2 className="">Prediction details</h2>
        <p>
          <p className="prediction-detail">
            Infection: <span>{predictions.infection.name}</span>
          </p>
        </p>
        <p>
          <p className="prediction-detail">
            Confidence Level: <span>{predictions.confidence}%</span>
          </p>
        </p>
      </div>
        ): <>Use camera</>
      }
    </div>
  );
};

export default WebcamCapture;
