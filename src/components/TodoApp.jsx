import React from "react";
import style from "../styles/TodoApp.module.css";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

export default function TodoApp() {
  return (
    <div className={style.container}>
      <Header />
      <List />
      <Footer />
    </div>
  );
}
