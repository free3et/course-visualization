import { useState } from "react";
import "./checkbox.css";
export function Checkbox() {
  let [checked, setChecked] = useState(false);
  let [classComplited, setClassComplited] = useState("unchecked");
  let [messageComplited, setMessageComplited] = useState("Complete lesson");

  function handleChange(name) {
    setChecked((checked = !checked));
    setClassComplited(
      checked ? (classComplited = "checked") : (classComplited = "unchecked")
    );
    setMessageComplited(
      checked
        ? (messageComplited = "Complete lesson")
        : (messageComplited = "Uncompleted lesson")
    );
  }

  return (
    <div className={classComplited}>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={(event) => {
          handleChange(name);
        }}
      />
      <label>{messageComplited}</label>
    </div>
  );
}
