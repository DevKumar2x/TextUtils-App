import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { About } from './components/About';
import TextArea from './components/TextArea';
import Alerts from './components/Alerts';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const handleGreen = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#126d0b';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#126d0b';
    }
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
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
      
      <Navbar title="TextUtils" aboutText="About Us" mode={Mode} toggleMode={toggleMode} handleGreen={handleGreen} />
      <Alerts alert={Alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextArea heading="Enter the text to analyze" mode={Mode} showAlert={showAlert} />} />
        </Routes>
      </div>

    </Router>
    </>
  );
}

export default App;
