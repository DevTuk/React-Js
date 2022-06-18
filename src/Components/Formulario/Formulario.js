import { useForm } from 'react-hook-form';
import {
  FormControl,
  Box,
  Flex,
  Input,
  Button,
  Center,
  Heading,
  FormLabel,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Services/Firebase';
import CartDetail from '../Cart/CartDetail';

const Formulario = () => {
  const { register, handleSubmit } = useForm();
  const { cart, totalCart, removeCart } = useContext(CartContext);
  const [btnDisabled, setBtnDisabled] = useState(false);
  
  const [cliente, setCliente] = useState({
    Nombre: '',
    Apellido: '',
    Email: '',
    Telefono: '',
    Mensaje: '',
  });

  const onChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = () => {
    const objOrder = {
      cliente,
      items: cart,
      total: totalCart(),
    };
    console.log(objOrder);

    const refCollectionOrder = collection(db, 'Orden de Compra');
    addDoc(refCollectionOrder, objOrder).then(({ id }) => {
      console.log(`se creo la orden id: ${id}`);
    });
    setBtnDisabled(true);
    removeCart();
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <Center>
      <VStack maxWidth={800} mx={15}>
        <Heading textAlign='start' mb={5}>
          Completa los datos para finalizar tu compra
        </Heading>
        <Flex>
          <CartDetail />
          <Box width={600}>
            <Box
              backgroundColor='white'
              rounded={10}
              //border='1px solid #c5caff'
              p={10}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type={'text'}
                    autoFocus={true}
                    mb={3}
                    name='Nombre'
                    placeholder='Nombre'
                    {...register('Nombre', { required: true })}
                    value={cliente.Nombre}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Apellido</FormLabel>
                  <Input
                    type={'text'}
                    mb={3}
                    name='Apellido'
                    placeholder='Apellido'
                    {...register('Apellido', { required: true })}
                    value={cliente.Apellido}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Telefono</FormLabel>
                  <Input
                    type={'number'}
                    mb={3}
                    name='Telefono'
                    placeholder='1112223333'
                    {...register('Telefono', { required: true })}
                    value={cliente.Telefono}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    mb={3}
                    type={'email'}
                    name='Email'
                    placeholder='email@dominio.com'
                    {...register('Email', {
                      required: true,
                    })}
                    value={cliente.Email}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Mensaje</FormLabel>
                  <Input
                    mb={3}
                    type={'text'}
                    name='Mensaje'
                    placeholder='Que tendríamos que saber?'
                    {...register('Mensaje')}
                    value={cliente.Mensaje}
                    onChange={onChange}
                  />
                  <Button
                    type='submit'
                    disabled={btnDisabled}
                    onClick={() => createOrder()}
                  >
                    Realizar Pedido
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Flex>
      </VStack>
    </Center>
  );
};

export default Formulario;