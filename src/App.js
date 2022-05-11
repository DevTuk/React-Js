import logo from './logo.svg';
import './App.css';
import  Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer />
    </div>
    </ChakraProvider>
  );
}
export default App;