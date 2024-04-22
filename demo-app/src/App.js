import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
 

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }

  }
  return (
<>

<Navbar title="Textutils" aboutText="About Textutils" homeText="Home Textutils" mode={mode} toggleMode={toggleMode}/>

{/* <Navbar/> */}
{/* agar navbar nahi chalana to phir default wala chalega */}

<div className="container my-3">

<TextForm heading="Enter the text to analyze below"  mode={mode} />

<About/>

</div>

</>
  );
}

export default App;
