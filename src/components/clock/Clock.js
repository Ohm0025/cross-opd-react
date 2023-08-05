import { useEffect, useState } from "react";
import { formatDateTime } from "../../utility/formatDataTime";
import "./Clock.css";

function Clock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date(), 1000));
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock-box">
      <div className="clock-item">
        {formatDateTime(value.getDate()) +
          "/" +
          formatDateTime(value.getMonth() + 1) +
          "/" +
          value.getFullYear()}
      </div>
      <div className="clock-item">
        {formatDateTime(value.getHours()) +
          ":" +
          formatDateTime(value.getMinutes()) +
          ":" +
          formatDateTime(value.getSeconds())}
      </div>
    </div>
  );
}

export default Clock;
