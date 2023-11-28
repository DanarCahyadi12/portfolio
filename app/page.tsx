'use client'
import { Box} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
export default function Main() {
  return (
    <>
     <Navbar/>
     <Box>
       <Hero/>
       <About/>
       <Skill/>
       <Project/>
     </Box>
    </>
  );
}
