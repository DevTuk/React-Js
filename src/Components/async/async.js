import productos from '../Items/Productos';

export const CustomFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductsId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((producto) => producto.id === id));
    }, 2000);
  });
}