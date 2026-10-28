"use client";

import {
  Box,
  Button,
  Flex,
  Input,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Product } from "@/types";

const INITIAL_PRODUCTS: Product[] = [
  { product_id: "prod-01", product_name: 'Monitor UltraWide 29" IPS' },
  { product_id: "prod-02", product_name: "Teclado Mecânico RGB Switch Blue" },
  { product_id: "prod-03", product_name: "Mouse Sem Fio Ergonômico 16000 DPI" },
  { product_id: "prod-04", product_name: "Headset Gamer 7.1 Surround" },
];

const INITIAL_ENTRIES = [
  { id: "ent-01", product_id: "prod-01", amount: "25" },
  { id: "ent-02", product_id: "prod-02", amount: "50" },
  { id: "ent-03", product_id: "prod-03", amount: "40" },
  { id: "ent-04", product_id: "prod-04", amount: "30" },
];

const INITIAL_OUTPUTS = [
  { id: "out-01", product_id: "prod-01", amount: "8" },
  { id: "out-02", product_id: "prod-02", amount: "15" },
];

const Produtos = () => {
  const [name, setName] = useState("");
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const toast = useToast();

  useEffect(() => {
    let db_products = localStorage.getItem("db_products")
      ? JSON.parse(localStorage.getItem("db_products")!)
      : null;

    if (!db_products || db_products.length === 0) {
      db_products = INITIAL_PRODUCTS;
      localStorage.setItem("db_products", JSON.stringify(INITIAL_PRODUCTS));

      if (!localStorage.getItem("db_stock_entries")) {
        localStorage.setItem("db_stock_entries", JSON.stringify(INITIAL_ENTRIES));
      }
      if (!localStorage.getItem("db_stock_outputs")) {
        localStorage.setItem("db_stock_outputs", JSON.stringify(INITIAL_OUTPUTS));
      }
    }

    setListProducts(db_products);
  }, []);

  const handleNewProduct = () => {
    if (!name.trim()) {
      toast({
        title: "Atenção",
        description: "Informe o nome do produto.",
        status: "warning",
        duration: 2500,
      });
      return;
    }

    if (verifyProductName()) {
      toast({
        title: "Produto já cadastrado",
        description: "Já existe um produto com este nome no inventário.",
        status: "error",
        duration: 3000,
      });
      return;
    }

    const id = "prod-" + Math.random().toString(36).substring(2, 8);
    const updated = [...listProducts, { product_id: id, product_name: name.trim() }];

    localStorage.setItem("db_products", JSON.stringify(updated));
    setListProducts(updated);
    setName("");

    toast({
      title: "Sucesso!",
      description: "Produto cadastrado com sucesso.",
      status: "success",
      duration: 2500,
    });
  };

  const verifyProductName = () => {
    return !!listProducts.find(
      (prod) => prod.product_name.toLowerCase() === name.trim().toLowerCase()
    );
  };

  const removeProduct = (id: string) => {
    const db_stock_outputs = (localStorage.getItem("db_stock_outputs")
      ? JSON.parse(localStorage.getItem("db_stock_outputs")!)
      : []) as Product[];

    const db_stock_entries = (localStorage.getItem("db_stock_entries")
      ? JSON.parse(localStorage.getItem("db_stock_entries")!)
      : []) as Product[];

    const hasOutputs = db_stock_outputs.filter((item) => item.product_id === id).length;
    const hasEntries = db_stock_entries.filter((item) => item.product_id === id).length;

    if (hasEntries || hasOutputs) {
      toast({
        title: "Ação bloqueada",
        description: "Este produto possui movimentações de entrada ou saída no estoque!",
        status: "warning",
        duration: 3500,
      });
      return;
    }

    const newArray = listProducts.filter((prod) => prod.product_id !== id);
    localStorage.setItem("db_products", JSON.stringify(newArray));
    setListProducts(newArray);

    toast({
      title: "Removido",
      description: "Produto removido do catálogo.",
      status: "info",
      duration: 2000,
    });
  };

  return (
    <Flex h="100vh" flexDirection="column" bg="gray.50">
      <Header />

      <Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="calc(100vh - 100px)">
        <Sidebar />

        <Box w="100%" bg="white" p="6" borderRadius="xl" boxShadow="sm" border="1px solid" borderColor="gray.200">
          <Text fontSize="lg" fontWeight="bold" color="gray.800" mb="4">
            Cadastro de Produtos
          </Text>

          <SimpleGrid minChildWidth={240} h="fit-content" spacing="4" mb="6">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do produto (ex: Teclado Mecânico RGB)"
              focusBorderColor="blue.500"
            />
            <Button colorScheme="blue" onClick={handleNewProduct} maxW={{ md: "200px" }}>
              CADASTRAR
            </Button>
          </SimpleGrid>

          <Box overflowY="auto" maxH="calc(100vh - 280px)">
            <Table variant="simple" size="md">
              <Thead bg="gray.50">
                <Tr>
                  <Th fontWeight="bold" fontSize="12px" color="gray.600">
                    ID DO PRODUTO
                  </Th>
                  <Th fontWeight="bold" fontSize="12px" color="gray.600">
                    NOME DO PRODUTO
                  </Th>
                  <Th textAlign="end" fontWeight="bold" fontSize="12px" color="gray.600">
                    AÇÕES
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {listProducts.map((item) => (
                  <Tr key={item.product_id} _hover={{ bg: "gray.50" }}>
                    <Td fontFamily="mono" fontSize="xs" color="gray.500">
                      {item.product_id}
                    </Td>
                    <Td fontWeight="medium" color="gray.800">
                      {item.product_name}
                    </Td>
                    <Td textAlign="end">
                      <Button
                        colorScheme="red"
                        variant="ghost"
                        size="sm"
                        fontSize="xs"
                        fontWeight="bold"
                        onClick={() => removeProduct(item.product_id)}
                      >
                        DELETAR
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Produtos;
