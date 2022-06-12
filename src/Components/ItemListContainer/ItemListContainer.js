import { useEffect, useState } from 'react';
import ItemList from '../Items/ItemList';
// import { CustomFetch, productsByCategory } from '../async/async';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../Services/Firebase';
import { Box, Text } from '@chakra-ui/react';

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const referenciaColeccion = categoryId
      ? query(collection(db, 'Productos'), where('category', '==', categoryId))
      : collection(db, 'Productos');
    getDocs(referenciaColeccion)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProductos(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  // if (!categoryId) {
  //   CustomFetch()
  //     .then((response) => {
  //       setProductos(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // } else {
  //   productsByCategory(categoryId)
  //     .then((response) => {
  //       setProductos(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {products.length > 0 ? (
        <ItemList producto={products} />
      ) : (
        <Box
          alignItems='center'
          border='1px solid #c5caff'
          mx={10}
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          rounded={10}
        >
          <Text
            fontWeight={700}
            textAlign='center'
            fontSize={{ base: '2xl', sm: '2xl' }}
          >
            Ups... ¡No hay productos!
          </Text>
        </Box>
      )}
    </>
  );
};

export default ItemListContainer;
