"use client"
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Entry, Product } from "@/types";
import { getProductById, removeItemById, setItemInLocalStorage, getItemFromLocalStorage } from "@/utils/utils";

const StockEntries = () => {
  const [amount, setAmount] = useState("");
  const [product_id, setProduct_id] = useState("0");
  const [listStockEntries, setStockEntries] = useState<Entry[]>([]);
  const [listProducts, setListProducts] = useState<Product[]>([]);

  useEffect(() => {
    const db_stock_entries = getItemFromLocalStorage<Entry[]>("db_stock_entries") || [];
    setStockEntries(db_stock_entries);

    const db_products = getItemFromLocalStorage<Product[]>("db_products") || [];
    setListProducts(db_products);
  }, []);

  const handleNewEntry = () => {
    if (!amount || (product_id === "0")) {
      return alert("Selecione o produto e a quantidade!");
    }

    const id = Math.random().toString(36).substring(2);

    const newEntry = { id, amount: Number(amount), product_id };

    const updatedEntries = [...listStockEntries, newEntry];

    setItemInLocalStorage("db_stock_entries", updatedEntries);
    setStockEntries(updatedEntries);

    setAmount("");
    setProduct_id("0");
  };

  const removeItemId = (id: string) => {
    removeItemById(listStockEntries, id, "db_stock_entries", setStockEntries);
  };


  return (
    <Flex h="100vh" flexDirection="column">
      <Header />

      <Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="100vh">
        <Sidebar />

        <Box w="100%">
          <SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
            <Select
              value={product_id}
              onChange={(e) => setProduct_id(e.target.value)}
            >
              <option value="0">Selecione um item</option>
              {listProducts &&
                listProducts.length > 0 &&
                listProducts.map((item, i) => (
                  <option key={i} value={item.product_id}>
                    {item.product_name}
                  </option>
                ))}
            </Select>
            <Input
              placeholder="Quantidade"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button colorScheme='linkedin' w="40" onClick={handleNewEntry}>
              SALVAR
            </Button>
          </SimpleGrid>

          <Box overflowY="auto" height="80vh">
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" fontSize="14px">
                    Nome
                  </Th>
                  <Th fontWeight="bold" fontSize="14px">
                    Qtd.
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {listStockEntries.map((item, i) => (
                  <Tr key={i}>
                    <Td color="gray.500">{getProductById(item.product_id, listProducts)}</Td>
                    <Td color="green.300">{item.amount}</Td>
                    <Td textAlign="end">
                      <Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="red.500"
                        fontWeight="bold"
                        onClick={() => removeItemId(item.id)}
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

export default StockEntries;