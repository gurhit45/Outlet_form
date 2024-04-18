import React from "react";
import style from "../assets/customradio.module.css";

function CustomRadio({ name, id, value, text, checked, onChange }) {
  return (
    <label htmlFor={id} className={style.customRadioLabel}>
      <input
        className={style.customRadioInput}
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={style.customRadio} />
      {text}
    </label>
  );
}

export default CustomRadio;
