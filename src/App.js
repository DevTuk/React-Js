// import './App.css';
// import  Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Header from './Components/Header/Header';
import theme from './theme';
import ItemDetailContainer from './Components/ItemDetailContainer/itemDetailContainer';

function App() {
  return (
    <ChakraProvider>
      <Header valor={1} />
      <ItemListContainer greeting='Welcome' />
      <ItemDetailContainer />

      <Footer />
    </ChakraProvider>
  );
}
export default App;
