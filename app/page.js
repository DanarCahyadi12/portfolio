
'use client'
import { Box, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

export default function Main({}) {
  return (
    <Box>
      <Navbar/>
      <VStack margin={"auto"} marginTop={{md :5,base :0}} >
        <Hero/>
        <AboutMe/>
      </VStack>
    </Box>
  );
}
