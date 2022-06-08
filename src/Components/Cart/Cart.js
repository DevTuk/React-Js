import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

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
    </div>
  );
};

export default Cart;
