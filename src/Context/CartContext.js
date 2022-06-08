import { useState, createContext } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const productInCart = cart.find(
        (product) => product.id === productToAdd.id
      );
      productInCart.cantidad += productToAdd.cantidad;
      setCart([...cart]);
    }
  };
  const isInCart = (id) => {
    return cart.find((product) => product.id === id);
  };

  const removeItems = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  const removeCart = () => {
    setCart([]);
  };

  const getQuantity = () => {
    let acumulador = 0;
    cart.forEach((productToAdd) => {
      acumulador += productToAdd.cantidad;
    });
    return acumulador;
  };

  const totalCart = () => {
    let acumulador = 0;
    cart.forEach((productToAdd) => {
      const precio = Number(productToAdd.precio.replace('$', ''));
      acumulador += precio * productToAdd.cantidad;
    });
    return '$' + acumulador;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, isInCart, getQuantity, removeItems, totalCart, removeCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
