import { Flex, Stack} from '@chakra-ui/react'
import Logo from '../Logo/logo.js'

const Navbar = () => {
 return (
    <>
    <Flex h='80px'justifyContent='space-around' px='40px' alignItems='center' backgroundColor='pink'>   
        <Logo />
        <Stack direction={{base:'column', sm:"row"}} mt={{base:60, sm:0}} spacing='20px'>
            <a href="/">Productos</a>
            <a href="/">Nosotros</a>
            <a href="/">Contacto</a>
            <a href="/">Carrito</a>
        </Stack>
    </Flex>
    </>
    )
}
 
export default Navbar;
