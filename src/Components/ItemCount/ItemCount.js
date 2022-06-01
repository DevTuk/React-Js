import { Text, Flex, Button, Box, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const ItemCount = (props) => {
  const [count, setCount] = useState(0);
  const [btnActivo, setBtnActivo] = useState(false);

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
      setBtnActivo(false);
    }
  };

  const sumar = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
    if (count >= props.stock) {
      setBtnActivo(true);
    }
  };

  const toast = useToast();

  function onAdd() {
    if (count <= 0) {
      toast({
        title: 'Error.',
        description: 'el carrito esta vacío',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
    } else {
      toast({
        title: 'Exitoso',
        description: 'Producto agregado al carrito',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
      setCount(0);
    }
  }

  return (
    <Flex direction='column'>
      <Box>
        <Flex justifyContent='center' align={'center'} m={5}>
          <Button
            variant='solid'
            size='md'
            backgroundColor='#C5CAFF'
            color='gray.800'
            onClick={restar}
          >
            -
          </Button>
          <Text color='gray.800' ml={5} mr={5}>
            {count}
          </Text>
          <Button
            className='btnActivo'
            variant='solid'
            size='md'
            border={1}
            backgroundColor='#C5CAFF'
            color='gray.800'
            onClick={sumar}
            disabled={btnActivo}
          >
            +
          </Button>
        </Flex>
      </Box>
      <Button
        variant='solid'
        size='md'
        color='gray.800'
        backgroundColor='#ffbcde'
        onClick={() => onAdd()}
      >
        Agregar al carrito
      </Button>
    </Flex>
  );
};
export default ItemCount;
