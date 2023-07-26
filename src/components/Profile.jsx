import React from "react";
import Avartar from "./Avartar";

export default function Profile({ isnew, img, name, title }) {
  return (
    <div className="profile">
      <Avartar isnew={isnew} img={img} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
