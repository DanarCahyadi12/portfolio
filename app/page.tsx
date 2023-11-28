'use client'
import { Box} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";


export default function Main() {
  return (
    <>
     <Navbar/>
     <Box>
       <Hero/>
       <About/>
     </Box>
    </>
  );
}
