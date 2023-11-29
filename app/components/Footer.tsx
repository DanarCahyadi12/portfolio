import { Box, Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <Box width={'100%'}  boxShadow={'md'} padding={5} bgColor={'white'}>
            <Flex width={{md: '85%', base: '90%'}} justifyContent={'space-between'} margin={'auto'} flexDirection={{md: 'row', base: 'column'}}>
                <Box>
                    <Text textAlign= {{md: 'inherit', base: 'center'}} fontSize={{md:'inherit', base: 12}}> © {currentYear} Danar Cahyadi</Text>
                </Box>
                <Box>
                    <Text textAlign= {{md: 'inherit', base: 'center'}} fontSize={{md:'inherit', base: 12}}>
                        Built with: <Link fontWeight={'bold'} href={'https://nextjs.org'}>Next JS</Link> & <Link fontWeight={'bold'} href={'https://chakra-ui.com'}>Chakra UI</Link>
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}