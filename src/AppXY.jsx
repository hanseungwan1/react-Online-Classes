import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [coordinate, setCoordinate] = useState([0, 0]);
  const mouseMoveHandler = function (e) {
    setCoordinate([e.clientX, e.clientY]);
  };

  return (
    <div className="container" onMouseMove={mouseMoveHandler}>
      <div
        className="pointer"
        style={{ left: `${coordinate[0]}px`, top: `${coordinate[1]}px` }}
      />
    </div>
  );
}
