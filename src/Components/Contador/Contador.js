import { Text, Flex, Center, Button, Box, Image } from '@chakra-ui/react';
const CountFunction = (props) => {
  return (
    <Flex direction='column' h='800px'>
      <Text
        style={{ color: props.color }}
        mt='10px'
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
      >
        Soy un contador en una Card
      </Text>
      <Center>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          p={10}
        >
          <Box
            bg='#ffffff'
            borderRadius='lg'
            width='sm'
            minHeight='sm'
            border='1px solid lightgrey'
            overflow='hidden'
            color='blackAlpha.500'
            textAlign='center'
            backgroundColor='gray.300'
            fontWeight='bold'
          >
            <Box>
              <Image
                size='100px'
                fallbackSrc='https://via.placeholder.com/150'
                src='https://picsum.photos/150'
                width='100%'
                height='auto'
                minHeight='245px'
                borderRadius='lg'
              />
            </Box>
            <Box p={5} pb={8} textAlign='center' color='gray.800'>
              <Text fontWeight='bold' fontSize='xl' color='gray.800'>
                Producto
              </Text>
              <Text fontSize='sm' mb={3} color='gray.800'>
                $6500
              </Text>
              <Box>
                <Flex justifyContent='center' alignItems='center' m={5}>
                  <Button
                    variant='solid'
                    size='md'
                    backgroundColor='pink.300'
                    color='gray.800'
                    onClick={
                      props.valor <= 1
                        ? console.log('no se puede restar')
                        : props.restamos
                    }
                  >
                    -
                  </Button>
                  <Text color='gray.800' ml={5} mr={5}>
                    {props.valor}
                  </Text>
                  <Button
                    variant='solid'
                    size='md'
                    border={1}
                    backgroundColor='pink.300'
                    color='gray.800'
                    onClick={
                      props.valor === props.stock
                        ? console.log('stock máximo seleccionado')
                        : props.sumamos
                    }
                  >
                    +
                  </Button>
                </Flex>
              </Box>
              <Button
                variant='solid'
                size='md'
                color='gray.800'
                colorScheme='whatsapp'
              >
                Agregar al carrito
              </Button>
            </Box>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
};

export default CountFunction;
