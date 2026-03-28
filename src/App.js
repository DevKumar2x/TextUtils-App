import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { About } from './components/About';
import TextArea from './components/TextArea';
import Alerts from './components/Alerts';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const handleGreen = () => {
    // Toggle the M1 state; when on, set a green background, when off restore based on mode
    setM1On(prev => {
      const next = !prev;
      if (next) {
        document.body.style.backgroundColor = '#126d0b';
        showAlert("M1 enabled (green)", "success");
      } else {
        // restore background depending on Mode
        if (Mode === 'dark') document.body.style.backgroundColor = '#042743';
        else document.body.style.backgroundColor = 'white';
        showAlert("M1 disabled", "success");
      }
      return next;
    });
  }

  const [Alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [Mode, setMode] = useState('light');
  const [m1On, setM1On] = useState(false);
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      // if M1 is currently on, keep the green background, otherwise use dark bg
      if (!m1On) document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      if (!m1On) document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
      
      <Navbar title="TextUtils" aboutText="About Us" mode={Mode} toggleMode={toggleMode} handleGreen={handleGreen} m1On={m1On} />
      <Alerts alert={Alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={Mode} />} />
          <Route path="/" element={<TextArea heading="Enter the text to analyze" mode={Mode} showAlert={showAlert} />} />
        </Routes>
      </div>

    </Router>
    </>
  );
}

export default App;
