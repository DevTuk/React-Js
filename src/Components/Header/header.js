import { Flex, Stack } from '@chakra-ui/react'
const Header = () => {
 return (
    <>
    <Flex h='80px'justifyContent='space-around' alignItems='center' backgroundColor='pink'>   
        <img src={require("./logo.png")} style={{height:50, marginLeft:50}} alt="" />
        <Stack direction={{base:'column', sm:"row"}} mt={{base:20, sm:0}} spacing='20px'>
            <a href="/">Productos</a>
            <a href="/">Nosotros</a>
            <a href="/">Contacto</a>
            <a href="/">Carrito</a>
        </Stack>
    </Flex>
    </>
    )
}
 
export default Header;
