import React from 'react'

import { Image, Flex, Button, HStack, chakra } from '@chakra-ui/react';

import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";
const CTA = "Get Started"

function Header() {
  let navigate = useNavigate();
  const navTo = (path) => {
    navigate(path);
  }

  let data = [{
    label: "Home",
    path: "/Home",
  },
  {
    label: "Schedule",
    path: "/Schedule",
  },
  {
    label: "Add Event",
    path: "/AddEvent",
  }]

  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        {/* <Image src={Logo.src} h="50px" /> */}

        <HStack as="nav" spacing="5">
          {data.map((item, i) => (
              <Button variant="nav" onClick={() => navTo(item.path)}> {item.label} </Button>
          ))}
        </HStack>

        <HStack>
          <Button onClick={() => navTo("/Schedule")}>
            {CTA}
          </Button>
        </HStack>

      </Flex>
    </chakra.header>
  )
}

export default Header