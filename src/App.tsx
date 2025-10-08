import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CustomCursor from './Components/CustomCursor';
import Landing from './Landing';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import AdditionalInfo from './AdditionalInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/additional-info" element={<AdditionalInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
