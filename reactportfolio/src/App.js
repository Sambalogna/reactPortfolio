import React from "react";
import Footer from "./components/Footer/index";
import Navigation from "./components/Navbar/index"
import Project from "./components/Project/index";
import './App.css'
function App() {
  return (
    <div className="app">
      <Navigation />
      <Project />
      <Footer />
    </div>
  )
}

export default App;
