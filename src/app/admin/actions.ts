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

// Unchanged: get single product by I'use server';

import { getProducts, getProduct } from '@/lib/placeholder-data';
import type { Product } from '@/lib/types';

type GetProductsParams = {
  limit?: number;
  startAfterCreatedAt?: string;
};

export async function getProductsAction({
  limit = 15,
  startAfterCreatedAt,
}: GetProductsParams = {}): Promise<Product[]> {
  return await getProducts(limit, startAfterCreatedAt);
}

export async function getProductAction(id: string): Promise<Product | null> {
  return await getProduct(id);
}
D
export async function getProductAction(id: string): Promise<Product | null> {
  return await getProduct(id);
}
