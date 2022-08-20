import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import React, {useState} from 'react';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Slider from './Component/Slider';
import Card from './Component/Card';




function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const changeSlide = () => {

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
      
    <Navbar title="VPLLEX"  mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
   
    
    <div className="container my-3">
      <Routes>
        
      <Route exact path="/Home" element={ <Slider />}>
          </Route>
          <Route exact path="/Home" element={ <Card/>}>
          </Route>
          <Route exact path="/Card" element={ <Card/>}>
          </Route>
          <Route exact path="/about" element={ <About mode={mode} />}>
          </Route>
          <Route exact path="/TextUtils" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}>

          </Route>

      </Routes>
       </div>
    </Router>

    </>
  );
}

export default App;