import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

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
  
const toggleMode = () =>{
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
<Router>
<Navbar title="Textutils" aboutText="About Textutils" homeText="Home Textutils" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
        <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" 
           mode={mode}/>
        </Route>
      </Switch>
    </div>      
</Router>

</>
  );
}

export default App;
