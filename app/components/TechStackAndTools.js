'use client'
import {
  Box,
  Flex,
  Heading,
  GridItem,
  Grid
  
} from "@chakra-ui/react";
import Image from "next/image";
import github from "../assets/github.svg"
import gitlab from "../assets/gitlab.svg"
import git from "../assets/git.svg"
import nextJS from "../assets/next.svg"
import nodeJS from "../assets/nodejs.svg"
import mySQL from "../assets/mysql.png"
import prisma from "../assets/prisma.svg"
export default function TechStackAndTools() {
    return (
        <Flex justifyContent={'space-between'}  width={'full'} padding={10} flexDirection={{md : 'row',base :'column'}} gap={50}>
        <Box width={'full'} backgroundImage={'/ellipse-md-pink.svg'} backgroundPosition={'left'} bgRepeat={'no-repeat'} >

            <Grid   marginTop={10} templateColumns={ {md : '1fr 1fr ',base : '1fr'}} gap={{lg : 10,base : 6}}>
              <GridItem>
              <Heading marginBottom={5}>Tech stack</Heading>
                
                <Grid templateColumns={'1fr 1fr '} gap={10} >

              <GridItem bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'}>
                <Box width={{lg : 130,md : "100px",base :"60px"}} margin={"auto"}> 
                  <Image src={nextJS} />
                  <Heading fontSize={{md : 20, base : 10}} marginTop={1}  textAlign={'center'}>Next JS</Heading>
                </Box>
              </GridItem>
              <GridItem bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'} >
                <Box width={{lg : 75, md :"70px",base : "40px"}} margin={"auto"}>
                  <Image src={nodeJS} />
                  <Heading fontSize={{md : 20, base : 10}} marginTop={1}  textAlign={'center'} >NodeJS</Heading>
                </Box>
              </GridItem>
              <GridItem  bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'}>
                <Box width={{lg : 75,md :"70px",base :"40px"}} margin={"auto"}>
                  <Image src={mySQL}/> 
                  <Heading fontSize={{md : 20, base : 10}} marginTop={1}  textAlign={'center'} >MySQL</Heading>
                </Box>
              </GridItem>
              <GridItem  bgColor={'white'} padding={5} borderRadius={10} shadow={'lg'}>
                <Box width={{lg : 70,md :"70px",base :"40px"}} margin={"auto"}> 
                  <Image src={prisma} />
                  <Heading fontSize={{md : 20, base : 10}} marginTop={1}  textAlign={'center'}>Prisma</Heading>
                </Box>
              </GridItem>
                </Grid>
              </GridItem>

              <GridItem>
              <Heading marginBottom={5}>Tools</Heading>
              <Grid templateColumns={'1fr 1fr'} gap={10}>
                
              <GridItem bgColor={'white'} padding={6} borderRadius={10} shadow={'lg'}>
                
                <Box width={{lg : 75,md : "83px",base :"40px"}} margin={"auto"}> 
                  <Image src={github} />
                  <Heading fontSize={{md : 20, base : 10}} marginTop={2}  textAlign={'center'}>Github</Heading>
                </Box>
              </GridItem>
              <GridItem bgColor={'white'} padding={6} borderRadius={10} shadow={'lg'} >
                <Box width={{lg : 75, md :"83px",base : "40px"}} margin={"auto"}>
                  <Image src={gitlab} />
                  <Heading fontSize={{md : 20, base : 10}} marginTop={2}  textAlign={'center'}>Gitlab</Heading>
                </Box>
              </GridItem>
              <GridItem  bgColor={'white'} padding={6} borderRadius={10} shadow={'lg'}>
                <Box width={{lg : 73,md :"83px",base :"40px"}} margin={"auto"}>
                  <Image src={git}/> 
                  <Heading fontSize={{md : 20, base : 10}} marginTop={2} textAlign={'center'}>Git</Heading>
                </Box>
              </GridItem>
              </Grid>
              </GridItem>
            
            </Grid>
        </Box>
      
      </Flex>
    )
}