import { Grid } from '@chakra-ui/react';
import Card from '../Card/Card';

const ItemList = ({ producto }) => {
  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap={1}>
        {producto.map((producto) => (
          <Card
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            stock={producto.stock}
            imagen={producto.imagen}
          />
        ))}
      </Grid>
    </>
  );
};

export default ItemList;
