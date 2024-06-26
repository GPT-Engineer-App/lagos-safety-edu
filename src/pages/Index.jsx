import { Container, Text, VStack, Heading, Box, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">Safety and Preventative Measures for Lagosians</Heading>
        <Box boxSize="sm">
          <Image src="/images/safety_measures.jpg" alt="Safety Measures" />
        </Box>
        <Text fontSize="lg" textAlign="center">Learn how to stay safe and prevent accidents in Lagos.</Text>
        <List spacing={3} textAlign="left">
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Always wear a seatbelt while driving.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Use pedestrian crossings and bridges.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Avoid using your phone while driving.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Keep a first aid kit at home and in your car.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Be aware of your surroundings and report suspicious activities.
          </ListItem>
        </List>
      </VStack>
    </Container>
  );
};

export default Index;