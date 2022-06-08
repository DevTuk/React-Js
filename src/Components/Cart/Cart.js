import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const Cart = () => {
  const {cart, totalCart, removeItems } = useContext(CartContext);
  const {item} = cart;


  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.nombre} - {item.cantidad} -{item.precio}
          </li>
        ))}
      </ul>
      <h2>Total Carrito: {totalCart()}</h2>
      <button> Comprar </button>
      <button onClick={() => removeItems(item.id)}> Borrar </button>
    </div>
  );
};

export default Cart;
