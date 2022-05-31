import { useEffect, useState } from 'react';
import ItemList from '../Items/ItemList';
import { CustomFetch, productsByCategory } from '../async/async';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      CustomFetch().then((response) => {
        setProductos(response);
      });
    } else {
      productsByCategory(categoryId).then((response) => {
        setProductos(response);
      });
    }
  }, [categoryId]);

  return (
    <>
      <ItemList producto={products} />
    </>
  );
};

export default ItemListContainer;
