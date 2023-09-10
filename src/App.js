import './App.css';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import TextForm2 from './Components/TextForm2';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "black";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          {/* <Switch> */}
            {/* <Route excat path="/about"> */}
              <AboutUs />
            {/* </Route> */}
            {/* <Route excat path="/textform"> */}
              <TextForm2 heading="Enter the text to analyze" />
            {/* </Route> */}
          {/* </Switch> */}

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
