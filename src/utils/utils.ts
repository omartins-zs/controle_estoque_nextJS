import { Product } from "@/types";

export const getProductById = (id: string, listProducts: Product[]) => {
    return listProducts.find((item) => item.product_id === id)?.product_name || 'teste';
};