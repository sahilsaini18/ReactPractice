import { useState } from "react";
import "./App.css";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Navbar from "./components/navbar";
import Alert from "./components/Alert";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//wheater dark mode is enabled or not
 const [alert,setAlert] =useState(null);

 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null);

  },1500);
 }
  const toggleMode =()=>{
   if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor ="grey";
    document.getElementById('myBox').style.backgroundColor="grey";
    showAlert("Dark mode has been enabled","success");

  }
  else{
    setMode('light')
    document.body.style.backgroundColor ="white";
    document.getElementById('myBox').style.backgroundColor="white";
    showAlert("Light mode has been enabled","success");


   }
  }

 
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} mode={mode}/>
       <About/> 
      </div>
    </>
  );
}

export default App;
