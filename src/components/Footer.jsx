import React from "react";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_wrapper}>
        <input placeholder="Add Todo" />
        <button>Add</button>
      </div>
    </div>
  );
}
