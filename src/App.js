import './App.css';
// import  Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Header from './Components/Header/Header';
import ItemCount from './Components/ItemCount/ItemCount';


function App() {

   return (
    <ChakraProvider>
      <div className='App'>
        <Header valor={1}/>
        <ItemListContainer greeting='Welcome' />
        <ItemCount stock={4}initial={1}/>
        <Footer />
      </div>
    </ChakraProvider>
  );
}
export default App;
