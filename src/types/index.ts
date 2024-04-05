export interface Product {
  product_id: string;
  product_name?: string;
  amount?: number;
}

export interface Entry {
  id: string;
  product_id: string;
  amount?: number;
}

