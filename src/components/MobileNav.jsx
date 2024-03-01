import React from "react";
import Link from "next/link";

import {
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  useColorMode,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <div>
        <Link href="/">
          <img
            src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
            alt="dilfoods-logo"
            style={{ width: "80px" }}
          />
        </Link>
      </div>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            ></MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default MobileNav;
