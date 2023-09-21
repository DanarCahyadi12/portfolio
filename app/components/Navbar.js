'use client'
import {
  Box,
  Heading
  
} from "@chakra-ui/react";


export default function Navbar() {
  return (
    <Box
      padding={5}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      position={"relative"}
      
    >
      <Box width={"70%"}>
        <Heading
          fontSize={{ lg: "3xl", md: "2xl", base: "1xl" }}
          fontWeight={"black"}
          textDecoration={"none"}
        >
          Danar Cahyadi
        </Heading>
      </Box>
    </Box>
  );
}
