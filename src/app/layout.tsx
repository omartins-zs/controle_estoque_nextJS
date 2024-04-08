import type { Metadata } from "next";
import font from "@/config/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarProvider } from "../contexts/SidebarContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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