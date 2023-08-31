import "./LabPicIcon.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";

import { formatNamePicFile } from "../../../../../utility/formatString";

function LabPicIcon({ labFile, openPic, deletePic }) {
  return (
    <div className="lab-pic-item">
      <button className="lab-pic-xmark" onClick={() => deletePic(labFile)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <FontAwesomeIcon
        className="lab-pic-icon"
        icon={faFile}
        onClick={() => {
          openPic(labFile);
          console.log(labFile);
        }}
      />

      <small>{formatNamePicFile(labFile.name)}</small>
    </div>
  );
}

export default LabPicIcon;
