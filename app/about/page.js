'use client'
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Avatar, Flex, Heading,Box, GridItem ,Grid, VStack, Container, Icon,Link,Text,Button} from "@chakra-ui/react";
import { AiFillGithub, AiFillGitlab, AiFillInstagram } from "react-icons/ai";
export default function AboutMe(){
    return (
        <>
        <Box width={'full'} height={'100vh'} bgImage={'/mesh-backround.svg'}>
        <Box width={'70%'} margin={'auto'} marginTop={30} boxShadow={'md'} padding={10} borderRadius={'10'} bgColor={'white'}>
          <Heading marginBottom={6} bgClip={'text'} bgGradient='linear(to-l, #7928CA, #bab8ff)'>Detail about me!</Heading>
          <Grid templateColumns={'1fr 3fr'} gap={10}>
            <GridItem>
                <Avatar src="/user.jpeg" size={'6xl'} borderRadius={'lg'}/>
                <Container marginTop={4}>
                <Flex alignItems={'center'} gap={2} marginLeft={'-5'}>
                    <Icon as={AiFillInstagram} fontSize={25}/>
                    <Link href="https://instagram.com/danarchydii" fontSize={15}>https://instagram.com/danarchydii</Link>
                </Flex>
                <Flex alignItems={'center'} gap={2} marginLeft={'-5'} marginTop={3}>
                    <Icon as={AiFillGithub} fontSize={25}/>
                    <Link href="https://github.com/DanarCahyadi12" fontSize={15}>https://github.com/DanarCahyadi12</Link>
                </Flex>
                <Flex alignItems={'center'} gap={2} marginLeft={'-5'} marginTop={3}>
                    <Icon as={AiFillGitlab} fontSize={25}/>
                    <Link href="https://gitlab.com/DanarCahyadi12" fontSize={15}>https://gitlab.com/DanarCahyadi12</Link>
                </Flex>
                </Container>
            </GridItem>
            <GridItem>
                <Text lineHeight={'7'}>
                    Hello all! i'm Danar Cahyadi. My fullname is I Ketut Danar Cahyadi. So, you can call me Danar. I'm from Bali,Indonesia. And my age now is 18 year old. I' am student at SMK Negeri 1 Denpasar. My major is "Software Engineer" or in indonesia called it "Rekayasa Perangkat Lunak". 
                </Text>

                <Text lineHeight={'7'} marginTop={'30'}>
                    I start learn about programming when i was 14 years old. I've been learning HTML,CSS and JavaScript since I was 14 years old, and I started creating simple projects with HTML,CSS and JavaScript. 
                </Text>

                <Text lineHeight={'7'} marginTop={'30'}>
                    After learning about HTML, CSS and JavaScript, i start learning about backend. So,i learn PHP and create projects with PHP. PHP is my first backend programming languange. After learning PHP, i'm switch  to node JS and i learn about API (Application Programming Interface), http protocol, http status code and etc. 
                </Text>

                <Text lineHeight={'7'} marginTop={'30'}>
                    After that i will learn about fullstack, so i choose Next JS and Node JS for my tech stack. 
                </Text>

                <Link href="/" >
                    <Button marginTop={6} leftIcon={<ArrowBackIcon/>} colorScheme="teal" variant={'outline'}>
                        Back
                    </Button>
                </Link>
            </GridItem>
          </Grid>
        </Box>
        </Box>
        </>
    )
}