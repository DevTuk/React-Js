import { Center } from '@chakra-ui/react';



const ItemListContainer = (props) => {
  return (
    <>
      <Center h='200' bg='gray.800' color='white' fontSize={100}>
        {props.greeting}
      
      </Center>
      
    </>
  );
};

export default ItemListContainer;
