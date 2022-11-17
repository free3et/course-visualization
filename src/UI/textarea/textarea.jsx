import { useState, useEffect } from "react";
import "./textarea.css";

export function Textarea() {
  let [commentValue, setValue] = useState("");
  let [comment, setComment] = useState("");
  const [messageArr, setMeessageToArr] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
  }

  function onValueChanged(e) {
    let value = e.target.value;
    setValue((commentValue = value));
  }

  function submitMessage(event) {
    setComment((comment = commentValue));
    setValue((commentValue = ""));
    setMeessageToArr((messageArr) => [...messageArr, comment]);
    return messageArr;
  }

  useEffect(() => {
    submitMessage();
  }, []);

  return (
    <div className="comment_wrapper">
      <h2>Leave your comment</h2>
      <div className="border_list">
        {messageArr.map((item) => (
          <p>{item}</p>
        ))}
      </div>
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
