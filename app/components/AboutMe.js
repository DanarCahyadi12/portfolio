'use client'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  Heading,
  Highlight,
  Spacer,
  GridItem,
  Grid
  
} from "@chakra-ui/react";
import Image from "next/image";
import school from "../assets/School.svg";
import roadmap from "../assets/roadmap.svg";
import github from "../assets/github.svg"
import gitlab from "../assets/gitlab.svg"
import git from "../assets/git.svg"
import nextJS from "../assets/next.svg"
import nodeJS from "../assets/nodejs.svg"
import mySQL from "../assets/mysql.png"
import prisma from "../assets/prisma.svg"



export default function AboutMe() {
  return (
    <>
     
      
        <Flex
          gap={10}
          justifyContent={"space-between"}
          width={'full'}
          flexDirection={{base : 'column',md : 'row'}}
          marginTop={{md : 100,base : 40}}
          
          
        
        >
          <Box  padding={5}  width={'full'}>
            <Heading marginLeft={2} marginBottom={2}>
              <Highlight
                query={"Education"}
                styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
              >
                Education
              </Highlight>
            </Heading>
            <Accordion
              allowToggle
              marginTop={10}
            >
              <AccordionItem>
                <h2>
                  <AccordionButton 
                      display={'flex'}
                      justifyContent={'space-between'}
                  >
                    <Heading
                      fontSize={{ lg: 25, md: 20, base: 15 }}
                      fontWeight={"medium"}
                    >
                      Elementary School
                    </Heading>
                    <AccordionIcon fontSize={40} />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  I attended elementary school at SD 21 Pemecutan, Bali. I
                  completed my elementary education for 6 years. During
                  elementary school, I had no knowledge about the IT world.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                      display={'flex'}
                      justifyContent={'space-between'}
                  >
                    <Heading fontSize={{ lg: 25, md: 20, base: 15 }}fontWeight={"medium"}>
                      Junior HighSchool
                    </Heading>
                    <AccordionIcon fontSize={40} />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  I attended junior high school at SMP PGRI 5 Denpasar. In the
                  3rd grade, I began to receive education on IT, including HTML,
                  Microsoft Word, Microsoft Excel, and etc. It was during this
                  time that I became interested in the programming.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                      display={'flex'}
                      justifyContent={'space-between'}
                  >
                    <Heading fontSize={{ lg: 25, md: 20, base: 15 }}fontWeight={"medium"}>
                      Vacational HighSchool
                    </Heading>
                    <AccordionIcon fontSize={40} />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  I choose to attend a Vocational High School because of my
                  interest in programming. I attended SMK Negeri 1 Denpasar. The
                  program I chose was Software Engineering. I gained a lot of
                  knowledge at this school, starting from HTML, CSS, JavaScript,
                  PHP, and so on. I completed my vocational high school
                  education for 3 years.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Spacer />
          <Box padding={2}  width={'full'} paddingTop={{base :0 ,md :20}}> 
            <Image src={school} />
          </Box>
        </Flex>
      
      
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

      <Flex justifyContent={'space-between'}  width={'full'} padding={10} flexDirection={{md : 'row',base :'column'}} gap={50}>
        <Box width={'full'} backgroundImage={'/ellipse-md-pink.svg'} backgroundPosition={'left'} bgRepeat={'no-repeat'} >
          <Heading lineHeight={'tall'}>
            <Highlight query={'Tech'}   styles={{ px: "2", py: "1", rounded: "full", bg: "#86a1e8",textColor :'white' }}>
              Tech stack
            </Highlight>
            </Heading>  
            <Grid   marginTop={10} templateColumns={'0.5fr 0.5fr '} gap={{lg : 10,base : 6}}>
              <GridItem bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'}>
                <Box width={{lg : 130,md : "100px",base :"60px"}} margin={"auto"}> 
                  <Image src={nextJS} />
                </Box>
              </GridItem>
              <GridItem bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'} >
                <Box width={{lg : 75, md :"70px",base : "40px"}} margin={"auto"}>
                  <Image src={nodeJS} />
                </Box>
              </GridItem>
              <GridItem  bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'}>
                <Box width={{lg : 75,md :"70px",base :"40px"}} margin={"auto"}>
                  <Image src={mySQL}/> 
                </Box>
              </GridItem>
              <GridItem  bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'}>
                <Box width={{lg : 70,md :"70px",base :"40px"}} margin={"auto"}> 
                  <Image src={prisma} />
                </Box>
              </GridItem>
            </Grid>
        </Box>
        <Box width={'full'}> 
        <Heading lineHeight={'tall'}>
            <Highlight query={'Tech'}   styles={{ px: "2", py: "1", rounded: "full", bg: "#86a1e8",textColor :'white' }}>
              Tools
            </Highlight>
            </Heading>  
            <Grid   marginTop={10} templateColumns={'0.5fr 0.5fr '} gap={{lg : 10,base : 6}}>
              <GridItem bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'}>
                <Box width={{lg : "87px",md : "83px",base :"40px"}} margin={"auto"}> 
                  <Image src={github} />
                </Box>
              </GridItem>
              <GridItem bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'} >
                <Box width={{lg : "87px", md :"83px",base : "40px"}} margin={"auto"}>
                  <Image src={gitlab} />
                </Box>
              </GridItem>
              <GridItem  bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'}>
                <Box width={{lg : "87px",md :"83px",base :"40px"}} margin={"auto"}>
                  <Image src={git}/> 
                </Box>
              </GridItem>
            
            </Grid>
        </Box>
      </Flex>
    </>
  );
}
