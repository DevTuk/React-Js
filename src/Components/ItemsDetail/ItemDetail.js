import {
  AspectRatio,
  Container,
  Stack,
  Button,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  useToast,
  useColorModeValue,
  Skeleton,
  useBreakpointValue,
} from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import CartContext from '../../Context/CartContext';

const ItemDetail = ({ id, stock, imagen, nombre, precio, descripcion }) => {
  const [cantidad, setCantidad] = useState(0); //en cantidad se almacena la cantidad de productos que se van a comprar, proveniente de ItemCount.
  const toast = useToast();
  const { addItem, getProduct } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    toast({
      title: 'Exitoso',
      description: 'Producto agregado al carrito',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'bottom-right',
    });
    setCantidad(cantidad);
    addItem({ id, stock, imagen, nombre, precio, descripcion, cantidad });
  };

  return (
    <Container maxW={'7xl'} border='1px solid #c5caff' rounded='50'>
      <Stack
        align={'center'}
        textAlign={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          marginRight={5}
        >
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('#ffbcde', '#ffbcde')}
          />
          <Box
            position={'relative'}
            bg='#ffffff'
            width='sm'
            minHeight='sm'
            overflow='hidden'
            textAlign='center'
            bgGradient='linear(to-b, green.300, white)'
            fontWeight='bold'
            rounded={50}
          >
            <AspectRatio ratio={3 / 3}>
              <Image
                src={imagen}
                alt={nombre}
                draggable='false'
                fallback={<Skeleton />}
                borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
                roundedBottom={40}
              />
            </AspectRatio>
          </Box>
        </Flex>
        <Stack
          marginLeft={5}
          align={'center'}
          flex={1}
          spacing={{ base: 5, md: 10 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#c5caff',
                zIndex: -1,
              }}
            >
              {nombre}
            </Text>
            <br />
            <Text marginLeft={5} as={'span'} color={'#c5caff'}>
              {precio}
            </Text>
          </Heading>

          <Text color={'gray.500'}>{descripcion}</Text>
          <Text color={'gray.500'} marginLeft={5}>
            Stock Disponible : {stock}
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            {cantidad > 0 ? (
              <Flex>
                <Link to='/cart'>
                  {' '}
                  <Button
                    variant='solid'
                    size='md'
                    color='gray.800'
                    backgroundColor='#ffbcde'
                    mx={3}
                  >
                    Ir al carrito
                  </Button>
                </Link>
                <Link to='/'>
                  {' '}
                  <Button
                    variant='solid'
                    size='md'
                    color='gray.800'
                    backgroundColor='#A9F88B'
                  >
                    Seguir comprando
                  </Button>
                </Link>
              </Flex>
            ) : (
              <ItemCount
                stock={stock}
                onAdd={handleOnAdd}
                initial={getProduct(id)?.cantidad}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox='0 0 578 440'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z'
        fill='currentColor'
      />
    </Icon>
  );
};

export default ItemDetail;
