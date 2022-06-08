import { useState, createContext } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

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

  const removeItems = (e) => {
    setCart([]);
  };

  const getQuantity = (getQuantity) => {
    let acumulador = 0;
    cart.forEach((productToAdd) => {
      acumulador += productToAdd.cantidad;
    });
    return acumulador;
  };
  const totalCart = () => {
    let total = 0;
    cart.forEach((item) => {
      const precio = Number(item.precio.replace('$', ''));
      total = total + precio * item.cantidad;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, isInCart, getQuantity, removeItems, totalCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
