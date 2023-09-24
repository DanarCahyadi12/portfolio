'use client'
import {
  Box,
  Flex,
  Text,
  Heading,
  Highlight,
  
  GridItem,
  Grid
  
} from "@chakra-ui/react";
import Image from "next/image";
import roadmap from "../assets/roadmap.svg";


export default function CodingJourney(){
    return (
         
      <Flex marginTop={90} width={'full'} padding={10} gap={20}  flexDirection={{base : 'column',md : 'row'}} >
      <Box width={'full'}>
        <Heading marginBottom={10} lineHeight={'tall'}>
          <Highlight query={"Journey"}
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}>
            Coding Journey
          </Highlight>
        </Heading>
        <Image src={roadmap} />
      </Box>
      
      <Box>
      <Box paddingTop={{md :20 ,base :0}}  maxWidth={'full'} overflowX={'auto'}>
          <Grid gap={5} templateColumns={{lg : '1fr 1fr',md : '1fr',base : '3fr 3fr 3fr'}}>
              <GridItem  bgColor={'#7f00ab'}  borderRadius={'10'} padding={5} colSpan={{lg : 2, base : 0}} width={{lg : 'full',md : 'full',base : '60vw'}}>
                  <Heading marginBottom={3} textColor={'white'} fontSize={{lg :'4xl',md : '2xl',base : '2xl'}}>2021 </Heading>
                  <Text textColor={'white'} fontSize={{lg : "16",md : "13",base : '12'}}>I learn about HTML,CSS. And i create a many small project with HTML and CSS</Text> 
              </GridItem>
              <GridItem  bgColor={'#86a1e8'} borderRadius={'10'} padding={5}  width={{lg : 'full',md : 'full',base : '60vw'}}>
                  <Heading marginBottom={3} textColor={'white'} fontSize={{lg :'4xl',md : '2xl',base : '2xl'}}>2022 </Heading>
                  <Text textColor={'white'} fontSize={{lg : "16",md : "13",base : '12'}}>2022 i start learn about javascript. So,i create a project like music player, timer,stopwatch and etc.</Text> 
              </GridItem>
              <GridItem   bgColor={'#ff9eaf'} borderRadius={'10'} padding={5} width={{lg : 'full',md : 'full',base : '60vw'}}>
                  <Heading marginBottom={3} textColor={'white'} fontSize={{lg :'4xl',md : '2xl',base : '2xl'}}>2023 </Heading>
                  <Text textColor={'white'} fontSize={{lg : "16",md : "13",base : '12'}}>I start to learn about backend. So, first i learning PHP programming languange and i create project with PHP languange.After learning PHP, i start to learning node JS,API,http protocol.</Text> 
              </GridItem>
          </Grid>
    
        </Box>
        <Box marginTop={5} >
        </Box>
      </Box>
    </Flex>
    )
}