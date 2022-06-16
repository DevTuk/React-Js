import { Grid, Center } from '@chakra-ui/react';
import Items from '../Items/Items';

const ItemList = ({ producto }) => {
  return (
    <>
      <Center>
        <Grid
          templateColumns={{ md: 'repeat(4, 1fr)', base: 'repeat(1, 1fr)' }}
          gap={2}
          mx={-8}
        >
          {producto.map((producto) => (
            <Items key={producto.id} {...producto} />
          ))}
        </Grid>
      </Center>
    </>
  );
};

export default ItemList;
