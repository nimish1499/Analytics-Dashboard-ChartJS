import { Avatar, Box, CloseButton, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

import NavItem from "./NavItem";
import { FiShoppingBag } from "react-icons/fi";
import { FaChartPie, FaChartBar, FaChartLine } from "react-icons/fa";

import {
  useBreakpointValue,
} from "@chakra-ui/react";

const LinkItems = [
  { name: "Home", icon: FiShoppingBag, url:"/" },
  { name: "Pie Chart", icon: FaChartPie, url:"/pie-chart" },
  { name: "Bar Chart", icon: FaChartBar, url:"/bar-chart" },
  { name: "Line Chart", icon: FaChartLine, url:"/line-chart" },
];

const SideBarContent = ({ onClose, ...rest }) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  return (
    <>
    {isMobile ? 
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full"}}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Avatar
          size="lg"
          src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
          alt="DilFoods"
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link href={`${link?.url?.toLowerCase() ?? "/"}`} onClick={() => onClose()}>
          <NavItem key={link?.name} icon={link?.icon} data={link}>
            {link?.name ?? ""}
          </NavItem>
        </Link>
      ))}
    </Box>
    :
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full"}}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Avatar
          size="lg"
          src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
          alt="DilFoods"
        />
        <Flex>{LinkItems.map((link) => (
        <Link href={`${link?.url?.toLowerCase() ?? "/"}`} onClick={() => onClose()}>
          <NavItem key={link?.name} icon={link?.icon} data={link}>
            {link?.name ?? ""}
          </NavItem>
        </Link>
      ))}</Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      
    </Box>}
    </>

  );
};

export default SideBarContent;
