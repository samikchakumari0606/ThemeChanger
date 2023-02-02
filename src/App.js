import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {useState} from "react";

function App() {
  const[mode,setMode]=useState("light")

  const togglemode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <div className="App">
      <Navbar mode={mode} togglemode={togglemode}/>
      <div className="container">
      <TextForm  heading="Enter the text analyse below" mode={mode}/>
      </div>
   {/* <About/> */}
    </div>
  );
}

export default App;
