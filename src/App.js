import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import ShowList from "./components/ShowList";

function App() {

 return (
    <div className="App">
      <Router>
        <Navigation />
          <Routes>
          <Route path="/" element={<Home  />}/>
          <Route path="/show-list" element={<ShowList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
