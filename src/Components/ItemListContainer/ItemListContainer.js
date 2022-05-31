import { useEffect, useState } from 'react';
import ItemList from '../Items/ItemList';
import { CustomFetch, productsByCategory } from '../async/async';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!categoryId) {
      CustomFetch().then((response) => {
        setProductos(response);
        setLoading(false);
      });
    } else {
      setLoading(true);
      productsByCategory(categoryId).then((response) => {
        setProductos(response);
      });
      setLoading(false);
    }
  }, [categoryId]);

  return <>{loading ? <Loader /> : <ItemList producto={products} />}</>;
};

export default ItemListContainer;
