import ListPEconclude from "../components/listPEconclude/ListPEconclude";

export const convertToListItem = (objList, dropPEList) => {
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

export const convertToListString = (objList) => {
  let result = "";
  const objKey = Object.keys(objList);
  for (let i1 = 0; i1 < objKey.length; i1++) {
    if (objList[objKey[i1]].length === 0) continue;
    result += objKey[i1] + " : ";
    for (let i2 = 0; i2 < objList[objKey[i1]].length; i2++) {
      result += objList[objKey[i1]][i2] + ",";
    }
    result += "\n";
  }
  return result;
};

export const convertVitalSign = (objVital) => {
  return `vital sign : ${objVital.BP ? "BP " + objVital.BP + " mmHg" : ""} ${
    objVital.PR ? "PR " + objVital.PR + " bpm" : ""
  } ${objVital.RR ? "RR " + objVital.RR + " /min" : ""} ${
    objVital.Temp ? "Body Temp " + objVital.Temp + " celsius" : ""
  }`;
};
