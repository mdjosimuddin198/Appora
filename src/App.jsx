import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
