import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ImgPicItem.css";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";
import { formatNamePicFile } from "../../../../../utility/formatString";

function ImgPicItem({ imgFile, openPic, deletePic }) {
  return (
    <div className="img-pic-item">
      <button className="img-pic-xmark" onClick={() => deletePic(imgFile)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <FontAwesomeIcon
        className="img-pic-icon"
        icon={faFile}
        onClick={() => openPic(imgFile)}
      />
      <small>{formatNamePicFile(imgFile.name)}</small>
    </div>
  );
}
export default ImgPicItem;
