import React from "react";
import style from "../styles/Item.module.css";
import { BsFillTrashFill } from "react-icons/bs";

export default function Item() {
  return (
    <div className={style.item_container}>
      <div className={style.item_name_container}>
        <input type="checkbox" />
        <label>공부하기</label>
      </div>
      <button>
        <BsFillTrashFill className={style.transh_icon} />
      </button>
    </div>
  );
}
