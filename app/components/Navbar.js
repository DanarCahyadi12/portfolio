"use client";
import { Box, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (

      <Box
        padding={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        position={"fixed"}
        id="top"
        boxShadow={'md'}
        bgColor={'white'}
        width={'full'}
        top={0}
        zIndex={1}
      >
        <Box>

          <Link
            fontSize={{ lg: "3xl", md: "2xl", base: "1xl" }}
            fontWeight={"black"}
            textDecoration={"none"}
            href="#hero"
            _hover={{textDecor : 'none'}}
            >
            Danar Cahyadi
          </Link>
            </Box>

            <Box >
              <Link marginRight={4} _hover={{textDecor : "none"}} fontSize={{md : 'inherit',base : 12}} href="/">Home</Link>
              <Link marginRight={5} _hover={{textDecor : "none"}} fontSize={{md : 'inherit',base : 12}} href="/about">About</Link>
            </Box>
        
      </Box>

  );
}
