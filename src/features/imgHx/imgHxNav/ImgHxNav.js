import { useEffect, useState } from "react";
import { useImgHx } from "../../../contexts/ImgHxContext";
import "./ImgHxNav.css";
import { formatCreatedAt } from "../../../utility/formatDataTime";

function ImgHxNav() {
  const { listImg, changeSelectedImg } = useImgHx();
  const [selectedItemId, setSelectedItemId] = useState(listImg[0]?.id);

  useEffect(() => {
    const lastItem = listImg[0];
    setSelectedItemId(lastItem?.id);
  }, [listImg]);

  return (
    <div className="ih-navBar">
      {listImg?.map((item, index) => {
        return (
          <div
            role="button"
            className={`ih-nav-item ${
              selectedItemId === item?.id ? "ih-nav-selected" : ""
            }`}
            key={"ih-navbar" + index}
            onClick={() => {
              setSelectedItemId(item?.id);
              changeSelectedImg(item?.id);
            }}>
            {formatCreatedAt(item.updatedAt)}
          </div>
        );
      })}
    </div>
  );
}

export default ImgHxNav;
