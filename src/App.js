import React, { Suspense, lazy, useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Box, CircularProgress } from "@mui/material";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faM,
  faFontAwesome,
  faN,
  faBookReader,
  faQuestionCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

import CookieConsent from "react-cookie-consent";

import Landing from "./Pages/Landing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewSample from "./Pages/NewSample";
import CurvedShape from "./Components/CurvedShape";

const ReactWebsites = lazy(() => import("./Pages/ReactWebsites"));
const HtmlWebsites = lazy(() => import("./Pages/HtmlWebsites"));
const WordPressWebsites = lazy(() => import("./Pages/WordPressWebsites"));
const NoPage = lazy(() => import("./Pages/NoPage"));
const WebsiteFullWriteUp = lazy(() => import("./Pages/WebsiteFullWriteUp"));

function App() {
  library.add(
    fab,
    faM,
    faFontAwesome,
    faN,
    faBookReader,
    faQuestionCircle,
    faWindowClose
  );

  const [darkTheme, setDarkTheme] = useState(false);
  const [adminPage, setAdminPage] = useState(false);

  const themeColorHandler = () => {
    setDarkTheme(!darkTheme);
  };

  const adminPageShowHandler = () => {
    setAdminPage(true);
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <CurvedShape />
      {!adminPage && (
        <Header themeColorHandler={themeColorHandler} darkTheme={darkTheme} />
      )}
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
          <Route
            path="/admin"
            element={<NewSample adminPageShowHandler={adminPageShowHandler} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
      {!adminPage && <Footer />}
      <CookieConsent>
        This website uses cookies to enhance the user experience. More about it
        -{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google policy
        </a>
      </CookieConsent>
    </div>
  );
}

export default App;
