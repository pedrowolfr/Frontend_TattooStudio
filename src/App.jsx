import { Header } from "./Components/Header";
import { Body } from "./pages/Body";
import { Footer } from "./Components/Footer";
import React from "react";
import "./index.css";

function App() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
