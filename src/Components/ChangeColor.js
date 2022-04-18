import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../Features/Theme";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button onClick={() => {dispatch(changeColor(color))}}>Change Color</button>
    </div>
  );
};

export default ChangeColor;
