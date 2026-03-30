import React from "react";
import "./App.css";
import Navbar from "./components/homepage/Navbar";
import Hero from "./components/homepage/Hero";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
