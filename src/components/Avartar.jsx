import React from "react";

export default function Avartar({ img, isnew }) {
  return (
    <div className="avartar_containner">
      {isnew ? <div className="new_icon">NEW</div> : null}
      <img className="photo" src={img} alt="avartar" />
    </div>
  );
}
