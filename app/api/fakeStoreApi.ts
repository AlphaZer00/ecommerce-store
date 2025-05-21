import type { Product } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        console.table(data);
        return data;
    } catch (error) {
        console.error("fetchProducts failed", error);
        return [];
    }
}
