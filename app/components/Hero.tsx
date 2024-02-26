'use client'
import {
  Box,
  Text,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { IoLogoGitlab, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { Lilita_One } from "next/font/google";
const lilitaOne = Lilita_One({
  subsets: ['latin'],
  weight: '400'
})
// import img from ".";
import Image from "next/image";
import Tube from '../assets/Tube.svg'
import Portal from '../assets/Portal.svg'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
export default function Hero() {
  return (
    <Box width={'full'} bgImage={'/mesh-backround.svg'} bgSize={'cover'} bgPosition={'center'} height={'100vh'} paddingTop={'10rem'} position={'relative'}>
      <Box width={'80%'} margin={'auto'} textAlign={'center'}>
        <Text fontSize={{md: 'xl', base: 'md'}} fontWeight={'medium'}>HI THERE! 👋</Text>
        <Heading className={lilitaOne.className} fontSize={{md: '7xl', base: '4xl'}} color={'gray.700'}>I'm a Danar Cahyadi</Heading>
          <Text fontWeight={'medium'} fontSize={{md:'2rem', base: '1.2rem'}} color={'gray.800'} marginTop={2}>
              Software engineering student 💻
          </Text>
        <Text fontWeight={'medium'} fontSize={{md: '1.3rem', base: '0.9rem'}}  width={{md: '80%', base: '90%'}}  margin={'auto'} marginTop={2}>"Persistence and not giving up are efforts in solving problems."</Text>
        <HStack gap={7} justifyContent={'center'} marginTop={30}>
          <Link href="https://gitlab.com/DanarCahyadi12" fontSize={{md: '2rem', base: '1.3rem'}}><Icon transition={'ease-out 100ms'} _hover={{color: 'orange.200'}} as={IoLogoGitlab}/></Link>
          <Link href="https://github.com/DanarCahyadi12" fontSize={{md: '2rem', base: '1.3rem'}}><Icon transition={'ease-out 100ms'} _hover={{color: 'orange.200'}} as={IoLogoGithub}/></Link>
          <Link href="https://instagram.com/danarchydii" fontSize={{md: '2rem', base: '1.3rem'}}><Icon transition={'ease-out 100ms'} _hover={{color: '#8947b4'}} as={IoLogoInstagram}/></Link>
          <Link href="https://www.linkedin.com/in/danarcahyadi" fontSize={{md: '2rem', base: '1.3rem'}}><Icon transition={'ease-out 100ms'} _hover={{color: 'blue.200'}} as={IoLogoLinkedin}/></Link>
        </HStack>
        <Box position={'absolute'} top={5} width={{md: 'inherit', base: 100}}>
          <Image src={Tube} alt="Tube" width={120} height={120}/>
        </Box>
        <Box position={'absolute'} top={{md: 30, base: 50}} right={0} width={{md : 100, base: 50 }}>
          <Image src={Portal} alt="Tube" width={80} height={80}/>
        </Box>
      </Box>
      </Box>

  );
}
