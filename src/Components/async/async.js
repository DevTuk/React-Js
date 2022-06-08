import productos from '../Items/Productos';

export const CustomFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 10);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((productos) => productos.id === id));
    }, 10);
  });
};

export const productsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        productos.filter((productos) => productos.category === categoryId)
      );
    }, 10);
  });
};
