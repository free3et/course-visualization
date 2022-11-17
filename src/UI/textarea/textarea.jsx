import { useState } from "react";
import "./textarea.css";

export function Textarea() {
  let [commentValue, setValue] = useState("");
  let [comment, setComment] = useState("");

  function submitHandler(event) {
    event.preventDefault();
  }

  function onValueChanged(e) {
    let value = e.target.value;
    setValue((commentValue = value));
  }

  function submitMessage(event) {
    event.preventDefault();
    setComment((comment = commentValue));
    setValue((commentValue = ""));
  }

  return (
    <div className="comment_wrapper">
      <h3>Leave your comment</h3>
      <h4>{comment}</h4>
      <form onSubmit={submitHandler}>
        <textarea
          className="form-control"
          placeholder="Type here"
          rows="3"
          cols="50"
          onChange={onValueChanged}
          value={commentValue}
        />
        <button type="submit" className="btn" onClick={submitMessage}>
          Add
        </button>
      </form>
    </div>
  );
}
