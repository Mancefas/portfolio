import React, { Suspense, lazy, useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Box, CircularProgress } from "@mui/material";

import Landing from "./Pages/Landing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewSample from "./Pages/NewSample";

const ReactWebsites = lazy(() => import("./Pages/ReactWebsites"));
const HtmlWebsites = lazy(() => import("./Pages/HtmlWebsites"));
const WordPressWebsites = lazy(() => import("./Pages/WordPressWebsites"));
const NoPage = lazy(() => import("./Pages/NoPage"));
const WebsiteFullWriteUp = lazy(() => import("./Pages/WebsiteFullWriteUp"));

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeColorHandler = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <Header themeColorHandler={themeColorHandler} darkTheme={darkTheme} />
      <Suspense
        fallback={
          <Box
            sx={{
              height: "90vh",
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="primary" />{" "}
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/react-websites" element={<ReactWebsites />}></Route>
          <Route
            path="/react-websites/:websiteName"
            element={<WebsiteFullWriteUp />}
          />
          <Route path="/html-websites" element={<HtmlWebsites />} />
          <Route path="/wordpress-websites" element={<WordPressWebsites />} />
          <Route path="/admin" element={<NewSample />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
