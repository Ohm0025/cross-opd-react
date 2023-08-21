import "./PePicIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";
import { formatNamePicFile } from "../../../../../utility/formatString";

function PePicIcon({ peFile, openPic, deletePic }) {
  return (
    <div className="lab-pic-item">
      <button className="lab-pic-xmark" onClick={() => deletePic(peFile)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <FontAwesomeIcon
        className="lab-pic-icon"
        icon={faFile}
        onClick={() => openPic(peFile)}
      />

      <small>{formatNamePicFile(peFile?.name)}</small>
    </div>
  );
}

export default PePicIcon;
