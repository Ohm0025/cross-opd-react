import { useEffect, useState } from "react";
import { formatDateTime } from "../../../../utility/formatDataTime";
import "./PtRightSide.css";

function PtRightSide() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date(), 1000));
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pt-right-side">
      <div className="pt-right-item">
        {formatDateTime(value.getHours()) +
          ":" +
          formatDateTime(value.getMinutes()) +
          ":" +
          formatDateTime(value.getSeconds())}
      </div>
      <div className="pt-right-item">
        {formatDateTime(value.getDate()) +
          "/" +
          formatDateTime(value.getMonth() + 1) +
          "/" +
          value.getFullYear()}
      </div>
    </div>
  );
}

export default PtRightSide;
