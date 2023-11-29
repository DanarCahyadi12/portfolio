import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,ModalCloseButton, Stack, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export function ModalComponent({data, action}) {
    return (
        <Modal isOpen={action.isOpen} onClose={action.onClose} size={{md : '2xl' ,base: 'xs'}}>
        <ModalOverlay />
        <ModalContent padding={3}>
          <ModalHeader>
            <Heading fontSize={'2xl'}>
            Detail project
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image style={{margin: "auto"}} src={data.image} alt="project image" width={600} height={600}/>
            <Stack gap={8} marginTop={10}>
              <Heading fontSize={{md: '2xl', base: 'xl'}}>{data.title}</Heading>
              <Box>
                <Text fontWeight={'medium'} fontSize={{md: 'xl', base: 'md'}}>Built using :</Text>
                <Text fontSize={{md: 'xl', base: 'sm'}}>{data.tech}</Text>
              </Box>
              <Box>
                <Text fontWeight={'medium'} fontSize={{md: 'xl', base: 'md'}}>Description:</Text>
                <Text textAlign={'justify'} fontSize={{md: 'xl', base: 'sm'}}>{data.description}</Text>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}