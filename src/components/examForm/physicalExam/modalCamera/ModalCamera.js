import { useState, useEffect, useRef, useCallback } from "react";

import Webcam from "react-webcam";

const videoConstraints = {
  width: "33.75rem",
  facingMode: "environment",
};

function ModalCamera() {
  const camRef = useRef(null);
  const [url, setUrl] = useState(null);
  const capturePhoto = useCallback(async () => {
    const imageSrc = camRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [camRef]);

  return (
    <>
      <Webcam
        ref={camRef}
        audio={false}
        screenshotFormat="image/png"
        videoConstraints={videoConstraints}
        mirrored={false}
      />
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button>
      {url && (
        <div>
          <img src={url} alt="screenshot" />
        </div>
      )}
    </>
  );
}

export default ModalCamera;
