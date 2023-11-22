import "./ImgHxBodyItem.css";

function ImgHxBodyItem({ imgName, imgDes }) {
  return (
    <div className="imgHx-body-item">
      <h5>{imgName}</h5>
      <p>
        <span> Detail : {imgDes}</span>
      </p>
    </div>
  );
}

export default ImgHxBodyItem;
