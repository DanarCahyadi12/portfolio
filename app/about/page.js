'use client'
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Avatar, Flex, Heading,Box,Icon,Link,Text,Button} from "@chakra-ui/react";
import { AiFillGithub, AiFillGitlab, AiFillInstagram } from "react-icons/ai";
export default function AboutMe(){
    return (
        <>
        <Box width={'full'} height={{lg : '96vh', base : 'inherit'}} bgImage={'/mesh-backround.svg'}>
        <Box width={{lg : '70%',base : '95%'}}  margin={'auto'} marginTop={{lg : 30, base : 10}} boxShadow={'md'} padding={10} borderRadius={'10'} bgColor={'white'}>
          <Heading marginBottom={6} bgClip={'text'} bgGradient='linear(to-l, #7928CA, #bab8ff)'>About me!</Heading>
          <Flex  gap={10} flexDirection={{lg : "row",base : 'column'}}>
            <Box width={ {lg : '50%',base :'full'} }>
                <Avatar src="/user.jpeg" width={{lg : '25vw', base :'full' }} height={ {lg : '25vw', base : '50vw'}}  borderRadius={'lg'}/>

                <Box marginTop={4}>
                <Flex alignItems={'center'} gap={2} justifyContent={'start'}>
                    <Icon as={AiFillInstagram} fontSize={25}/>
                    <Link href="https://instagram.com/danarchydii" fontSize={ {lg : 15,base :12}}>https://instagram.com/danarchydii</Link>
                </Flex>
                <Flex alignItems={'center'} gap={2}  justifyContent={'start'} marginTop={3}>
                    <Icon as={AiFillGithub} fontSize={25}/>
                    <Link href="https://github.com/DanarCahyadi12" fontSize={{lg : 15,base :12}}>https://github.com/DanarCahyadi12</Link>
                </Flex>
                <Flex alignItems={'center'} gap={2}  justifyContent={'start'} marginTop={3}>
                    <Icon as={AiFillGitlab} fontSize={25}/>
                    <Link href="https://gitlab.com/DanarCahyadi12" fontSize={{lg : 15,base :12}}>https://gitlab.com/DanarCahyadi12</Link>
                </Flex>
                </Box>
            </Box>
            <Box>

            <Box maxHeight={{lg : '70vh',base :'50vh'}} overflowY={'auto'}>
                <Text lineHeight={'7'} fontSize={{lg : 'inherit',base : '13px'}}>
                    Hello all! i'm Danar Cahyadi. My fullname is I Ketut Danar Cahyadi. So, you can call me Danar. I'm from Bali,Indonesia. And my age now is 18 year old. I' am student at SMK Negeri 1 Denpasar. My major is "Software Engineer" or in indonesia called it "Rekayasa Perangkat Lunak". 
                </Text>

                <Text lineHeight={'7'} marginTop={'30'}  fontSize={{lg : 'inherit',base : '13px'}}>
                    I start learn about programming when i was 14 years old. I've been learning HTML,CSS and JavaScript since I was 14 years old, and I started creating simple projects with HTML,CSS and JavaScript. 
                </Text>

                <Text lineHeight={'7'} marginTop={'30'}  fontSize={{lg : 'inherit',base : '13px'}}>
                    After learning about HTML, CSS and JavaScript, i start learning about backend. So,i learn PHP and create projects with PHP. PHP is my first backend programming languange. After learning PHP, i'm switch  to node JS and i learn about API (Application Programming Interface), http protocol, http status code and etc. 
                </Text>

                <Text lineHeight={'7'} marginTop={'30'}  fontSize={{lg : 'inherit',base : '13px'}}>
                    After that i will learn about fullstack, so i choose Next JS and Node JS for my tech stack. 
                </Text>
              

            </Box>
            <Link href="/">
                <Button leftIcon={<ArrowBackIcon/>} variant={'outline'} marginTop={5} colorScheme="teal">Back</Button>
            </Link>
            </Box>
          </Flex>
        </Box>
        </Box>
        </>
    )
}