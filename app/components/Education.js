'use client'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Highlight,
  Spacer,
  
  
} from "@chakra-ui/react";
import Image from "next/image";
import school from "../assets/School.svg";

export default function Education() {
    return (

   
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
    )
}