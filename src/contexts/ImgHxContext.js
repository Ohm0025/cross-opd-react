import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as imgHxService from "../api/imgHxApi";

const ImgHxContext = createContext();

function ImgHxContextProvider({ children }) {
  const [listImg, setListImg] = useState([]);
  const [selectImg, setSelectImg] = useState(null);
  const { encodeParams } = useParams();

  const decodeParams = encodeParams && decodeURIComponent(encodeParams);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const res = await imgHxService.fetchAllImg(decodeParams);
        setListImg(res.data?.allPastImg);
        setSelectImg(res.data?.allPastImg[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImg();
  }, [decodeParams]);

  const changeSelectedImg = async (imgId) => {
    try {
      setSelectImg((prev) => {
        return listImg.find((item) => item.id === imgId);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ImgHxContext.Provider value={{ listImg, selectImg, changeSelectedImg }}>
      {children}
    </ImgHxContext.Provider>
  );
}

export const useImgHx = () => {
  return useContext(ImgHxContext);
};

export default ImgHxContextProvider;
