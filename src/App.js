import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Welcome' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:prodId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
}
export default App;
