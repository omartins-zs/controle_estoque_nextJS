"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FiCheckCircle, FiLock, FiMail, FiPackage, FiShield, FiUser } from "react-icons/fi";
import { DEMO_USERS, DemoUser } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState("admin@estoque.com");
  const [password, setPassword] = useState("Password@123");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        toast({
          title: "Erro de autenticação",
          description: data?.message || "Credenciais inválidas.",
          status: "error",
          duration: 3500,
          isClosable: true,
        });
        setLoading(false);
        return;
      }

      if (typeof window !== "undefined" && data.user) {
        localStorage.setItem("estoque_user", JSON.stringify(data.user));
      }

      toast({
        title: `Bem-vindo(a), ${data.user.name}!`,
        description: "Redirecionando para o controle de estoque...",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      router.push(data.redirectTo || "/");
      router.refresh();
    } catch {
      toast({
        title: "Erro de conexão",
        description: "Falha de comunicação com o servidor.",
        status: "error",
        duration: 3500,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const handleSelectDemo = (demo: DemoUser) => {
    setEmail(demo.email);
    setPassword(demo.password);
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50" py="12" px="4">
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, lg: 12 }} spacing="8" alignItems="stretch">
          <Box
            gridColumn={{ lg: "span 7" }}
            bg="white"
            p={{ base: 6, sm: 8 }}
            borderRadius="xl"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.200"
          >
            <HStack spacing="3" mb="6">
              <Flex
                w="10"
                h="10"
                bg="blue.600"
                color="white"
                borderRadius="lg"
                align="center"
                justify="center"
              >
                <Icon as={FiPackage} boxSize="5" />
              </Flex>
              <Box>
                <Heading size="md" color="gray.800">
                  Controle de Estoque
                </Heading>
                <Text fontSize="xs" color="gray.500">
                  Autenticação e controle de acesso
                </Text>
              </Box>
            </HStack>

            <form onSubmit={handleSubmit}>
              <Stack spacing="4">
                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="gray.700">
                    <HStack spacing="2">
                      <Icon as={FiMail} color="gray.400" />
                      <Text>E-mail ou Usuário</Text>
                    </HStack>
                  </FormLabel>
                  <Input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@estoque.com"
                    focusBorderColor="blue.500"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="gray.700">
                    <HStack spacing="2">
                      <Icon as={FiLock} color="gray.400" />
                      <Text>Senha</Text>
                    </HStack>
                  </FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    focusBorderColor="blue.500"
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  fontSize="sm"
                  isLoading={loading}
                  mt="2"
                >
                  Entrar no Sistema
                </Button>
              </Stack>
            </form>
          </Box>

          <Box
            gridColumn={{ lg: "span 5" }}
            bg="white"
            p="6"
            borderRadius="xl"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.200"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <HStack spacing="2" mb="3">
                <Icon as={FiShield} color="blue.600" />
                <Heading size="sm" color="gray.800">
                  Perfis de Demonstração
                </Heading>
              </HStack>
              <Text fontSize="xs" color="gray.500" mb="4">
                Clique em um perfil para preencher as credenciais de teste em 1 clique:
              </Text>

              <VStack spacing="3" align="stretch">
                {DEMO_USERS.map((demo) => {
                  const isSelected = email === demo.email;
                  return (
                    <Box
                      key={demo.id}
                      as="button"
                      type="button"
                      onClick={() => handleSelectDemo(demo)}
                      textAlign="left"
                      p="3"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor={isSelected ? "blue.500" : "gray.200"}
                      bg={isSelected ? "blue.50" : "gray.50"}
                      _hover={{ bg: isSelected ? "blue.50" : "gray.100" }}
                      transition="all 0.2s"
                    >
                      <Flex justify="space-between" align="center" mb="1">
                        <Text fontSize="xs" fontWeight="bold" color="blue.700">
                          {demo.role}
                        </Text>
                        <Text fontSize="10px" fontFamily="mono" color="gray.500">
                          Password@123
                        </Text>
                      </Flex>
                      <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                        {demo.name}
                      </Text>
                      <Text fontSize="xs" color="gray.500" fontFamily="mono">
                        {demo.email}
                      </Text>
                    </Box>
                  );
                })}
              </VStack>
            </Box>

            <Box mt="6" p="3" bg="blue.50" borderRadius="md">
              <HStack spacing="2">
                <Icon as={FiCheckCircle} color="blue.600" />
                <Text fontSize="xs" color="blue.800">
                  Ambiente local e containerizado sincronizados com dados iniciais.
                </Text>
              </HStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
