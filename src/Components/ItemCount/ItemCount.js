import { Text, Flex, Button, Box } from '@chakra-ui/react';
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

  function onAdd() {
    if (count <= 0) {
      alert('El carrito esta vacío');
    } else {
      alert('Agregaste ' + count + ' productos al carrito');
    }
  }
  return (
    <Flex direction='column' marginTop='-12'>
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
            className='btnActivo'
            variant='solid'
            size='md'
            border={1}
            backgroundColor='pink.300'
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
        colorScheme='whatsapp'
        onClick={() => onAdd(setCount(0))}
      >
        Agregar al carrito
      </Button>
    </Flex>
  );
};
export default ItemCount;
