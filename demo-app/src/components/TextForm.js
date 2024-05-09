import React, {useState} from 'react'


export default function Textform(props) {
  

const handleUpClick = ()=> {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!" , "Success")
    }

const handleLowClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!" , "Success")
    }

const handleClearClick = ()=>{
        let newText=('');
        setText(newText);
        props.showAlert("Text Cleared!" , "Success")
    }

const [textColor, setTextColor] = useState('black');

    const handleColourClick = () => {
      const newTextColor = textColor === 'black' ? 'blue' : 'green';
      setTextColor(newTextColor); 
      props.showAlert("Colour changed!" , "Success")

      
    };

const handleSliceClick = () =>{
      let newText = text.slice(1);
      setText(newText);
      props.showAlert("Characters has been removed!" , "Success")
      
    }

const handleCopyClick = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!" , "Success")
    }

const handleSpaceClick = () =>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space has been removed!" , "Success")

    }
const handleOnChange = (event) =>{   
        setText(event.target.value)
    }

  
const [text, setText] = useState(''); 

  return (
    <>

    <div>

<h1>{props.heading}</h1>
<div className="mb-3">


<textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode === 'light'?'lightblue':'white' ,
Color: props.mode === 'light'?'#042743':'white' , Color : textColor }} id="exampleFormControlTextarea1" rows="9"></textarea>

  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to Upper case</button>
  <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleLowClick}>Convert to Lower case</button>
  <button disabled={text.length===0} className="btn btn-info mx-3 my-1" onClick={handleClearClick}>Clear text</button>
  <button disabled={text.length===0} className="btn btn-warning m-3 my-1" onClick={handleColourClick}>Change colour</button>
  <button disabled={text.length===0} className="btn btn-dark m-3 my-1" onClick={handleSliceClick}>Remove Characters</button>
  <button disabled={text.length===0} className="btn btn-danger m-3 my-1" onClick={handleCopyClick}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-danger m-3 my-1" onClick={handleSpaceClick}>Remove Extra Spaces</button>
    </div>
    
    <div className="container my-3" style={{Color: props.mode === 'black'?'white':'#042743', }}>
      <h1>Your text summary</h1>
      <p>{text.trim().split(/\s+/).filter(word => word !== "").length} words & {text.trim().replace(/\s+/g, '').length} characters</p>
      {/* <p>{text.split(" ").length} words & {text.length} characters</p> */}
      <p>{0.008 * text.split(/\s+/).filter(word => word !== "").length} Minutes read</p>
      <h2>Preview</h2>
      <p className="my-2" style={{ color: textColor }}>{text.length>0?text:"Nothing to preview:"}</p>


    </div>

    </>
  )
}
