import React from "react";
import style from "../styles/Header.module.css";
import { BsFillSunFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className={style.header_container}>
      <BsFillSunFill className={style.sun_icon} />
      <div>
        <button className={style.btn}>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
