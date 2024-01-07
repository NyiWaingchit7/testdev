import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import TopBar from "./component/TopBar";
import FirstSection from "./component/FirstSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import FourthSection from "./component/ForuthSection";

function App() {
  return (
    <Box>
      <TopBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Box>
  );
}

export default App;
