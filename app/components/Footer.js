import { Box ,Text} from "@chakra-ui/react";

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <Box padding={4}  marginTop={2}>
            <Text textAlign={'center'} fontSize={{md : 'inherit',base : '2xs'}}>© Copyright {currentYear} Danar Cahyadi </Text>          
        </Box>
    )
}