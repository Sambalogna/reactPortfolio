import React from "react";
import Footer from "./components/Footer/index";
import Nav from "./components/Navbar/index"
import Project from "./components/Project/Project";
import './App.css'
function App() {
  return (
    <div className="app">
      <Nav />
      <Project />
      <Footer />
    </div>
  )
}

export default App;
