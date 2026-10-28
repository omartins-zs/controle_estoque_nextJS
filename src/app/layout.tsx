import type { Metadata } from "next";
import { fontMerriweather as font } from "@/config/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarProvider } from "../contexts/SidebarContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Controle de Estoque — Next.js & Chakra UI",
  description: "Sistema web moderno de controle de estoque, inventário, entradas, saídas e balanço.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <ChakraProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
