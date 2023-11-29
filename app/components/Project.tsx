import { Box, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/react";
import ProjectCard from './Project-card';
import { projects } from "../data/project";
export default function Project() {
   
    return(
        <>
         <Box id="projects" padding={7} width={'100%'}margin={'auto'} marginTop={80} bgImage={'/project-mesh.svg'} bgRepeat={'no-repeat'} bgPosition={'center'}>
            <Heading textAlign={'center'} marginBottom={100}>PROJECTS</Heading>
            <Grid templateColumns={{lg: 'repeat(4,1fr)', md: 'repeat(3,1fr)', base: 'repeat(1,1fr)'}} gap={4}>
                {projects.map(project => {
                    return (
                        <GridItem>
                          <ProjectCard title={project.title} description={project.description} tech={project.tech} image={project.image} links={project.links}/>
                        </GridItem>
                        )
                    })}
            </Grid>
         </Box>
        </>
    )
}