import { Text, Box, Image } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';

const Card = (props) => {
    return ( 
     
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          p={10}
            >
          <Box
            bg='#ffffff'
            borderRadius='xl'
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
                src={props.imagen}
                width='100%'
                height='auto'
                minHeight='245px'
                borderRadius='xl'
              />
            </Box>
            <Box p={5} pb={8} textAlign='center' color='gray.800'>
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
            <ItemCount stock={props.stock}/>
            </Box>
        </Box>
             
    );
}
 
export default Card;