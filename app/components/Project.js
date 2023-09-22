import { Flex, Heading, Box, Text, Button, Link } from "@chakra-ui/react";
import Image from "next/image";
import search from "../assets/search.png";
import netsound from "../assets/netsound.png";
export default function Project() {
  return (
    <>
    <Box bgImage={'/mesh-backround.svg'} bgSize={{md : 'unset',base :'cover'}}  bgPosition={{md : 'unset',base : 'center'}}>
      <Heading
        fontSize={{ lg: 60, md: 50, base: 40 }}
        marginTop={{ md: 20, base: 10 }}
        textAlign={'center'} 
        >
        Project
      </Heading>


      <Flex padding={5} width={'full'} gap={10} justifyContent={"center"} flexDirection={{md : 'row',base : 'column'}}>
        <Box width={ {lg : "30%",md : 'full',base :'full'}} shadow={"lg"} bgColor={'white'} borderRadius={10}>
          <Box>
            <Image src={search} />
          </Box>
          <Box padding={5}>
            <Heading fontSize={ {lg : 25,md : 20,base : 15}} textAlign={"left"} marginBottom={10}>
              Website-based tuition fee payment system
            </Heading>
            <Link href="https://github.com/DanarCahyadi12/pembayaran-spp">
              <Button colorScheme="cyan" textColor={"white"}  size={{md : 'md',base : 'sm'}}>
                Get repo
              </Button>
            </Link>
          </Box>
        </Box>
        <Box width={ {lg : "30%",md : 'full',base :'full'}} shadow={"lg"} bgColor={'white'}  borderRadius={10}>
          <Box>
            <Image src={netsound} />
          </Box>
          <Box padding={5}>
            <Heading fontSize={{lg : 25,md : 20,base : 15}} textAlign={"left"} marginBottom={10}>
              Music player website using spotify API
            </Heading>
            <Link href="https://github.com/DanarCahyadi12/netsound">
              <Button colorScheme="cyan" textColor={"white"} size={{md : 'md',base : 'sm'}}>
                Get repo
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
    </>
  );
}
