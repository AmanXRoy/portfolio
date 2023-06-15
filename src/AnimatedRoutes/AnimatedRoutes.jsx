import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import About from "../pages/About/About";
import Resume from "../pages/Resume/Resume";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const personName = "Aman Roy";
  const personRole = "FrontEnd Developer";
  const personSummaryStart = "I'm a passionate ";
  const personSummaryEnd = " from India";
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Header
                name={personName}
                summaryStart={personSummaryStart}
                role={personRole}
                summaryEnd={personSummaryEnd}
              ></Header>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
