// import './App.css';
// import  Navbar from './Components/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
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
