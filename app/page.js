
'use client'
import { Box,Heading,Link } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function Main({}) {
  return (
    <Box>
      <Navbar/>
        <Hero/>
        <div id="about-me">
          <AboutMe/>
        </div>
        <Project/>
      <Footer/>
    </Box>
  );
}
