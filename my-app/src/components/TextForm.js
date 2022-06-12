import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !","success");
    }
    
    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !","success");
    }

    const handleClearClick= ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared !","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        // let newtext = document.getElementById("myBox");
        // newtext.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard !","success");
    }

    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !","success");
    }

    const [text,setText] = useState("Enter Text Here");

    return (
        <>
    <div className="container" style = {{color:
            props.mode === "light" ? "black" : "white"
          }}>
        <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange = {handleOnChange}
          style = {{backgroundColor:
            props.mode === "light" ? "white" : "#13466e"
          , color: props.mode === "light" ? "black" : "white"}}
        ></textarea>
      </div>
      <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>      
      <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style = {{color:
            props.mode === "light" ? "black" : "white"
          }}>
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read.</p>
    </div>
    </>
  );
}
