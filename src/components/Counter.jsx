import React, { useState } from "react";

export default function Counter({ countHandler, totalCount }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">
        {count} <span style={{ fontSize: "28px" }}>/ {totalCount}</span>
      </span>
      <button
        className="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          countHandler();
        }}
      >
        Add +
      </button>
    </div>
  );
}
