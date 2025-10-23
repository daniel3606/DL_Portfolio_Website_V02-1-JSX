import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SplashCursor from './Components/SplashCursor';
import Landing from './Landing';
import Projects from './Projects';
import SideProjects from './SideProjects';
import StudyHelper from './StudyHelper';
import Resume from './Resume';
import Contact from './Contact';
import AdditionalInfo from './AdditionalInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/side-projects" element={<SideProjects />} />
          <Route path="/study-helper" element={<StudyHelper />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/additional-info" element={<AdditionalInfo />} />
        </Routes>
        
        {/* Global SplashCursor - rendered once and persists across all pages */}
        <SplashCursor
          SIM_RESOLUTION={96}
          DYE_RESOLUTION={512}
          DENSITY_DISSIPATION={6}
          VELOCITY_DISSIPATION={3}
          PRESSURE_ITERATIONS={12}
          CURL={2}
          SPLAT_RADIUS={0.18}
          SPLAT_FORCE={2800}
          SHADING={true}
          COLOR_UPDATE_SPEED={6}
          BACK_COLOR={{ r: 0, g: 0, b: 0 }}
          TRANSPARENT={true}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

