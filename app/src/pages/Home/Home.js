import React from 'react'
import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  const navTo = (path) => {
    navigate(path);
  }
  return (
    <Container maxW="container.lg">
      <Center p={4} minHeight="70vh">
        <VStack>
          <Container maxW="container.md" textAlign="center">
            <Heading size="2xl" mb={4} color="gray.700">
              Zhuoda's Schedule App
            </Heading>

            <Text fontSize="xl" color="gray.500">
              Feel free to add event for yourself.
            </Text>

            <Button
              mt={8}
              colorScheme="purple"
              onClick={() => {
                navTo("/Schedule")
              }}
            >
              Let's get started!
            </Button>

            {/* <Text my={2} fontSize="sm" color="gray.500">
            102+ builders have signed up in the last 30 days
          </Text> */}
          </Container>
        </VStack>
      </Center>
    </Container>
  )
}

export default Home