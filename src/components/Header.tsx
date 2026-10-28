"use client";

import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiLogOut, FiMenu, FiPackage, FiUser } from "react-icons/fi";
import { SessionUser, DEMO_USERS } from "@/lib/auth";

const Header = () => {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { onOpen } = useSidebarContext();
  const [user, setUser] = useState<SessionUser>({
    id: DEMO_USERS[0].id,
    name: DEMO_USERS[0].name,
    username: DEMO_USERS[0].username,
    email: DEMO_USERS[0].email,
    role: DEMO_USERS[0].role,
    avatar: DEMO_USERS[0].avatar,
    permissions: DEMO_USERS[0].permissions,
  });

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch("/api/auth/session");
        if (res.ok) {
          const data = await res.json();
          if (data?.user) {
            setUser(data.user);
            return;
          }
        }
      } catch {
        // Fallback
      }

      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("estoque_user");
        if (stored) {
          try {
            setUser(JSON.parse(stored));
          } catch {
            // Ignora
          }
        }
      }
    }

    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Ignora
    }
    if (typeof window !== "undefined") {
      localStorage.removeItem("estoque_user");
    }
    router.push("/login");
    router.refresh();
  };

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1120}
      h="20"
      mx="auto"
      px="4"
      py="2"
      align="center"
      boxShadow="0 1px 0 #e2e8f0"
      color="gray.600"
      fontWeight="bold"
    >
      {isMobile && (
        <IconButton
          aria-label="Abrir menu"
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="ghost"
          fontSize="20"
          mr="2"
        />
      )}

      <HStack spacing="2">
        <Flex
          w="8"
          h="8"
          bg="blue.600"
          color="white"
          borderRadius="md"
          align="center"
          justify="center"
        >
          <Icon as={FiPackage} />
        </Flex>
        <Text fontSize="lg" color="gray.800" letterSpacing="tight">
          CONTROLE DE <Text as="span" color="blue.600">ESTOQUE</Text>
        </Text>
      </HStack>

      <Flex ml="auto" align="center" gap="3">
        <Box textAlign="right" display={{ base: "none", md: "block" }}>
          <Text fontSize="sm" color="gray.800" lineHeight="1.2">
            {user.name}
          </Text>
          <Text fontSize="11px" color="gray.500" fontWeight="normal">
            {user.role}
          </Text>
        </Box>

        <Menu>
          <MenuButton
            as={Button}
            rounded="full"
            variant="link"
            cursor="pointer"
            minW={0}
          >
            <Avatar size="sm" name={user.name} src={user.avatar} />
          </MenuButton>
          <MenuList fontSize="sm" fontWeight="normal">
            <Box px="3" py="2">
              <Text fontWeight="bold" color="gray.800">
                {user.name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {user.email}
              </Text>
            </Box>
            <MenuDivider />
            <MenuItem icon={<Icon as={FiUser} />} onClick={() => router.push("/login")}>
              Trocar Perfil (Demo)
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<Icon as={FiLogOut} />} color="red.500" onClick={handleLogout}>
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
