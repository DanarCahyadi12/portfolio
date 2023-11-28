import React from "react"
import { Box, Flex, Avatar, Heading, Highlight,Text } from "@chakra-ui/react"

export default function About() {
    return (
        <Box id="about" width={'85%'}  margin={'auto'} marginTop={40} bgImage={'/UTube.svg'} bgRepeat={'no-repeat'} bgPosition={'right'}>
          <Flex gap={20} flexDirection={{md: 'row', base: 'column'}}>
            <Box>
              <Avatar src={"/user-backround.svg"} size={"6xl"} borderRadius={'xl'}/>
            </Box>
            <Box width={{md: '80%', base: '100%'}} margin={'auto'}>
              <Heading textAlign={'center'}>
                <Highlight query={'About me'} styles={{py: 2, px: 4, rounded:'full', bgColor: 'red.100'}}>
                    ABOUT ME
                </Highlight>
              </Heading>
              <Text fontSize={{lg: 20, md: 15, base: 13}} marginTop={10} textAlign={'justify'}> 
              Hello everyone! 👋 Let me introduce myself, my name is I Ketut Danar Cahyadi. You can call me Danar. I am a software engineering student at SMK Negeri 1 Denpasar. I started learning HTML during Junior High School. The first programming language I learned was Javascript. I like Javascript because it can be used for both FrontEnd and Backend. Currently, I have switched from Javascript to Typescript.
              </Text>
              <Text fontSize={{lg: 20, md: 15, base: 13}} marginTop={10}  textAlign={'justify'}>
              I have experience as a backend developer at CV. Avatar Solution. I also have experience in creating automation testing using Selenium and Javascript at PT. Foxbyte Global Inovasi. I gained a lot of knowledge during my internship.
              </Text>
              <Text fontSize={{lg: 20, md: 15, base: 13}} marginTop={10}  textAlign={'justify'}>
              I am interested in becoming a Backend Developer. I have studied rest API, Prisma ORM, creating unit testing, ensuring clean code, API documentation, and more. I use NestJS and MySQL to create rest API. Besides, I have participated in several training sessions at Dicoding Academy to become a Backend Developer.
              </Text>
            </Box>
          </Flex>
        </Box>
    )
}