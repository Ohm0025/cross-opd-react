import { useEffect, useRef } from "react";

export const useClickOutside = (callback) => {
  //custom hook -> เรียกใช้ hook อื่นใน function ได้
  const dropdownEl = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback]);
  return dropdownEl;
};
