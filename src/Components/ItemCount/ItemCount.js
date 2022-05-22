import { Text, Flex, Center, Button, Box, Image } from '@chakra-ui/react';
import { useState } from 'react';


const ItemCount = (props) => {
 
  const [count, setCount] = useState(0);
  
 
  const restar = () => {
    if (count > 0){      
     setCount(count - 1);
  }};
  
  const sumar = () => {
    if (count < props.stock){      
    setCount(count + 1);

  }};

  function onAdd () {
    if(count <=0) { alert("El carrito esta vacío")
    }else {
    alert('Agregaste ' + count + ' productos al carrito');
    }
}
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
                    onClick={restar}
                  >
                    -
                  </Button>
                  <Text color='gray.800' ml={5} mr={5}>
                    {count}
                  </Text>
                  <Button
                    variant='solid'
                    size='md'
                    border={1}
                    backgroundColor='pink.300'
                    color='gray.800'
                    onClick={sumar}
                    
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
                onClick={onAdd}
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

export default ItemCount;
