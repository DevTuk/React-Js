import {
  Text,
  Box,
  Image,
  AspectRatio,
  Skeleton,
  useBreakpointValue,
} from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';

const Items = (props) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      p={4}
      m={5}
    >
      <Box
        bg='#ffffff'
        width='sm'
        minHeight='sm'
        overflow='hidden'
        // color='blackAlpha.500'
        textAlign='center'
        bgGradient='linear(to-b, green.300, white)'
        fontWeight='bold'
        rounded={50}
      >
        <AspectRatio ratio={4 / 5}>
          <Image
            src={props.imagen}
            alt={props.nombre}
            draggable='false'
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
            roundedBottom={40}
          />
        </AspectRatio>

        <Box p={4} pb={6} textAlign='center' color='gray.800'>
          <Text fontWeight='bold' fontSize='xl' color='gray.800'>
            {props.nombre}
          </Text>
          <Text fontSize='sm' mb={3} color='gray.800'>
            {props.precio}
          </Text>
          <Text fontSize='sm' mb={3} color='gray.800'>
            stock: {props.stock}
          </Text>
        </Box>
        <ItemCount stock={props.stock} />
      </Box>
    </Box>
  );
};

export default Items;