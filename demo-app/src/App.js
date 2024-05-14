import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// }from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },3000);
    
  }
  
const removeBodyClasses = () =>{

    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')    
}

const toggleMode = (cls) =>{
  removeBodyClasses();
  document.body.classList.add('bg-'+cls)

  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled", "success");
    document.title='Textutils - DarkMode';

}
  
  else{

    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title='Textutils - LightMode';

    setInterval(() =>{
     document.title = 'TextUtils is Amazing Mode!'
    },2000);
    
    setInterval(() =>{
      document.title = 'Install TextUtils Now!'
     },1500);

  }

  }
  return (
<>

<Navbar title="Textutils" aboutText="About Textutils" homeText="Home Textutils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">

<TextForm showAlert={showAlert} heading="TextUtils Word Counter | Character Counter | Remove extra spaces" mode={mode}/>

<Alert alert={alert}/>
 
 
<About/>
    
    </div>      


</>
  );
}

export default App;
