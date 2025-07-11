'use server';

import { getProducts, getProduct } from '@/lib/placeholder-data';
import type { Product } from '@/lib/types';

// Add type for optional limit param
type GetProductsParams = {
  limit?: number;
};

// Updated to support limit (default = 20)
export async function getProductsAction({ limit = 20 }: GetProductsParams = {}): Promise<Product[]> {
  return await getProducts(limit);
}

// Unchanged: get single product by ID
export async function getProductAction(id: string): Promise<Product | null> {
  return await getProduct(id);
}
