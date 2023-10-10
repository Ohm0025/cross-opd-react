import "./ImgHxBodyItem.css";

function ImgHxBodyItem({ imgName, imgDes }) {
  return (
    <div className="imgHx-body-item">
      <h5>{imgName}</h5>
      <span>{imgDes}</span>
    </div>
  );
}

export default ImgHxBodyItem;
