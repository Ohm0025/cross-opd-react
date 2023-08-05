import { Outlet } from "react-router-dom";
import IconName from "../../components/iconName/IconName";
import "./HomeLayout.css";

import ButtonBack from "../../components/buttonBack/ButtonBack";
import ButtonHome from "../../components/buttonHome/ButtonHome";
import DropDown from "../../components/dropDown/DropDown";
import Clock from "../../components/clock/Clock";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

function HomeLayout({ user, typeaccount }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef();

  const { logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (e) => {
      //เอาที่ไม่ได้อยู่ใน dropdown
      if (!dropdownEl.current.contains(e.target)) {
        //เอาไว้เช็คว่า contains element ไว้หรือไม่
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside); //add eventListener เมื่อ mounting
    return () => document.removeEventListener("mousedown", handleClickOutside); //remove event เมื่อ unmounting
  }, []);

  const closeDropDown = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="home-header">
        <ButtonBack />

        <Clock />

        <ButtonHome />

        <div className="header-user">
          <div className="user-tag">
            {user.firstName + " " + user.lastName}
            <small>{typeaccount}</small>
          </div>

          <IconName
            char={user.firstName[0].toUpperCase()}
            onClick={() => setIsOpen((prev) => !prev)}
          />

          <div className="dropdown home-dropdown" ref={dropdownEl}>
            <DropDown
              isOpen={isOpen}
              logout={logout}
              closeDropDown={closeDropDown}
            />
          </div>
        </div>
      </div>

      <div className="home-container">
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
