import { Flex, Stack } from '@chakra-ui/react';
import Logo from '../Logo/logo.js';
import Cartwidget from '../CartWidget/CartWidget';


const Navbar = (props) => {
  return (
    <>
      <Flex
        h='80px'
        justifyContent='space-around'
        px='40px'
        alignItems='center'
        backgroundColor='pink'
      >
        <Logo />
        
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          mt={{ base: 60, sm: 0 }}
          spacing='20px'
        >
          <a href='/'>Productos</a>
          <a href='/'>Nosotros</a>
          <a href='/'>Contacto</a>
          <a href='/'>Carrito</a>
          <Cartwidget/>
        </Stack>
      </Flex>
    </>
  );
};

export default Navbar;
