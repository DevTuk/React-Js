import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import { useState, createContext } from 'react';

export const Context = createContext();

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const addItems = (productToAdd) => {
    setCart([...cart, productToAdd]);
  };
  const removeItems = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  return (
    <ChakraProvider>
      <Context.Provider value={{ setCart, cart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<ItemListContainer greeting='Welcome' />}
            />
            <Route
              path='/category/:categoryId'
              element={<ItemListContainer />}
            />
            <Route path='/detail/:prodId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>Página no encontrada</h1>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Context.Provider>
    </ChakraProvider>
  );
}
export default App;
