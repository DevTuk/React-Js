import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import {
  Box,
  Stack,
  Text,
  Image,
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const Cart = () => {
  const { cart, totalCart, removeItems, removeCart, getQuantity } =
    useContext(CartContext);
  const cantidad = getQuantity();
  return (
    <>
      <Flex
        alignSelf={'center'}
        flexDirection={{ base: 'column', sm: 'row' }}
        justify={'center'}
        width={'90%'}
      >
        {cantidad === 0 ? (
          <Box
            backgroundColor='white'
            alignItems='center'
            border='1px solid #c5caff'
            mx={20}
            pl={3}
            pr={3}
            pt={5}
            pb={5}
            rounded={10}
            width={'70%'}
          >
            <Text
              fontWeight={700}
              m={4}
              pb={3}
              alignItems='self-start'
              fontSize={{ base: '1xl', sm: '1xl' }}
              borderBottom='1px solid #c5caff'
            >
              Carrito ({cantidad})
            </Text>
            <Flex flexDirection={'column'} width='100%'>
              <Box
                backgroundColor='white'
                alignItems='center'
                textAlign='center'
                m={20}
                pl={3}
                pr={3}
                pt={5}
                pb={5}
                rounded={10}
              >
                <Text fontWeight={100} fontSize={{ base: '2xl', sm: '3xl' }}>
                  Tu carrito está vacío
                </Text>
                <Text fontWeight={100} fontSize={{ base: '2xl', sm: 'md' }}>
                  ¿No sabés qué comprar? ¡Nuestros productos te esperan!
                </Text>
              </Box>
            </Flex>
          </Box>
        ) : (
          <Box
            backgroundColor='white'
            alignItems='center'
            border='1px solid #c5caff'
            mx={20}
            pl={3}
            pr={3}
            pt={5}
            pb={5}
            rounded={10}
            width={'70%'}
          >
            <Text
              fontWeight={700}
              m={3}
              pb={3}
              alignItems='self-start'
              fontSize={{ base: '1xl', sm: '1xl' }}
              borderBottom='1px solid #c5caff'
            >
              Carrito ({cantidad})
            </Text>
            <Box
              alignItems='center'
              justifyContent='space-between'
              display='flex'
              flexDirection='column'
              backgroundColor='white'
              width={'100%'}
            >
              {cart.map((item) => (
                <Box
                  key={item.id}
                  backgroundColor='white'
                  rounded={10}
                  m={5}
                  width='100%'
                  borderBottom='1px solid #c5caff'
                >
                  <Stack ml={-10} spacing={1} mt={4} mr={0}>
                    <Stack
                      justifyContent='space-around'
                      alignItems='center'
                      spacing={2}
                      m={2}
                      flexDirection={{ base: 'row', sm: 'column' }}
                      width='100%'
                    >
                      <Flex
                        alignItems='center'
                        justifyContent='space-around'
                        display='flex'
                        flexDirection={{ base: 'column', md: 'row' }}
                        width='100%'
                      >
                        <Image
                          height='80px'
                          width='80px'
                          display='flex'
                          alignItems='flex-start'
                          justifyContent='flex-start'
                          rounded={100}
                          src={item.imagen}
                        />
                        <Text fontWeight={700}>{item.nombre}</Text>
                        <Text fontWeight={700}>{item.cantidad}</Text>
                        <Text fontWeight={700}>{item.precio}</Text>
                        <Button
                          variant='solid'
                          size='sm'
                          onClick={() => removeItems(item.id)}
                        >
                          X
                        </Button>
                      </Flex>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>
        )}
        {cantidad === 0 ? (
          ''
        ) : (
          <Flex flexDirection={'column'} width='40%'>
            <Box
              backgroundColor='white'
              border='1px solid #c5caff'
              alignItems='center'
              textAlign='center'
              m={1}
              pl={3}
              pr={3}
              pt={5}
              pb={5}
              rounded={10}
            >
              <Text fontWeight={700} fontSize={{ base: '2xl', sm: '3xl' }}>
                Resumen de Compra
              </Text>

              <Box>
                <TableContainer>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th fontWeight={700}>Imagen</Th>
                        <Th fontWeight={700}>Cantidad</Th>
                        <Th fontWeight={700}>Producto</Th>
                        <Th fontWeight={700}>Precio unitario</Th>
                      </Tr>
                    </Thead>
                  </Table>
                </TableContainer>
                {cart.map((item) => (
                  <TableContainer>
                    <Table>
                      <Tbody key={item.id}>
                        <Tr>
                          <Td>
                            <Image
                              height='50px'
                              width='50px'
                              display='flex'
                              rounded={100}
                              alignItems='flex-end'
                              justifyContent='flex-start'
                              src={item.imagen}
                            />
                          </Td>
                          <Td>{item.cantidad}</Td>
                          <Td>{item.nombre}</Td>
                          <Td>{item.precio}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                ))}
              </Box>
              <Button mt={6} mx={2} onClick={() => removeCart()}>
                Vaciar Carrito
              </Button>
              <Link to='/'>
                <Button mt={6} mx={2}>
                  Seguir Comprando
                </Button>
              </Link>
            </Box>
            <Box
              border='1px solid #c5caff'
              padding={5}
              rounded={10}
              marginTop={5}
              display='flex'
              flexDirection={{ base: 'column', sm: 'row' }}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Text fontWeight={700}>Total: {totalCart()}</Text>
              <Button>Continuar Compra</Button>
            </Box>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Cart;
