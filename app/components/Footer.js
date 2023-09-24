import { Box ,Text} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box padding={4}  marginTop={2}>
            <Text textAlign={'center'} fontSize={{md : 'inherit',base : '2xs'}}>© Copyright 2023 Danar Cahyadi </Text>          
        </Box>
    )
}