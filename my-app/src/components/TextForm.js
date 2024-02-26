import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase(); 
    setText(newText);
    props.showAlert("converted to uppercase!","success");
  };
 
  const handleDownClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");

  };
  const handleCopyClick=()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","success");
  }
  const handleClearClick=()=>{
    console.log("text is cleared");
    let newText = "";
    setText(newText);
    props.showAlert("Textfield cleared","success");

  }

  
  const handleOnChange = (event) => {
    console.log("On change");
    // Update the state with the value of the textarea
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
     
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h1> Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" spli").length } Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0? null:"Enter something in the textbox to preview"}</p>
        <p>{text}</p>
    </div>
    </>
  );
}

export default TextForm;
