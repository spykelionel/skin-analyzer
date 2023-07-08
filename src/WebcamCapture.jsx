import React from "react";
import Webcam from "react-webcam";

// const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
  // facingMode: { exact: "environment" }
};

const WebcamCapture = () => {
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);
  const [image, setImage] = React.useState(null);

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log(imageSrc);
    console.log(image);
  }, [webcamRef]);
  return (
    <div style={{textAlign: "center"}}>
      <Webcam
        audio={false}
        height={500}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={500}
        videoConstraints={videoConstraints}
      />
      <div>
        <button onClick={capture}>Capture photo</button>
        {image ? <img src={image} /> : ""}
        <button onClick={() => setImage(null)}>Delete</button>
      </div>
    </div>
  );
};
export default WebcamCapture;
