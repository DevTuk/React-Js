import {
  Text,
  Box,
  Image,
  AspectRatio,
  Skeleton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Items = ({ id, nombre, imagen, precio }) => {
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

        <Box p={4} pb={6} textAlign='center' color='gray.800'>
          <Text fontWeight='bold' fontSize='xl' color='gray.800'>
            {nombre}
          </Text>
          <Text fontSize='md' mb={3} color='gray.800'>
            {precio}
          </Text>
        </Box>
        <Box
          fontSize='sm'
          _hover={'xl'}
          w='100%'
          size='md'
          h={10}
          p={2}
          color='gray.800'
          backgroundColor='#C5CAFF'
        >
          <Link to={`/detail/${id}`}>
            Ver detalles
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Items;
