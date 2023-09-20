'use client'
import {

  Box,
  Link,
  Heading,
  Hide,
  Show,
  Menu,
  MenuButton,
  Button,
  Icon,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box
      padding={5}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      position={"relative"}
      
    >
      <Box width={"70%"}>
        <Heading
          fontSize={{ lg: "3xl", md: "2xl", base: "1xl" }}
          fontWeight={"black"}
          textDecoration={"none"}
        >
          Danar Cahyadi
        </Heading>
      </Box>
      <Show above="md">
        <Box width={"80%"} display={"flex"} justifyContent={"end"} gap={10}>
          <Link _hover={{ textDecoration: "none" }}>About me</Link>
          <Link _hover={{ textDecoration: "none" }}>My project</Link>
          <Link _hover={{ textDecoration: "none" }}>Contact me</Link>
        </Box>
      </Show>
      <Hide above="md">
        <Box>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton as={Button}>
                    {!isOpen ? <Icon as={HamburgerIcon} /> : <Icon as={CloseIcon} />}
                  
                </MenuButton>
                <MenuList>
                  <MenuItem _hover={{textColor: 'black'}}>
                    <Link _hover={{ textDecoration: "none" }} >About me</Link>
                  </MenuItem>
                  <MenuItem  _hover={{textColor: 'black'}}>
                    <Link _hover={{ textDecoration: "none" }}>My project</Link>
                  </MenuItem>
                  <MenuItem  _hover={{textColor: 'black'}}>
                    <Link _hover={{ textDecoration: "none" }}>Contact me</Link>
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          </Box>
      </Hide>
    </Box>
  );
}
