'use client'
import { Box, Grid, GridItem, Heading, Text} from "@chakra-ui/react"
import React from "react"
import js from '../assets/js.svg'
import Image from "next/image"
import golang from '../assets/golang.png'
import mySQL from '../assets/mysql.png'
import git from '../assets/git.svg'
export default function Skill() {
    return (
        <Box id="skill" width={'100%'} padding={5} margin={'auto'} marginTop={80} bgImage={'/img-2.svg'} bgRepeat={'no-repeat'} bgPosition={'right'}>
         <Heading textAlign={'center'}>
                SKILLS
         </Heading>
           <Grid templateColumns={{lg: 'repeat(5,2fr)', md: 'repeat(3,2fr)',base: 'repeat(2,1fr)' }} marginTop={20} gap={{md: 10, base: 5}}>
             <GridItem >
                <Box  _hover={{transform: 'scale(1.1)'}} transition={'100ms ease-out'} bgColor={'white'}  padding={5} textAlign={'center'}    borderRadius={'lg'}>
                    <Image src={js} alt="Javascript" width={70} style={{margin: 'auto'}} height={70} />
                    <Text fontWeight={'black'} marginTop={5} fontSize={{lg: 18, md: 16, base: 15}}>Javascript</Text>
                </Box>
             </GridItem>                                              
             <GridItem >
                <Box _hover={{transform: 'scale(1.1)'}} transition={'100ms ease-out'} bgColor={'white'}  padding={5} textAlign={'center'}    borderRadius={'lg'}>
                    <Image src={golang} alt="Golang" width={150} style={{margin: 'auto'}}/>
                    <Text fontWeight={'black'} marginTop={5} fontSize={{lg: 18, md: 16, base: 15}}>Golang</Text>
                </Box>
             </GridItem>                                          
             <GridItem >
                <Box _hover={{transform: 'scale(1.1)'}} transition={'100ms ease-out'} bgColor={'white'}  padding={5} textAlign={'center'}    borderRadius={'lg'}>
                    <Image src={mySQL} alt="My SQL" width={70} style={{margin: 'auto'}}/>
                    <Text fontWeight={'black'} marginTop={5} fontSize={{lg: 18, md: 16, base: 15}}>MySQL</Text>
                </Box>
             </GridItem>                        
             <GridItem >
                <Box _hover={{transform: 'scale(1.1)'}} transition={'100ms ease-out'} bgColor={'white'}  padding={5} textAlign={'center'}    borderRadius={'lg'}>
                    <Image src={git} alt="GIT" width={70} style={{margin: 'auto'}}/>
                    <Text fontWeight={'black'} marginTop={5} fontSize={{lg: 18, md: 16, base: 15}}>Git</Text>
                </Box>
             </GridItem>                        
           </Grid>
        </Box>

    )
}