import logo from './logo.svg';
import './App.css';
import  Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/footer';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <img src={logo} className='App-logo'alt='logo' />
      </header>
      <Footer />
    </div>
    </ChakraProvider>
  );
}
export default App;