import { useEffect, useState } from 'react';
import ItemList from '../Items/ItemList';
import { CustomFetch, productsByCategory } from '../async/async';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (!categoryId) {
      CustomFetch()
        .then((response) => {
          setProductos(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      productsByCategory(categoryId)
        .then((response) => {
          setProductos(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ItemList producto={products} />
    </>
  );
};

export default ItemListContainer;
