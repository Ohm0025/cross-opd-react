import "./UnderlyBody.css";
import { useEffect } from "react";

function UnderlyBody({ selectUd }) {
  useEffect(() => {}, []);
  return <div className="ud-body-container">{selectUd.udTitle}</div>;
}

export default UnderlyBody;
