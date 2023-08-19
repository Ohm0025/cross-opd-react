import { createContext, useState, useContext } from "react";

const ImagingContext = createContext();

function ImagingContextProvider({ children }) {
  const [listImg, setListImg] = useState([]);

  //ImgObj = {name , status , des , img}
  const createNewImgItem = (input) => {
    const newImgObj = {
      name: input.name ?? "",
      status: input.status ?? "pending",
      des: input.des ?? "",
      img: input.img ?? [],
    };
    setListImg((prev) => {
      return [...prev, newImgObj];
    });
  };
  return (
    <ImagingContext.Provider value={{ listImg, createNewImgItem }}>
      {children}
    </ImagingContext.Provider>
  );
}

export const useImg = () => {
  return useContext(ImagingContext);
};

export default ImagingContextProvider;
