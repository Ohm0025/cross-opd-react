import { useCallback, useEffect, useRef, useState } from "react";
import "./Camera.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import Webcam from "react-webcam";
import { convertBase64 } from "../../utility/convertBase64";

function Camera({ onClose, onUsePhoto, photoName }) {
  const webCamRef = useRef(null);
  const containerRef = useRef();

  const [widthCam, setWidthCam] = useState(300);
  const [url, setUrl] = useState(null);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webCamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webCamRef]);

  useEffect(() => {
    setWidthCam((prev) => {
      if (containerRef.current?.offsetWidth < 400) {
        return containerRef.current?.offsetWidth - 10;
      }
      return containerRef.current?.offsetWidth;
    });
  }, [containerRef]);

  return (
    <div className="camera-container" ref={containerRef}>
      {url ? (
        <div className="camera-img">
          <img src={url} alt="capture-pic"></img>
        </div>
      ) : (
        <Webcam
          ref={webCamRef}
          screenshotFormat="image/png"
          videoConstraints={{
            width: widthCam,
            facingMode: "environment",
          }}
          mirrored={true}
          screenshotQuality={0.8}
        />
      )}

      {url ? (
        <div className="camera-action1">
          <button
            className="btn btn-success"
            onClick={() =>
              convertBase64(url, photoName)
                .then((res) => onUsePhoto(res))
                .then(() => onClose())
            }>
            use photo
          </button>
          <button className="btn btn-danger" onClick={() => setUrl(null)}>
            delete
          </button>
        </div>
      ) : (
        <div className="camera-action">
          <button className="btn btn-success" onClick={capturePhoto}>
            capture
          </button>
        </div>
      )}

      <button className="camera-closeButton" onClick={onClose}>
        <small>{"close"}</small>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
    </div>
  );
}

export default Camera;
