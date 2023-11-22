import { useState, useRef, useCallback } from "react";

import "./ModalCamera.css";

import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { convertBase64 } from "../../../../../utility/convertBase64";

const videoConstraints = {
  height: 480,
  width: 720,
  facingMode: "environment",
};

function ModalCamera({ updateListPic, closeCam, photoName }) {
  const camRef = useRef(null);
  const [url, setUrl] = useState(null);
  const capturePhoto = useCallback(async () => {
    const imageSrc = camRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [camRef]);

  return url ? (
    <div className="pe-screenImg">
      <div>
        <img src={url} alt="screenshot" />
      </div>
      <div className="pe-screenImg-action">
        <button
          onClick={() => {
            // updateListPic(new FormData().append("File", url));
            // setUrl("");
            // closeCam();
            convertBase64(url, photoName)
              .then((res) => updateListPic(res))
              .then(() => closeCam());
          }}>
          Save
        </button>
        <button onClick={() => setUrl("")}>Cancel</button>
      </div>
    </div>
  ) : (
    <>
      <div className="pe-webcam">
        <Webcam
          ref={camRef}
          audio={false}
          screenshotFormat="image/png"
          videoConstraints={videoConstraints}
          mirrored={false}
        />
        <button className="pe-cam-xmark" onClick={closeCam}>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
          {"Back"}
        </button>
      </div>
      <div className="pe-cam-button">
        <button onClick={capturePhoto}>Capture</button>
      </div>
    </>
  );
}

export default ModalCamera;
