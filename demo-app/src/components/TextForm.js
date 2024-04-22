import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = ()=> {
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        let newText=('');
        setText(newText);
    }

    const [textColor, setTextColor] = useState('black');


    const handleColourClick = () => {
      const newTextColor = textColor === 'black' ? 'blue' : 'green';
      setTextColor(newTextColor); 
    };

    const handleSliceClick = () =>{
      let newText = text.slice(1);
      setText(newText);
    }

    const handleCopyClick = () =>{
      let text=document.getElementById('exampleFormControlTextarea1');
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      
    }

    const handleSpaceClick = () =>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));

    }
    const handleOnChange = (event) =>{   
        setText(event.target.value)
    }



  const [text, setText] = useState(''); 

// text="new text";
// setText=("newText");

  return (
    <>

    <div>

<h1>{props.heading}</h1>
<div className="mb-3">


  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode === 'light'?'grey':'white' ,
  Color: props.mode === 'light'?'#042743':'white' , Color : textColor }} id="exampleFormControlTextarea1" rows="9"></textarea>

  </div>
  <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upper case</button>
  <button className="btn btn-success mx-3" onClick={handleLowClick}>Convert to Lower case</button>
  <button className="btn btn-info mx-3" onClick={handleClearClick}>Clear text</button>
  <button className="btn btn-warning m-3 p-2" onClick={handleColourClick}>Change colour</button>
  <button className="btn btn-dark m-3 p-2" onClick={handleSliceClick}>Remove Characters</button>
  <button className="btn btn-danger m-3 p-2" onClick={handleCopyClick}>Copy Text</button>
  <button className="btn btn-danger m-3 p-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
    </div>
    
    <div className="container my-3" style={{Color: props.mode === 'black'?'white':'#042743', }}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words & {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p className="my-2" style={{ color: textColor }}>{text.length>0?text:"Enter soemthing in textbox above to preview here:"}</p>


    </div>

    </>
  )
}
