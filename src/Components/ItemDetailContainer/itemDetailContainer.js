import ItemListDetail from '../ItemsDetail/itemListDetail';
import { useEffect, useState } from 'react';
import { getProductsById } from '../async/async';

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductsById('2').then((response) => {
      setProductos(response);
    });
  }, []);

  return (
    <>
      <ItemListDetail detail={productos} />
    </>
  );
};

export default ItemDetailContainer;
