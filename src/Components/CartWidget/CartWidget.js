import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Cartwidget = (props) => {
  return (
    <>
      <Flex>
        <Box>
          <FontAwesomeIcon icon={faCartShopping} />
        </Box>
        <Box ml='10px'>{props.valor}</Box>
      </Flex>
    </>
  );
};

export default Cartwidget;
