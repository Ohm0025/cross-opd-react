import { useImgHx } from "../../../contexts/ImgHxContext";
import ImgHxBody from "../imgHxBody/ImgHxBody";
import ImgHxFooter from "../imgHxFooter/ImgHxFooter";
import "./ImgHxCenter.css";

function ImgHxCenter() {
  const { selectImg } = useImgHx();
  return (
    <>
      {selectImg ? (
        <div className="ih-page-container">
          <ImgHxBody selectImg={selectImg} />
          <ImgHxFooter />
        </div>
      ) : (
        <h2 className="ih-empty">ไม่มีประวัติการสั่ง Imaging มาก่อน</h2>
      )}
    </>
  );
}

export default ImgHxCenter;
