import { Flex, Stack, StackDivider } from '@chakra-ui/react';
import Logo from '../Logo/logo.js';
import Cartwidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <>
      <Flex
        m={5}
        h='80px'
        justifyContent='space-around'
        px='40px'
        alignItems='center'
        backgroundColor='#FFBCDE'
        rounded={50}
        position='sticky'
        top= '1'
        zIndex={1}
      >
        <Logo />

        <Stack
          direction={{ base: 'column', sm: 'row' }}
          divider={<StackDivider borderColor='black' />}
          mt={{ base: 60, sm: 0 }}
          spacing='6'
        >
          <a href='/'>Productos</a>
          <a href='/'>Nosotros</a>
          <a href='/'>Contacto</a>
          <a href='/'>Carrito</a>
          <Cartwidget />
        </Stack>
      </Flex>
    </>
  );
};

export default Navbar;
