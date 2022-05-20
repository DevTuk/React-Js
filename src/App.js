import './App.css';
// import  Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/footer';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Header from './Components/Header/Header';
import CountFunction from './Components/Contador/Contador';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(1);
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <ChakraProvider>
      <div className='App'>
        <Header valor1={count} />
        <ItemListContainer greeting='Welcome' />
        <CountFunction sumamos={increment}restamos={decrement}valor={count}stock={4}/>
        <Footer />
      </div>
    </ChakraProvider>
  );
}
export default App;
