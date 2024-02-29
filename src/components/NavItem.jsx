import { Box, Flex, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'

const NavItem = ({ data}) => {
    const router = useRouter();
    return (
      <Box
        as="a"
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          bg={router.pathname == data?.url ? "cyan.400" : ""}
          color = {router.pathname == data?.url ? "white" : ""}
        >
          {data?.icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={data?.icon}
            />
          )}
          {data?.name}
        </Flex>
      </Box>
    );
  };

export default NavItem