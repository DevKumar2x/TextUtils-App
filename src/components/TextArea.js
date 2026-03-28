import { useState } from "react"

export default function TextArea(props) {

  const [text, setText] = useState("");
  const placeholderText = props.placeholder || "Enter text here...";

  const handleClickUp = () => {
    setText((prev) => prev.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleClickCCopy = () =>{
    setText((prev) => {navigator.clipboard.writeText(prev);
      return prev;
    });
    props.showAlert("Text copied to clipboard!", "success");
  }

  const handleClickClear = () =>{
    setText("");
    props.showAlert("Text cleared!", "success");
  }

  const handleClickCap = () => {
    setText((prev) => prev.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
    props.showAlert("Converted to capitalize!", "success");
  }

  const handleClickLow = () => {
    setText((prev) => prev.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleExtraSpaces = () => {
    setText((prev) => prev.split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const change = (event) => {
    setText(event.target.value);
  }

  return (
    <>
    <form className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
      <h3>{props.heading}</h3>
      <div className="form-group my-3">
        <textarea value={text} placeholder={placeholderText} id="Textarea" rows="6" className="form-control" onChange={change} 
        style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}}></textarea>
      </div>
      <button disabled={text.length === 0} type="button" onClick={handleClickUp} className="btn btn-primary mx-2 my-1">Convert to Uppercase</button>
      <button disabled={text.length === 0} type="button" onClick={handleClickLow} className="btn btn-success mx-2 my-1">Convert to Lowercase</button>
      <button disabled={text.length === 0} type="button" onClick={handleClickCap} className="btn btn-primary mx-2 my-1">Convert to Capitalize</button>
      <button disabled={text.length === 0} type="button" onClick={handleClickCCopy} className="btn btn-success mx-2 my-1">Copy Text</button>
      <button disabled={text.length === 0} type="button" onClick={handleClickClear} className="btn btn-primary mx-2 my-1">Clear Text</button>
      <button disabled={text.length === 0} type="button" onClick={handleExtraSpaces} className="btn btn-success mx-2 my-1">Remove Extra Spaces</button>
    </form>
    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>  
    </div>
    </>
  )
}
