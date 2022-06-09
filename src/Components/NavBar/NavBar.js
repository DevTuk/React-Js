import {
  Flex,
  Box,
  Stack,
  StackDivider,
  MenuItemOption,
  MenuButton,
  MenuList,
  Menu,
  MenuDivider,
} from '@chakra-ui/react';
import Logo from '../Logo/logo.js';
import Cartwidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Box
        m={5}
        h='80px'
        px='40px'
        alignItems='center'
        backgroundColor='#FFBCDE'
        rounded={50}
        position='sticky'
        top='1'
        display='flex'
        justifyContent='space-around'
        zIndex={1}
      >
        <Link to='/'>
          <Logo />
        </Link>
        <Flex justifyContent='space-around'>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            divider={<StackDivider borderColor='black' />}
            mt={{ base: 60, sm: 0 }}
            spacing='6'
          >
            <Menu closeOnSelect={true}>
              <MenuButton>Categorias</MenuButton>
              <MenuList
                backgroundColor='#FFBCDE'
                border='1px solid #C5CAFF'
                minWidth='240px'
              >
                <MenuItemOption>
                  <Link to='/category/buzos'>Buzos</Link>
                </MenuItemOption>
                <MenuDivider />
                <MenuItemOption>
                  <Link to='/category/remeras'>Remeras</Link>
                </MenuItemOption>
                <MenuDivider />
                <MenuItemOption>
                  <Link to='/category/pantalones'>Pantalones</Link>
                </MenuItemOption>
              </MenuList>
            </Menu>

            <Link to='/'>Nosotros</Link>
            <Link to='/'>Contacto</Link>
            <Link to='/cart'>
              <Cartwidget />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
