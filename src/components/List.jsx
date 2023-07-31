import React from "react";
import style from "../styles/List.module.css";
import Item from "./Item";

export default function List() {
  return (
    <div className={style.list_container}>
      <Item />
    </div>
  );
}
