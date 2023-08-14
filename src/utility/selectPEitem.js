import ListPEconclude from "../components/listPEconclude/ListPEconclude";

export const convertToListString = (objList, dropPEList) => {
  const objKey = Object.keys(objList);

  return (
    <>
      {objKey?.map((item1, index1) => {
        if (objList[item1].length > 0) {
          return (
            <div key={"list-item" + index1} className="list-wraper-item">
              {item1}
              {" : "}

              {objList[item1]?.map((item2, index2) => {
                return (
                  <ListPEconclude
                    typePE={item1}
                    textPE={item2}
                    key={"list-subitem" + index2}
                    dropPEList={dropPEList}
                  />
                );
              })}
            </div>
          );
        }
        return "";
      })}
    </>
  );
};
