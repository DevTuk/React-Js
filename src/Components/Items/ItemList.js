import { Grid } from '@chakra-ui/react';
import Items from '../Items/Items';

const ItemList = ({ producto }) => {
  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap={1}>
        {producto.map((producto) => (
          <Items key={producto.id} {...producto} />
        ))}
      </Grid>
    </>
  );
};

export default ItemList;
