import ItemListDetail from '../ItemsDetail/itemListDetail';
import { useEffect, useState } from 'react';
import { getProductsById } from '../async/async';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const { prodId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductsById(prodId).then((response) => {
      setProductos(response);
      setLoading(false);
    });
  }, [prodId]);

  return <>{loading ? <Loader /> : <ItemListDetail detail={productos} />}</>;
};

export default ItemDetailContainer;
