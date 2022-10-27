
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";


import Home from "./pages/Home";
import About from "./pages/About";
import Singleproduct from "./pages/Singleproduct";
import PageNotFound from "./pages/PageNotFound";
import StyledNavbar from "./components/StyledNavbar";
import Footer from "./components/Footer";


function App() {
  
  return (
    
        <Router>
          <StyledNavbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about"  element={<About />} />
            <Route path="products/:productId" element={<Singleproduct />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
          
     
  );
}


export default App;
