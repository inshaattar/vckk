// src/App.jsx
import './styles/Pages.css'
import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import Footer from './components/Header/Footer/Footer';
import Header from './components/Header/Header';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';
const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Insha Attar"
          studentPhotoUrl="\images\WhatsApp Image 2025-06-27 at 15.27.02_09ca48e2.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    
          <Router>
            <div className="main-layout">
              <Header/>
              <div className="content">
    
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admission" element={<AdmissionPage/>}/>
      </Routes>
      </div>
      <Footer/>
      <ChatbotComponent/>
      </div>
      </Router>
      </>

   
  );
}
export default App;