import productos from '../Items/Productos';

export const CustomFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};
