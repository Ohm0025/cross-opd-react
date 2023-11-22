import DrugItem from "../../../components/drugItem/DrugItem";
import { DOCTOR } from "../../../config/constant";
import { useAuth } from "../../../contexts/AuthContext";
import { useDrug } from "../../../contexts/DrugContext";
import { useExam } from "../../../contexts/ExamContext";
import "./DrugCenter.css";

function DrugCenter({ selecType }) {
  const { listDrug } = useDrug();
  const { user, typeaccount } = useAuth();
  const { patientObj } = useExam() ?? {};

  let listUd = JSON.parse(user.underlying || "[]").reduce(
    (acc, cur) => [...acc, cur.udTitle],
    []
  );

  if (typeaccount === DOCTOR) {
    listUd = patientObj?.underlying.reduce(
      (acc, cur) => [...acc, cur.udTitle],
      []
    );
  }

  const modList = listDrug.map((item) => {
    return [
      ...Object.entries({
        ...JSON.parse(item.Treatment.txList),
        createdAt: item.createdAt,
      }),
    ];
  });

  const finalList = modList.map((item1) => {
    const createDate = item1[item1.length - 1];
    const arr = item1
      .slice(0, item1.length - 1)
      .filter(([key, value]) =>
        selecType === "ud"
          ? listUd.includes(key)
          : selecType === "noUd"
          ? !listUd.includes(key)
          : true
      );
    return arr.map((item) => {
      return [item, createDate];
    });
    // return arr;
  });

  return (
    <>
      {finalList.length === 0 && (
        <h2 className="drug-center-empty">ไม่มีรายการยาที่เลือกไว้</h2>
      )}
      <div className="drug-center">
        {finalList.map((item, index) => {
          // console.log(JSON.parse(item.Treatment.txList || "{}"));
          return (
            <DrugItem
              date={item[item.length - 1] ? item[item.length - 1][1] : []}
              list={item}
              key={"drugItem" + index}
            />
          );
        })}
      </div>
    </>
  );
}
export default DrugCenter;
