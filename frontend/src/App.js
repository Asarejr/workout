import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

// pages and components
import Home from './pages/Home';
import Navbar from "./component/Navbar";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages bg-light vh-100 ">
          <Routes>
            <Route 
            path="/" 
            element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
      </div>
  );
};

export default App;