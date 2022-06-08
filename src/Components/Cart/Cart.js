import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Box, Stack, Text, Image, Button, Flex } from '@chakra-ui/react';

const Cart = () => {
  const { cart, totalCart, removeItems, removeCart } = useContext(CartContext);

  return (
    <>
      <Flex
        alignSelf={'center'}
        flexDirection={{ base: 'column', sm: 'row' }}
        justify={'center'}
        width={'90%'}
      >
        <Box
          alignItems='center'
          justifyContent='space-between'
          display='flex'
          flexDirection='column'
          backgroundColor='white'
          px='100px'
          width={'100%'}
        >
          {cart.map((item) => (
            <Box
              key={item.id}
              backgroundColor='white'
              rounded={10}
              border='1px solid #c5caff'
              m={1}
              pl={3}
              pr={3}
              pt={5}
              pb={5}
              width='100%'
            >
              <Stack ml={4} spacing={2} mt={4} mr={4}>
                <Stack
                  justifyContent='space-around'
                  alignItems='center'
                  spacing={2}
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
                      height='100px'
                      width='100px'
                      display='flex'
                      alignItems='flex-end'
                      justifyContent='flex-start'
                      src={item.imagen}
                    />
                    <Text>{item.nombre}</Text>
                    <Text>{item.cantidad}</Text>
                    <Text>{item.precio}</Text>
                    <Button
                      variant='solid'
                      size='md'
                      onClick={() => removeItems(item.id)}
                    >
                      Borrar
                    </Button>
                  </Flex>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Box>

        <Flex flexDirection={'column'} width='50%'>
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
            <Text fontWeight={800} fontSize={{ base: '2xl', sm: '3xl' }}>
              Detalle de Compra
            </Text>

            <Box>
              {cart.map((item) => (
                <Box
                  key={item.id}
                  display='flex'
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='space-between'
                  borderBottom={'1px solid #c5caff'}
                  m={2}
                >
                  {' '}
                  <Text>{item.cantidad}</Text>
                  <Text>{item.nombre}</Text>
                  <Text>{item.precio}</Text>
                </Box>
              ))}
            </Box>
            <Button mt={6} onClick={() => removeCart()}>
              Vaciar Carrito
            </Button>
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
            <Text>Total: {totalCart()}</Text>
            <Button>Comprar</Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Cart;
