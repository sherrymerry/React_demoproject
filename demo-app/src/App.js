import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 

function App() {
  return (
<>

<Navbar title="Textutils" aboutText="About Textutils" homeText="Home Textutils" />

{/* <Navbar/> */}
{/* agar navbar nahi chalana to phir default wala chalega */}

<div className="container my-3">

<TextForm heading="Enter the text to analyze below" />

{/* <About/> */}

</div>


</>
  );
}

export default App;
