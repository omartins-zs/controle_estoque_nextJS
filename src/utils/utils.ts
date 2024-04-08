import { Product } from "@/types";

export const getProductById = (id: string, listProducts: Product[]) => {
    return listProducts.find((item) => item.product_id === id)?.product_name || 'teste';
};

export const removeItemById = <T extends { id: string }>(
    list: T[],
    id: string,
    storageKey: string,
    setList: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    const newArray = list.filter((item) => item.id !== id);

    localStorage.setItem(storageKey, JSON.stringify(newArray));

    setList(newArray);
  };
  export const setItemInLocalStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  export const getItemFromLocalStorage = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };