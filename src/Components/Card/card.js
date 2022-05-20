import {Box,Image, Text, Flex, Button} from '@chakra-ui/react'
const Card = () => (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Box
        bg="#ffffff"
        borderRadius="lg"
        width="sm"
        minHeight="sm"
        border="1px solid lightgrey"
        overflow="hidden"
        color="blackAlpha.500"
        textAlign="center"
        backgroundColor="gray.300"
        fontWeight="bold"
      >
        <Box>
          <Image
            size="100px"
            fallbackSrc="https://via.placeholder.com/150"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            width="100%"
            height="auto"
            minHeight="245px"
            borderRadius="lg"
          />
        </Box>
        <Box p={5} pb={8} textAlign="center" color="gray.800">
          <Text fontWeight="bold" fontSize="xl" color="gray.800">
            Buzo de Frisa
          </Text>
          <Text fontSize="sm" mb={3} color="gray.800">
            $6500
          </Text>
          <Box>
            <Flex justifyContent="space-around" alignItems="center">
              <Button
                variant="solid"
                size="md"
                backgroundColor="pink.300"
                color="gray.800"
              >
                -
              </Button>
              <Text color="gray.800">0</Text>
              <Button
                variant="solid"
                size="md"
                border={1}
                backgroundColor="pink.300"
                color="gray.800"
              >
                +
              </Button>
            </Flex>
          </Box>
          <Button
            variant="solid"
            size="md"
            color="gray.800"
            colorScheme="whatsapp"
          >
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </Box>
  )

  export default Card;