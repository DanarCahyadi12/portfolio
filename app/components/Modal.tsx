import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,ModalCloseButton, Stack, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export function ModalComponent({data, action}) {
    return (
        <Modal isOpen={action.isOpen} onClose={action.onClose} >
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
              <Heading fontSize={'2xl'}>{data.title}</Heading>
              <Box>
                <Text fontWeight={'medium'} fontSize={'xl'}>Built using :</Text>
                <Text>{data.tech}</Text>
              </Box>
              <Box>
                <Text fontWeight={'medium'} fontSize={'xl'}>Description:</Text>
                <Text textAlign={'justify'}>{data.description}</Text>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}