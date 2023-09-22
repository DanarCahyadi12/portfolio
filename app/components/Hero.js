'use client'
import {
  Box,
  Text,
  Heading,
  Highlight,
  HStack,
  Flex,
  Link,
  Button
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillGithub,AiFillGitlab ,AiFillInstagram} from "react-icons/ai";
import img from "../assets/img.svg";
import Image from "next/image";
import { Signika_Negative} from "next/font/google";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const signikaNegative  = Signika_Negative({subsets : ['latin'],weight : '700'})
export default function Header() {
  return (
      <HStack marginTop={'20'} display={{md : 'flex'}} >
        <Box>
          <Image src={img}/>
        </Box>
        <Box marginTop={'-20%'} bgImage={'/rectangle.svg'} bgRepeat={'no-repeat'} bgPosition={'right'} >
          <Text fontSize={{lg :40 ,md : 30,base : 35}} textAlign={{md : 'start',base :'center'}}>Hello I'm</Text>
          <Heading className={signikaNegative.className} fontSize={{lg : '8xl',md : '7xl',base : '5xl'}} textAlign={{md : 'start',base :'center'}} backgroundClip={'text'}  bgGradient='linear(to-l, #6687ff, #ff9eaf)'>
            Danar Cahyadi
          </Heading>
          <Heading fontSize={{lg : '3xl',md : '2xl',base : '2xl'}} fontWeight={'medium'} lineHeight={'tall'} textAlign={{md : 'start',base :'center'}}>
            <Highlight query={'Developer'} styles={{ px: '2', py: '1', rounded: 'full', bg: '#86a1e8',textColor : 'white' }}>
              Fullstack Developer
            </Highlight>
            </Heading>
           
            <Flex gap={10} marginTop={5} justifyContent={{md :"normal",base :'center'}}>
              <Link href="https://github.com/DanarCahyadi12" >
                <Icon as={AiFillGithub} fontSize={{md : 30,base :20}}/>
              </Link>
              <Link href="https://gitlab.com/DanarCahyadi12" >
                <Icon as={AiFillGitlab} fontSize={{md : 30,base :20}}/>
              </Link>
              <Link href="https://instagram.com/danarchydii" >
                <Icon as={AiFillInstagram} fontSize={{md : 30,base :20}}/>
              </Link>
              
            </Flex>
            
            <Link href="/about" width={'full'} display={'flex'} justifyContent={{md : 'unset',base :'center'}} _hover={{textDecoration : "none"}}>
              <Button marginTop={4}  colorScheme="pink" variant={'outline'} size={{lg : 'md',md :'sm',base : 'xs'}} rightIcon={<ArrowForwardIcon/>}>More about me</Button>
            </Link>
          
        </Box>
      </HStack>
    
    
  );
}
