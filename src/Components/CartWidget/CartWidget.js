import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const Cartwidget = (props) => {
  const { getQuantity } = useContext(CartContext);
  const cantidad = getQuantity(props.product);
  return (
    <>
      <Flex>
        <Box>
          <FontAwesomeIcon icon={faCartShopping} />
        </Box>
        <Box ml='10px'>{cantidad}</Box>
      </Flex>
    </>
  );
};

export default Cartwidget;
