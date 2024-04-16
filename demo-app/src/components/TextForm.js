import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = ()=> {
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
       
        setText(event.target.value)
    }


const [text, setText] = useState('Enter text here');

// text="new text";
// setText=("newText");

  return (
    <div>

<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
  <button className="btn btn-primary m-3 p-2" onClick={handleUpClick}>Convert to Upper case</button>
  <button className="btn btn-danger  m-3 p-2" onClick={handleDownClick}>Convert to Lower case</button>
</div>

    </div>
  )
}
