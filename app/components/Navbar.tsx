"use client";
import { Box, Link, Flex, HStack } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Box
      backgroundColor={'white'}
      width={'100%'}
      p={5}
      boxShadow={'md'}
    >
      <Flex justifyContent={'space-between'} width={'90%'} margin={'auto'}>
        <Link fontWeight={'bold'} _hover={{textDecoration:'none'}} fontSize={{md: 20, base: 13}}>Danar cahyadi</Link>
        <HStack gap={3}>
          <Link href="#about" fontWeight={'black'} _hover={{textDecoration: 'none'}} fontSize={{md: 'inherit', base: 10}}>ABOUT</Link>
          <Link fontWeight={'black'} _hover={{textDecoration: 'none'}} fontSize={{md: 'inherit', base: 10}}>SKILL</Link>
          <Link fontWeight={'black'} _hover={{textDecoration: 'none'}} fontSize={{md: 'inherit', base: 10}}>PROJECT</Link>
        </HStack>
      </Flex>
    </Box>
  )
}
