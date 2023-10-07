import { formatStrToObj } from "../../utility/formatUd";
import "./EditDrugUd.css";
import { useState, useRef, useEffect } from "react";

function EditDrugUd({ inputObj, callBack }) {
  const [objEdit, setObjEdit] = useState(formatStrToObj(inputObj));
  const inputBoxEl = useRef();

  const handleOnChange = (e) => {
    setObjEdit((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!inputBoxEl?.current?.contains(e.target)) {
        callBack(objEdit);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callBack, objEdit]);

  return (
    <div className="edit-drug-input" ref={inputBoxEl}>
      <input
        className="form-control"
        placeholder="title"
        value={objEdit.title}
        name="title"
        onChange={handleOnChange}
      />
      <input
        className="form-control"
        placeholder="using"
        value={objEdit.detail}
        name="detail"
        onChange={handleOnChange}
      />
      <input
        className="form-control"
        placeholder="amount"
        value={objEdit.amount}
        name="amount"
        onChange={handleOnChange}
      />
    </div>
  );
}

export default EditDrugUd;
