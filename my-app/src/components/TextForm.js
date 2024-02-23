import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase(); 
    setText(newText);
  };

  const handleDownClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick=()=>{
    console.log("text is cleared");
    let newText = "";
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("On change");
    // Update the state with the value of the textarea
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container">
        <h1> Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

export default TextForm;
