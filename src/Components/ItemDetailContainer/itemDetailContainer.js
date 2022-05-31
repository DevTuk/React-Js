import ItemListDetail from '../ItemsDetail/itemListDetail';
import { useEffect, useState } from 'react';
import { getProductsById } from '../async/async';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const { prodId } = useParams();

  useEffect(() => {
    getProductsById(prodId).then((response) => {
      setProductos(response);
    });
  });
  return (
    <>
      <ItemListDetail detail={productos} />
    </>
  );
};

export default ItemDetailContainer;
