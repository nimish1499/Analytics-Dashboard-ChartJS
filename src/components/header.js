import React from "react";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

import { FiShoppingBag } from "react-icons/fi";
import { FaChartPie, FaChartBar, FaChartLine } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button, useColorMode } from "@chakra-ui/react";

import {
  Drawer,
  DrawerContent,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";

const SideBarContent = dynamic(() => import("./SideBarContent"), { ssr: true });
const MobileNav = dynamic(() => import("./MobileNav"));

const LinkItems = [
  { name: "Home", icon: FiShoppingBag, url: "/" },
  { name: "Pie Chart", icon: FaChartPie, url: "/pie-chart" },
  { name: "Bar Chart", icon: FaChartBar, url: "/bar-chart" },
  { name: "Line Chart", icon: FaChartLine, url: "/line-chart" },
];

export default function Header() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {!isMobile ? (
        <div className="header">
            <div className="header-img">
            <Link href="/">
              <img
                src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
                alt="dilfoods-logo"
              />
              </Link>
              <div className="header-center">
            {LinkItems.map((item) => (  
                <div
                  key={item?.name}
                  className={`header-item ${
                    router.pathname == item?.url ? "active" : ""
                  }`}
                >
                  <Link
                href={`${item?.url?.toLowerCase()}`}
                onClick={() => onClose()}
              >
                  {item?.name ?? ""}
              </Link>
                </div>
            ))}
          </div>
            </div>

          
          <div className="theme-toggle">
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </div>
        </div>
      ) : (
        <>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
            display={{ base: "block", md: "none" }}
          >
            <DrawerContent>
              <SideBarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>

          <MobileNav onOpen={onOpen} />
        </>
      )}
    </>
  );
}
