import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import TopBar from "./component/TopBar";
import FirstSection from "./component/FirstSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import FourthSection from "./component/FourthSection";
import FifthSection from "./component/FifthSectiont";
import Footer from "./component/Footer";

function App() {
  return (
    <Box>
      <TopBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </Box>
  );
}

export default App;
