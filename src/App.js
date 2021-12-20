import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import WordPressWebsites from "./Pages/WordPressWebsites";
import Landing from "./Pages/Landing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ReactWebsites from "./Pages/ReactWebsites";
import HtmlWebsites from "./Pages/HtmlWebsites";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/react-websites" element={<ReactWebsites />} />
        <Route path="/html-websites" element={<HtmlWebsites />} />
        <Route path="/wordpress-websites" element={<WordPressWebsites />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
