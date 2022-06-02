import { Grid } from '@chakra-ui/react';
import Items from '../Items/Items';

const ItemList = ({ producto }) => {
  return (
    <>
      <Grid
        templateColumns={{ md: 'repeat(4, 1fr)', base: 'repeat(1, 1fr)' }}
        gap={2}
      >
        {producto.map((producto) => (
          <Items key={producto.id} {...producto} />
        ))}
      </Grid>
    </>
  );
};

export default ItemList;
