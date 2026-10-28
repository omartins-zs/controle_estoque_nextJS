"use client";

import React from "react";
import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <Stack spacing="6">
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.400" letterSpacing="wider">
          CADASTRO
        </Text>
        <Stack spacing="1">
          <ChakraLink
            as={Link}
            href="/"
            _hover={{ bg: "gray.100", textDecoration: "none" }}
            px="4"
            py="2.5"
            borderRadius="md"
            bg={pathname === "/" ? "blue.50" : "transparent"}
            color={pathname === "/" ? "blue.700" : "gray.600"}
            fontWeight={pathname === "/" ? "bold" : "medium"}
            borderLeft={pathname === "/" ? "3px solid #2563eb" : "3px solid transparent"}
          >
            <Text fontSize="sm">PRODUTOS</Text>
          </ChakraLink>
        </Stack>
      </Stack>

      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.400" letterSpacing="wider">
          ESTOQUE
        </Text>
        <Stack spacing="1">
          <ChakraLink
            as={Link}
            href="/balance"
            _hover={{ bg: "gray.100", textDecoration: "none" }}
            px="4"
            py="2.5"
            borderRadius="md"
            bg={pathname === "/balance" ? "blue.50" : "transparent"}
            color={pathname === "/balance" ? "blue.700" : "gray.600"}
            fontWeight={pathname === "/balance" ? "bold" : "medium"}
            borderLeft={pathname === "/balance" ? "3px solid #2563eb" : "3px solid transparent"}
          >
            <Text fontSize="sm">SALDO</Text>
          </ChakraLink>

          <ChakraLink
            as={Link}
            href="/stockEntries"
            _hover={{ bg: "gray.100", textDecoration: "none" }}
            px="4"
            py="2.5"
            borderRadius="md"
            bg={pathname === "/stockEntries" ? "blue.50" : "transparent"}
            color={pathname === "/stockEntries" ? "blue.700" : "gray.600"}
            fontWeight={pathname === "/stockEntries" ? "bold" : "medium"}
            borderLeft={pathname === "/stockEntries" ? "3px solid #2563eb" : "3px solid transparent"}
          >
            <Text fontSize="sm">ENTRADAS</Text>
          </ChakraLink>

          <ChakraLink
            as={Link}
            href="/stockOutputs"
            _hover={{ bg: "gray.100", textDecoration: "none" }}
            px="4"
            py="2.5"
            borderRadius="md"
            bg={pathname === "/stockOutputs" ? "blue.50" : "transparent"}
            color={pathname === "/stockOutputs" ? "blue.700" : "gray.600"}
            fontWeight={pathname === "/stockOutputs" ? "bold" : "medium"}
            borderLeft={pathname === "/stockOutputs" ? "3px solid #2563eb" : "3px solid transparent"}
          >
            <Text fontSize="sm">SAÍDAS</Text>
          </ChakraLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SidebarNav;
