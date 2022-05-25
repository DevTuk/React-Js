import { useEffect, useState } from 'react';
import ItemList from '../Items/ItemList';
import { CustomFetch } from '../async/async';

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);

  useEffect(() => {
    CustomFetch().then((response) => {
      setProductos(response);
    });
  }, []);

  return (
    <>
      <ItemList producto={products} />
      {/* <ItemDetail /> tiene que venir acá, mostrar el detalle del producto.  */}
    </>
  );
};

export default ItemListContainer;
