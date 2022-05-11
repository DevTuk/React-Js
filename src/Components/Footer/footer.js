import { Container, Stack } from '@chakra-ui/react'
const Footer = () => {
    return ( 
        <>
        <Stack h='80px' backgroundColor='pink'> 
            <Container maxW='container.sm' verticalAlign='middle' mt='30px'>
                <p>© 2022 Copyright  |  Diego Barros Sofio | Com31190 React JS</p>    
            </Container>            
        </Stack>
        </>
     );
}
export default Footer;
