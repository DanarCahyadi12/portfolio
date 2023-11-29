import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Icon, Stack, Text,useDisclosure, Link, HStack } from "@chakra-ui/react";
import { Project } from "../interfaces";
import { LiaEyeSolid, LiaGithub } from "react-icons/lia";
import Image from "next/image";
import { ModalComponent } from "./Modal";
import { useState } from "react";
export default function ProjectCard(data: Project) {
    console.log(data.links)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [detailProject, setDetailProject] = useState<Project>({
        title: "",
        description: "",
        tech: "",
        image: "",
        links: [],
    })

    return (
        <>
        <Card width={'100%'}>
            <CardHeader>
              <Image src={data.image} alt={data.title} width={400} height={400}/>
            </CardHeader>
            <CardBody overflowY={'auto'}>
                <Stack gap={3}>
                    <Heading fontSize={{lg: 18, md: 13, base: 20}}>{data.title}</Heading>
                    <Text fontSize={{lg:13, md: 12, base: 17}}>{data.tech}</Text>
                    <HStack>
                        {data.links.map(link => {
                            return (
                             <Link href={link.url}>
                                <Icon fontSize={{md: '2xl', base: 20}} as={link.icon}/>
                             </Link>
                            )
                        })}
                      
                    </HStack>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button width={'full'} onClick={() => {
                    onOpen()
                    setDetailProject({
                        title: data.title,
                        description: data.description,
                        tech: data.tech,
                        image: data.image,
                        links: data.links,
                    })
                }} colorScheme="linkedin" color={'white'} size={{lg: 'md', md: 'sm',base: 'xs'}}><Icon as={LiaEyeSolid}/></Button>
            </CardFooter>
        </Card>
        <ModalComponent data={detailProject} action={{isOpen, onClose}}/>
        </>
    )

}