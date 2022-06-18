import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import {
  Box,
  Text,
  Image,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const CartDetail = () => {
  const { cart, totalCart } = useContext(CartContext);

  return (
    <Flex flexDirection={'column'} mt={8} width='40%' mx={200}>
      <Box
        backgroundColor='white'
        // border='1px solid #c5caff'
        alignItems='center'
        textAlign='center'
        ml={0}
        pl={1}
        pr={1}
        pt={1}
        pb={1}
        rounded={10}
      >
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
        {/* <Button mt={6} mx={2} onClick={() => removeCart()}>
          Vaciar Carrito
        </Button>
        <Link to='/'>
          <Button mt={6} mx={2}>
            Seguir Comprando
          </Button>
        </Link> */}
      </Box>
      <Box
        // border='1px solid #c5caff'
        padding={5}
        rounded={10}
        marginTop={5}
        display='flex'
        flexDirection={{ base: 'column', sm: 'row' }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Text fontWeight={700}>Total: {totalCart()}</Text>
        {/* <Button>
          <Link to='/Formulario'>Continuar Compra</Link>
        </Button> */}
      </Box>
    </Flex>
  );
};

export default CartDetail;
