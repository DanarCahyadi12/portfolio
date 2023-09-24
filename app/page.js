
'use client'
import { Box} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Education from "./components/Education";
import CodingJourney from "./components/CodingJourney";
import TechStackAndTools from "./components/TechStackAndTools";

export default function Main({}) {
  return (
    <Box>
      <Navbar/>
        <Hero/>
        <Education/>
        <CodingJourney/>
        <TechStackAndTools/>
        <Project/>
      <Footer/>
    </Box>
  );
}
