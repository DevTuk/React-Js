import { Container, Stack } from '@chakra-ui/react';
const Footer = () => {
  return (
    <>
      <Stack h='100px' mx={5} mt={10} backgroundColor='#FFBCDE' roundedTop={50}>
        <Container maxW='container.sm' verticalAlign='middle' mt='40px'>
          <p>© 2022 Copyright | Diego Barros Sofio | Com31190 React JS</p>
        </Container>
      </Stack>
    </>
  );
};
export default Footer;
